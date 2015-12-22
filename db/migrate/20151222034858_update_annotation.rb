class UpdateAnnotation < ActiveRecord::Migration
  def change
    rename_column :annotations, :recipe_id, :step_id
  end
end
