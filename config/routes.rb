TodoListWithAngular::Application.routes.draw do

  resources :todo_items


  root to: "todo_items#index"

end
