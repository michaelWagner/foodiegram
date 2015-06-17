class Api::FollowingsController < ApplicationController
  before_action :require_signed_in!
  before_action :require_following_owner!, only: [:destroy]

  def create
    @user = User.find(params[:following][:followed_id])
    current_user.follow!(@user)
    if @user.save
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = Following.find(params[:id]).followed
    current_user.unfollow!(@user)
    render json: @user
  end

  private

    def current_following
      @current_following ||= Following.find(params[:id])
    end

    def following_params
      params.require(:following).permit(:follower_id, :followed_id)
    end

    def require_following_owner!
      unless current_following.user_id == current_user.id
        render json: ["You must be the Following's owner to do that"], status: :unauthorized
      end
    end
end
