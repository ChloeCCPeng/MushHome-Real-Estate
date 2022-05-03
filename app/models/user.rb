class User < ApplicationRecord
    has_many :watchlists
    has_many :houses, through: :watchlists
    has_many :messages
    has_many :offers, through: :houses
    has_secure_password

    # self relational join
    has_many :seller_users, foreign_key: :browser_id, class_name: 'Sell'
    has_many :sellers, through: :seller_users, source: :seller

    has_many :browsing_users, foreign_key: :seller_id, class_name: 'Sell'
    has_many :browsers, through: :browsing_users, source: :browser

    validates :username, presence: true, uniqueness: true
    validates :password, length: {minimum: 5, maximum: 50}
end
