
json.array! @annotations do |annotation|
  json.extract!(annotation, :body, :created_at, :step_id, :id, :author_id)
  # this is an n+1 query. by using 'includes' in controller, we can
  # get around this! fix later:
  json.author_name annotation.author.username
end
