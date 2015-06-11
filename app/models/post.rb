class Post < ActiveRecord::Base
  validates :image_url, :author_id, presence: true

  belongs_to :author, class_name: "User", foreign_key: :author_id, primary_key: :id
end
