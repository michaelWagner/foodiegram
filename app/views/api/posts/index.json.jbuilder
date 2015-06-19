json.array! @posts do |post|
  json.partial! "api/posts/post", post: post, comments: @comments
  json.username post.author.username
  json.avatar_url post.author.avatar_url
  json.like @likes_hash[post.id]
  json.liked post.liked_by?(current_user)
end
