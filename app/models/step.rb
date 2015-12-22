class Step < ActiveRecord::Base
  validates :recipe_idx, :display_idx, :body, presence: true

  belongs_to :recipe,
    class_name: "Recipe",
    primary_key: :id,
    foreign_key: :recipe_id

  has_many :annotations,
    class_name: "Annotation",
    primary_key: :annotation_id,
    foreign_key: :id
end
