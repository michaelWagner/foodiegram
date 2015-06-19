class User < ActiveRecord::Base
  validates :username, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 5, allow_nil: true }
  validates :username, uniqueness: true
  attr_reader :password
  after_initialize :ensure_session_token

  # has_one :feed
  has_many :posts, class_name: "Post", foreign_key: :author_id, primary_key: :id
  has_many :likes
  has_many :liked_posts, through: :likes, source: :post
  has_many :comments
  has_many :commented_posts, through: :comments, source: :post
  has_many :followings, :foreign_key => "follower_id",
                         :dependent => :destroy
  has_many :following, :through => :followings, :source => :followed
  has_many :reverse_followings, :foreign_key => "followed_id",
                                   :class_name => "Following",
                                   :dependent => :destroy
  has_many :followers, :through => :reverse_followings, :source => :follower

  def self.find_by_credentials(user_params)
    user = User.find_by_username(user_params[:username])
    user.try(:is_password?, user_params[:password]) ? user : nil
  end

  def feed
    feed = Post.includes(:likes, :comments).where(author_id: self.id)
    self.following.each do |user|
      feed += Post.includes(:likes, :comments).where(author_id: user.id)
    end

    feed.sort_by &:created_at
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def post_likes_hash
    zipped_likes = likes.pluck(:post_id).zip(likes)
    likes_hash = {}

    zipped_likes.each do |(id, like)|
      likes_hash[id] = like
    end

    likes_hash
  end

  def following?(followed)
    followings.find_by_followed_id(followed)
  end

  def follow!(followed)
    followings.create!(followed_id: followed.id)
  end

  def unfollow!(followed)
    followings.find_by_followed_id(followed).destroy
  end

  private

    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64
    end
end
