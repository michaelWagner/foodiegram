json.partial! "api/posts/post", post: @post, comments: @comments
json.like @likes_hash[@post.id]

json.(@post.author, :username, :avatar_url)
