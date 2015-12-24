json.extract!(annotation, :id, :body, :author_id, :step_id, :created_at, :updated_at)
json.author_name annotation.author.username
