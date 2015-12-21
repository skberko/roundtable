
json.array! @annotations do |annotation|
  json.extract!(annotation, :body, :created_at, :recipe_id, :id, :author_id, :start_idx, :end_idx)
  # this is an n+1 query. by using 'includes' in controller, we can
  # get around this! fix later:
  json.author_name annotation.author.username
end
