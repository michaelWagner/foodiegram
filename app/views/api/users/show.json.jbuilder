json.partial! @user

json.posts @user.posts do |post|
  json.partial! post
end
