# this is the data coming from ajax requests that will be sent to the stores

json.extract! @recipe, :title, :description, :ingredients, :created_at, :image_url, :id, :author_id
json.author_name @recipe.author.username
json.steps @recipe.steps do |step|
  json.extract!(step, :id, :body, :display_idx)
  json.annotations step.annotations
end
