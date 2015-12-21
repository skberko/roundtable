class Recipe < ActiveRecord::Base
  validates :title, :body, :author_id, presence: true

  belongs_to :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id

  has_many :annotations,
    class_name: "Annotation",
    primary_key: :recipe_id,
    foreign_key: :id
end
