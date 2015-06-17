class Api::CommentsController < ApplicationController
  before_action :require_signed_in!
  before_action :require_comment_owner!, only: [:destroy]

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: @comment
  end

  private

    def current_comment
      @current_comment ||= Comment.find(params[:id])
    end

    def comment_params
      params.require(:comment).permit(:post_id, :body, :author_id)
    end

    def require_comment_owner!
      unless current_comment.author_id == current_user.id
        render json: ["You must be the Comment's owner to do that"], status: :unauthorized
      end
    end
end
