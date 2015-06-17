class Post < ActiveRecord::Base
  validates :image_url, :author_id, presence: true

  belongs_to :author,
             class_name: "User",
             foreign_key: :author_id,
             primary_key: :id

  has_many :likes, counter_cache: true
  has_many :likers, through: :likes, source: :user

  has_many :comments, class_name: "Comment"
  has_many :commenters, through: :comments, source: :user

  def liked_by?(user)
    likes.exists?(user_id: user.id)
  end
end
