Rails.application.routes.draw do

  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :recipes, only: [:create, :destroy, :index, :show, :update] do
      # nest this here as an easy way to grab recipe_id
      resources :annotations, only: [:index]
    end
    resources :annotations, only: [:create, :show]
  end
end
