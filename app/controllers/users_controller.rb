class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = user_params ? User.new(user_params) : User.new_guest
    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
