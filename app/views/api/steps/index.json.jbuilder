json.array! @steps do |step|
  json.extract!(step, :id, :recipe_id, :display_idx, :body)
  json.annotations do
    json.partial! 'api/annotations/annotations', collection: step.annotations, as: :annotation
  end
end
