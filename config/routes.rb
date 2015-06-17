Foodiegram::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users, :only => :new
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :users, :except => :new
    resources :posts
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
  end
end
