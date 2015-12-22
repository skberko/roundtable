class UpdateRecipe < ActiveRecord::Migration
  def change
    rename_column :recipes, :body, :ingredients
  end
end
