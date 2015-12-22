class Step < ActiveRecord::Base
  validates :recipe, :display_idx, :body, presence: true

  belongs_to :recipe, inverse_of: :steps

  has_many :annotations
end
