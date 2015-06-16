class Like < ActiveRecord::Base
  validates :user, :photo, presence: true
  
  belongs_to :user
  belongs_to :post
end
