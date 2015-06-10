class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user])

    if @user
      sign_in!(@user)
      redirect_to @user
    else
      flash.now[:errors] = ["Invalid login credentials"]
      redirect_to new_session_url
    end
  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end
end
