class Api::StepsController < ApplicationController
  def index
    @steps = Step.all.where(recipe_id: params[:recipeId])
    render json: @steps
  end
end
