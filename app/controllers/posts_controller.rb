class PostsController < ApplicationController
  def new
  end

  def create
    @post = Post.new(post_params)
    
  end

  def edit

  end

  private

  def post_params
    params.require(:post).permit(:image_url, :body)
  end
end
