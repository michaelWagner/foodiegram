json.partial! "api/posts/post", post: post, likes_hash: @likes_hash, comments: @comments
json.(@post.author, :username, :avatar_url)
