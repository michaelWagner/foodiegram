class Post < ActiveRecord::Base
  validates :image_url, :author_id, presence: true

  belongs_to :user

end
