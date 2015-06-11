json.extract! @post, :image_url, :id, :author_id, :body, :created_at, :updated_at
json.(@post.author, :id, :username)
