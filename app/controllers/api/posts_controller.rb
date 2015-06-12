class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render @post
    else
      render :json => @post.errors, :status => :unprocessable_entity
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
      render :json => @post.errors, :status => :unprocessable_entity
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:author_id, :image_url, :body, :description)
  end
end
