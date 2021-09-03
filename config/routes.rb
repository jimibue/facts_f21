Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # all api endpoint (routes) go in here
  namespace :api do
    get '/facts', to:'facts#index'
  end
end
