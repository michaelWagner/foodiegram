json.array! @posts do |post|
  json.partial! post
  json.(post.author, :id, :username)
end
