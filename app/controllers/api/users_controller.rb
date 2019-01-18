class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render json: {}
    else
      render json: ["Invalid fields"], status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end