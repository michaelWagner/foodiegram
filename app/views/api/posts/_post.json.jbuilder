json.extract! post, :image_url, :id, :author_id, :body, :created_at, :updated_at
json.num_likes post.likes.size
json.comments post.comments, :author, :post_id, :body, :author_id
json.likers post.likers
