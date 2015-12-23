json.extract!(annotation, :id, :body, :author_id, :step_id)
json.author_name annotation.author.username
