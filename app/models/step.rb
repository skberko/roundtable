class Step < ActiveRecord::Base
  validates :recipe, :display_idx, :body, presence: true

  belongs_to :recipe, inverse_of: :steps

  has_many :annotations,
    class_name: "Annotation",
    primary_key: :annotation_id,
    foreign_key: :id
end
