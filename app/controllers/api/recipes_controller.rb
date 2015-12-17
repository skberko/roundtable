class Api::RecipesController < ApplicationController

  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      render :show
    else
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
    params.require(:recipe).permit(:title, :body, :author_id)
  end
end
