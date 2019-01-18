class ApplicationController < ActionController::Base

  helper_method :current_user
  # C E L L L

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    session[:session_token] = user.session_token
  end

  def logged_in?
    !!current_user
  end

  def logout! 
    current_user.reset_session_token!
    session[:session_token] = nil
  end
  
end
