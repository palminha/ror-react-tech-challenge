Rails.application.routes.draw do
  root to: 'about#index'
  get 'about', to: 'about#index'
  get 'users', to: 'list_users#index'
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
