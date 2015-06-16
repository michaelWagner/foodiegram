json.array! @posts do |post|
  json.partial! post
  json.username post.author.username
  json.avatar_url post.author.avatar_url
end
