json.extract! post, :image_url, :id, :author_id, :body, :created_at, :updated_at
json.num_likes post.likes.size
json.comments post.comments
# comments ||= nil
# unless comments.nil?
#   json.comments(comments) do |comments|
#     json.partial!("comments/comment", comment)
#   end
# end
# json.like likes_hash[post.id]
json.likers post.likers
