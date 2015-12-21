# this is the data coming from ajax requests that will be sent to the stores

json.extract! @recipe, :title, :body, :created_at, :image_url, :id, :author_id
json.author_name @recipe.author.username
