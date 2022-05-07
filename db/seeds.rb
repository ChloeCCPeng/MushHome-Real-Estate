User.destroy_all
House.destroy_all
Message.destroy_all
Watchlist.destroy_all
Offer.destroy_all
  
puts " Seeding data...."

puts " 👥 Creating users "
20.times do
    User.create(username: Faker::Name.first_name, password: "password", password_confirmation: "password")
end

puts " 👀 Creating watchlist "
10.times do
    Watchlist.create(address: Faker::Address.full_address, user_id: User.pluck(:id).sample)
end

puts " 💰 Creating offers "
20.times do
    Offer.create(amount: rand(200000..5000000), user_id: User.pluck(:id).sample)
end

puts " 💬 Creating messages "
10.times do
    Message.create(user_id: User.pluck(:id).sample, conversation: "hi, is the house still available?")
end

puts " 🏡 Creating houses "
20.times do
    House.create(
        address: Faker::Address.full_address, 
        lotSizeAcres: rand(0.1..40), 
        lotSizeSquareFeet: rand(1500..4500), 
        listPrice: rand(200000..5000000), 
        bathroomsTotal: rand(1..10), 
        bedroomsTotal: rand(1..15), 
        photo: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBleHRlcmlvcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        # street: Faker::Address.street_address,
        # city: Faker::Address.city,
        # state: Faker::Address.state_abbr,
        # postcde: Faker::Address.postcode,
        associationFee: rand(0..500),
        fireplacesTotal: rand(0..1),
        publicRemarks: "Gorgeous two-story brick home located in the sought-after Eastover neighborhood.",
        yearBuilt: rand(1950..2022),
        propertySubType: "Single Family Residence",
        flooring: "Harwood",
        frontageType: "Golf Course",
        roof: "Metal"
    )
end

puts " Done seeding "