json.array! @posts do |post|
  json.partial! "api/posts/post", post: post, likes_hash: @likes_hash
  json.username post.author.username
  json.avatar_url post.author.avatar_url
end
