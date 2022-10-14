Rails.application.routes.draw do
  get '/', to: 'main#index', as: 'main'

  namespace 'api' do
    namespace 'v1' do
      resources :blogs, only: [:index, :create, :show]

    end
  end
end

