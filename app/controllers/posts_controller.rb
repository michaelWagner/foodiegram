class PostsController < ApplicationController
  def index
    @posts = Post.where(:user_id => params[:id])
    render :json => @posts
  end

  def new
  end

  def create
    @post = Post.new([params[:post]])
    if @post.save
      render :json => @post
    else
      render :json => @post.errors, :status => :unprocessable_entity
    end
  end

  def edit
  end

  def show
    @post = Post.find(params[:id])
    render :json => @post
  end

  private

  def post_params
    params.require(:post).permit(:image_url, :body)
  end
end
