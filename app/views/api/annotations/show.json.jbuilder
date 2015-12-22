# this is the data coming from ajax requests that will be sent to the stores

json.extract! @annotation, :body, :created_at, :id, :step_id, :author_id
json.author_name @annotation.author.username
