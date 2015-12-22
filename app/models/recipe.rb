class Recipe < ActiveRecord::Base
  validates :title, :ingredients, :author_id, presence: true

  belongs_to :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id

  has_many :steps, inverse_of: :recipe

  accepts_nested_attributes_for :steps

end
