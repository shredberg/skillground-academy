class Mailer < ApplicationMailer
  def otp_code(user)
    @user = user
    mail subject: "Your one time password", to: user.email_address
  end
end
