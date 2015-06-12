json.array! @posts do |post|
  json.partial! post
  json.username post.author.username
end
