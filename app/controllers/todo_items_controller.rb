class TodoItemsController < ApplicationController
	respond_to :json, except: [:index]

  def index
    todo_list = TodoItem.all.to_json

    respond_to do |format|
      format.html {}
      format.json {render json: todo_list}
    end
  end

  def show
    respond_with TodoItem.find(params[:id])
  end

  def create
    respond_with TodoItem.create(params[:todo_item])
  end

  def update
    respond_with TodoItem.update(params[:id], params[:todo_item])
  end

  def destroy
    respond_with TodoItem.destroy(params[:id])
  end
end
