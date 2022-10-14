class Api::V1::BlogsController < Api::V1::BaseController

  def create
    today = Date.current
    Blog.new(blogs_param)
    Blog[:user_id] = 1 #current_user.id
    Blog[:title] = "test" #vueからとってくる
    Blog[:body] = "test" #vueからとってくる
    Blog[:post_datetime] = today
    Blog.save!
    render json: '', status: :created
  end

  def index
    render json: ''
  end

  def show
    blogs = Blog.all
    render json: ''
  end

  private

  def blogs_param
    params.require(:blog).permit(
      :title,
      :body
    )
  end

end
