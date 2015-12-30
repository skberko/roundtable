class AddDescriptionToRecipes < ActiveRecord::Migration
  def change
    change_table :recipes do |t|
      t.text :description, null: false
    end
  end
end
