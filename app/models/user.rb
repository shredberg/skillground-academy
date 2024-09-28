class User < ApplicationRecord
  has_one_time_password
  has_many :sessions, dependent: :destroy

  normalizes :email_address, with: ->(email) { email.strip.downcase }
end
