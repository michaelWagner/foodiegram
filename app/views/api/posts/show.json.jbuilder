json.partial! @post
json.(@post.author, :id, :username)
