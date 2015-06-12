class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
  end

  def create
    @post = Post.new(params[:post]  )
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
  end
end
