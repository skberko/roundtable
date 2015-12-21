class Annotation < ActiveRecord::Base
  validates :recipe_id, :author_id, :body, :start_idx, :end_idx, presence: true

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :recipe,
    class_name: "Recipe",
    foreign_key: :recipe_id,
    primary_key: :id
end
