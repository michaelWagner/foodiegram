class Api::PostsController < ApplicationController
  def index
    @posts = Post.includes(:likes, :comments)
    if signed_in?
      @likes_hash = current_user.post_likes_hash
    else
      @likes_hash = {}
    end
    render :index
  end

  def new
    # @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @comments = []
    if @post.save
      render @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def show
    @post = Post.includes(:likes, :comments).find(params[:id])
    @likes_hash = {}
    @comments = @post.comments
    if signed_in?
      @likes_hash[@post.id] = @post.likes.find_by(user_id: current_user.id)
    end
    render :show
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: {}
  end

  private

  def post_params
    params.require(:post).permit(:author_id, :image_url, :body, :description)
  end
end
