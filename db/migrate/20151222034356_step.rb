class Step < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.integer :recipe_id, null: false
      t.integer :display_idx, null: false
      t.text :body, null: false

      t.timestamps null: false
    end
    add_index :steps, :recipe_id
  end
end
