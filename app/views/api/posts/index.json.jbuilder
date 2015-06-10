json.array! @posts do |post|
  json.extract! post, :image_url, :id, :author_id, :body, :created_at, :updated_at
end
