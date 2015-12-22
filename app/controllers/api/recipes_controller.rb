class Api::RecipesController < ApplicationController

  before_action :require_signed_in!

  def create
    @recipe = Recipe.new(recipe_params)
    # sets author_id to current user's id in the create recipe form
    @recipe[:author_id] = current_user.id

    if @recipe.save
      render :show
    else
      debugger
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    render :show
  end

  def index
    @recipes = Recipe.all
    # To test if index works without needing to route to index view:
    # render json: @recipes
  end

  def show
    @recipe = Recipe.find(params[:id])
    # To test if show works without needing to route to show view:
    # render json: @recipe
  end

  private
  def recipe_params
    # b/c steps are activerecord nested attributes inside recipes
    params.require(:recipe).permit(:title, :ingredients, :image_url, steps_attributes: [:body, :display_idx])
  end
end
