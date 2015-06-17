json.extract! user, :username,
                    :id,
                    :name,
                    :created_at,
                    :updated_at,
                    :description,
                    :avatar_url,
                    :likes

json.followers user.followers
json.following user.following
