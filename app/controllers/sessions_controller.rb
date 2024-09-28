class SessionsController < ApplicationController
  allow_unauthenticated_access only: %i[ new create ]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to new_session_url, alert: "Try again later." }

  def new
  end

  def create
    if user = User.find_by(email_address: params[:email_address])
      session[:pending_otp_user_id] = user.id
      Mailer.otp_code(user).deliver_later
      redirect_to new_session_otp_url, notice: "Check your email for the one time password."
    else
      redirect_to new_session_url, alert: "Try another email address or password."
    end
  end

  def destroy
    terminate_session
    redirect_to new_session_url
  end
end
