class Api::AnnotationsController < ApplicationController

  before_action :require_signed_in!

  def create
    @annotation = Annotation.new(annotation_params)
    @annotation[:author_id] = current_user.id

    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def show
    @annotation = Annotation.find(params[:id])
    render :show
  end

  def index
    # see rake routes for expl of below:
    @annotations = Annotation.where({recipe_id: params[:recipe_id]})
  end

  private
  def annotation_params
    params.require(:annotation).permit(:body, :step_id)
  end
end
