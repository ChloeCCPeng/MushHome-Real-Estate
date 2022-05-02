class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.string :password_confirmation
      t.string :firstName
      t.string :lastName
      t.string :phoneNumber


      t.timestamps
    end
  end
end