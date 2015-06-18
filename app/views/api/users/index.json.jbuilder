json.array! @users do |user|
  json.partial! user

  json.posts user.posts do |post|
    json.extract! post, :image_url, :id, :author_id, :created_at, :updated_at
  end
end
