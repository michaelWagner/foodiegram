Foodiegram::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users do
    resources :posts
  end

  resource :session, :only => [:new, :create, :destroy]
end
