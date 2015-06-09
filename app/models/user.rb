class User < ActiveRecord::Base
  validates :username, :session_token, presence: true
  validates :password, length: { minimum: 5, allow_nil: true }
  validates :username, uniqueness: true

  attr_reader :password
  after_initialize :ensure_session_token

  def self.new_guest
    new { |user| user.guest = true }
  end

  def self.find_by_credentials(user_params)
    user = User.find_by_username(user_params[:username])
    user.try(:is_password?, user_params[:password]) ? user : nil
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

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
