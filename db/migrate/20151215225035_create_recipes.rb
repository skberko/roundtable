class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :body, null: false

      t.timestamps null: false
    end
    add_index :recipes, :author_id
  end
end
