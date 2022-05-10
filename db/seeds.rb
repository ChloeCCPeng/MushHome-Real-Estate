User.destroy_all
House.destroy_all
Message.destroy_all
Watchlist.destroy_all
Offer.destroy_all

house_images = [
    "https://cdn.vox-cdn.com/thumbor/frFQQhOsxl8DctGjkR8OLHpdKMs=/0x0:3686x2073/1200x800/filters:focal(1549x743:2137x1331)/cdn.vox-cdn.com/uploads/chorus_image/image/68976842/House_Tour_Liverman_3D6A3138_tour.0.jpg",
    "https://www.peoplenewspapers.com/wp-content/uploads/2019/08/632-miller-ave-dallas-tx-2-High-Res-2-800x445.jpg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fbrick-hosue-8-1342100.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fbrick-hosue.html&tbnid=PXQT0CFV5q_oXM&vet=10CA0QxiAoCGoXChMIqI250_vO9wIVAAAAAB0AAAAAEBE..i&docid=Qac2Bu8VfynmnM&w=800&h=522&itg=1&q=house%20images&ved=0CA0QxiAoCGoXChMIqI250_vO9wIVAAAAAB0AAAAAEBE",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBerO6QbC1QzVADNM21seQfBZBngHHnXJpBN-jJHUWXFgfCvKt5muiBSKve9uwrJpsFU&usqp=CAU",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VRVMJrRl5CGkFUo7OMXHVlxIEyOcc6hT7Bok3A8aq05a6GfMsJj5WKyYpMc5F8GMzvQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcVAmqmg8vvBKEwn4QTYr2GafkcqJzVPQSHHu4wta9AO3GBCKf8Ed614vBIqRKxPlrPA&usqp=CAU",
    "https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg"
]

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
50.times do
    House.create(
        # address: Faker::Address.full_address, 
        lotSizeAcres: rand(0.1..4), 
        lotSizeSquareFeet: rand(1500..4500), 
        listPrice: rand(200000..5000000), 
        bathroomsTotal: rand(1..10), 
        bedroomsTotal: rand(1..15), 
        photo: house_images.sample,
        street: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state_abbr,
        postcde: Faker::Address.postcode,
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

    House.create([
        {
            lotSizeAcres: 1, 
            lotSizeSquareFeet: rand(1500..4500), 
            listPrice: "329900",
            bathroomsTotal: rand(1..10), 
            bedroomsTotal: rand(1..3), 
            street: "77 Highland Cir",
            city: "Rio Rico",
            state: "AZ",
            postcde: 85648,
            associationFee: rand(0..500),
            fireplacesTotal: rand(0..1),
            publicRemarks: "Gorgeous two-story brick home located in the sought-after Eastover neighborhood.",
            yearBuilt: rand(1950..2022),
            propertySubType: "Single Family Residence",
            flooring: "Harwood",
            frontageType: "Golf Course",
            roof: "Metal"
        },
        {
            lotSizeAcres: 2, 
            lotSizeSquareFeet: rand(1500..4500), 
            listPrice: "219500",
            bathroomsTotal: rand(1..10), 
            bedroomsTotal: rand(1..5), 
            photo: house_images.sample,
            street: "5236 W Peoria Ave Apt 132",
            city: "Glendale",
            state: "AZ",
            postcde: 85302,
            associationFee: rand(0..500),
            fireplacesTotal: rand(0..1),
            publicRemarks: "Gorgeous two-story brick home located in the sought-after Eastover neighborhood.",
            yearBuilt: rand(1950..2022),
            propertySubType: "Single Family Residence",
            flooring: "Harwood",
            frontageType: "Golf Course",
            roof: "Metal"
        },
        {
            lotSizeAcres: 1, 
            lotSizeSquareFeet: rand(4500..5000), 
            listPrice: "1799995",
            bathroomsTotal: rand(1..10), 
            bedroomsTotal: rand(1..5), 
            photo: house_images.sample,
            street: "1351 E Carlyle Way",
            city: "Fresno",
            state: "CA",
            postcde: 93730,
            associationFee: rand(0..300),
            fireplacesTotal: rand(0..1),
            publicRemarks: "Gorgeous two-story brick home located in the sought-after Eastover neighborhood.",
            yearBuilt: rand(1950..2022),
            propertySubType: "Single Family Residence",
            flooring: "Harwood",
            frontageType: "Golf Course",
            roof: "Metal"
        }, 
        {
            lotSizeAcres: 1, 
            lotSizeSquareFeet: rand(4500..5000), 
            listPrice: "1199995",
            bathroomsTotal: rand(1..10), 
            bedroomsTotal: rand(1..5), 
            photo: house_images.sample,
            street: "4311 Conestoga Dr,",
            city: "Lancaster",
            state: "CA",
            postcde: 93536,
            associationFee: rand(0..300),
            fireplacesTotal: rand(0..1),
            publicRemarks: "Gorgeous two-story brick home located in the sought-after Eastover neighborhood.",
            yearBuilt: rand(1950..2022),
            propertySubType: "Single Family Residence",
            flooring: "Harwood",
            frontageType: "Golf Course",
            roof: "Metal"
        }, 
        {
            lotSizeAcres: 2, 
            lotSizeSquareFeet: rand(2000..2500), 
            listPrice: "359995",
            bathroomsTotal: rand(1..6), 
            bedroomsTotal: rand(1..4), 
            # photo: "",
            street: "5608 Stoneridge Dr,",
            city: "Texarkana",
            state: "TX",
            postcde: 75503,
            associationFee: rand(0..300),
            fireplacesTotal: rand(0..1),
            publicRemarks: "Gorgeous two-story brick home located in the sought-after Eastover neighborhood.",
            yearBuilt: rand(1950..2022),
            propertySubType: "Single Family Residence",
            flooring: "Harwood",
            frontageType: "Golf Course",
            roof: "Metal"
        }, 
        {
            lotSizeAcres: 0.3, 
            lotSizeSquareFeet: rand(2000..2500), 
            listPrice: "1595000",
            bathroomsTotal: 4, 
            bedroomsTotal: 3.5, 
            photo: "https://ap.rdcpix.com/7b68c67351756a216c6d142f961f1771l-m2557645838od-w480_h360_x2.webp",
            street: "102 Hawks Rdg,",
            city: "Eatonton",
            state: "GA",
            postcde: 31024,
            associationFee: rand(0..300),
            fireplacesTotal: rand(0..1),
            publicRemarks: "Gorgeous two-story brick home located in the sought-after Eastover neighborhood.",
            yearBuilt: rand(1950..2022),
            propertySubType: "Single Family Residence",
            flooring: "Harwood",
            frontageType: "Golf Course",
            roof: "Metal"
        }
    ])

puts " Done seeding "