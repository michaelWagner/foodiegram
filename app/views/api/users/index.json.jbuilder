json.array! @users do |user|
  json.partial! user

  json.posts user.posts do |post|
    json.partial! post
  end
end
