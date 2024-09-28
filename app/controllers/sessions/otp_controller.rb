class Sessions::OtpController < ApplicationController
  allow_unauthenticated_access only: %i[ new create ]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to new_session_url, alert: "Try again later." }

  def new
    @user = User.find_by(id: session[:pending_otp_user_id]) || User.new
  end

  def create
    if user = User.find_by(email_address: params[:email_address])
      if user.authenticate_otp(params[:otp_code], drift: 15.minutes)
        start_new_session_for user
        redirect_to after_authentication_url
      else
        redirect_to new_session_url, alert: "Request a new one time password"
      end
    else
      redirect_to new_session_url, alert: "Try another email address or password."
    end
  end

  def destroy
    terminate_session
    redirect_to new_session_url
  end
end
