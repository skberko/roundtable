class Api::StepsController < ApplicationController
  def index
    @steps = Step.all.where(recipe_id: params[:recipeId])
  end
end
