class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render @user
    else
      render :json => @user.errors, :status => :unprocessable_entity
    end
  end

  private

  def user_params
    self.params[:user].permit(:username, :description, :name, :id, :created_at, :updated_at)
  end
end
