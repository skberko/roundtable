# this is the data coming from ajax requests that will be sent to the stores

json.extract! @annotation, :body, :created_at, :id, :recipe_id, :author_id, :start_idx, :end_idx
json.author_name @annotation.author.username
