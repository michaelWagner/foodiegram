json.extract! post, :image_url, :id, :author_id, :body, :created_at, :updated_at
json.num_likes post.likes.size
json.like likes_hash[post.id]
json.likers post.likers
