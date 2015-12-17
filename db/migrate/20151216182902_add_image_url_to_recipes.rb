class AddImageUrlToRecipes < ActiveRecord::Migration
  def change
    change_table :recipes do |t|
      t.string :image_url
    end
  end
end
