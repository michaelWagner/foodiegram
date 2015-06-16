json.partial! @post
json.(@post.author, :username, :avatar_url)
