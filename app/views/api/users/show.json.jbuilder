json.extract! @user, :username, :id, :created_at, :updated_at

json.posts @user.posts do |post|
  json.extract! post, :image_url, :id, :author_id, :body, :created_at, :updated_at
end
