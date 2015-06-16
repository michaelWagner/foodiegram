json.partial! "api/posts/post", post: @post, likes_hash: @likes_hash
json.(@post.author, :username, :avatar_url)
