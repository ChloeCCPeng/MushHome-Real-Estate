User.destroy_all
House.destroy_all
Message.destroy_all
Watchlist.destroy_all
Offer.destroy_all

house_images = [
    "https://markstewart.com/wp-content/uploads/2021/04/1_SB4-Front-View.jpg",
    "https://torontolife.com/wp-content/uploads/2019/10/HZIsuuNp.jpg",
    "https://static01.nyt.com/images/2022/02/20/realestate/16IHH-BRITISH-COLUMBIA-slide-KCA7/16IHH-BRITISH-COLUMBIA-slide-KCA7-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F15230700%2Ftudor-style-home-exterior-lush-landscaping-628aa053.jpg",
    "https://s3-us-west-2.amazonaws.com/prod.monsterhouseplans.com/uploads/images_sliders/ehujqkjvfc.jpg",
    "https://i.ytimg.com/vi/eiU26tlXpB0/maxresdefault.jpg",
    "https://api.advancedhouseplans.com/uploads/plan-30086/30086-stillwater-art-perfect-thumb.jpg",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/4/18/4/Original_Mike-Kelly-Dream-Home-2022-Warren-vermont-beauty.jpg.rend.hgtvcom.616.462.suffix/1650394004533.jpeg",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/10/24/2/dh2018_front-yard-01-sunset-through-door-wide-Shot_19_367_h.jpg.rend.hgtvcom.966.644.suffix/1508855003262.jpeg",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F11%2F30%2Fhgtv-dream-home-1.jpg&q=60",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2F2021%2F12%2F30%2F1244x830_8187_ALR_25kHome.jpg",
    "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1688,w_2532,x_245,y_0/c_limit,dpr_2.625,f_auto,fl_lossy,q_80,w_412/aquadisia_oidrf8.jpg",
    "https://cdn.onekindesign.com/wp-content/uploads/2019/10/Traditional-English-Manor-House-Jauregui-Architect-01-1-Kindesign.jpg",
    "https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2022/1/27/4-cent-trivandrum-home-view.jpg",
    "https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2022/3/17/engineer-own-home-manjeri%20(1).jpg",
    "https://4.imimg.com/data4/PU/DK/ANDROID-9532861/product-500x500.jpeg",
    "https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2020/12/21/simple-house-kottaykal-view-c.jpg",
    "https://cdn-5.urmy.net/images/plans/AMD/uploads/front-rend.jpg",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/3/8/0/sh22_front-yard-car-in-driveway-DSC_0722_h.jpg.rend.hgtvcom.406.305.suffix/1646766661106.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5e0e16044ce9a12790e1596e/1591889572404-XAQT6P9PG96R9ITX7BZR/Custom+Traditional+New+Home+in+Edina27.jpg",
    "https://wipliance.com/images/easyblog_articles/16/wipliance-jaymarc.jpg",
    "https://static.dezeen.com/uploads/2021/08/3d-printed-home-development_austin-texas_icon_dezeen_2364_col_2.jpg",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/9/16/0/IO_Tongue-and-Groove_Beech-Street_3.jpg.rend.hgtvcom.616.411.suffix/1568648112267.jpeg",
    "https://www.theplancollection.com/Upload/Designers/117/1105/Plan1171105MainImage_18_12_2020_12_891_593.jpg",
    "https://houseplans.bhg.com/images/plans/MHD/bulk/7698/Black-Creek_1.jpg",
    "https://images.gessato.com/NvJJUR8.OWDa~b707/w:1500/h:1051/q:100/https://www.gessato.com/wp-content/uploads/2019/05/axiom-smart-prefab-house.jpg",
    "https://images.squarespace-cdn.com/content/v1/58420910f5e23112c08b8068/1484605495202-KH3N8IDHWOIZQLCYBAP1/menlo-park-0107.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/58420910f5e23112c08b8068/1531530800853-6408SHLAM2TIF93YX7TP/061818-073.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/5abbea6fc258b4f56d09219e/1618308024209-C66BSXX4RQY0EO3P19KT/best+prefab+and+modular+2021.jpg?format=2500w",
    "https://images.gessato.com/NvJJUR8.OWDa~b707/w:1500/h:1051/q:100/https://www.gessato.com/wp-content/uploads/2019/05/clever-homes-prefab.jpg",
    "https://www.croatialuxuryrent.com/storage/upload/60a/bf3/6be/IMG_5654_tn.jpg",
    "https://amazingarchitecture.com/storage/903/Gable-House-Ahmedabad-India-UA-Lab-Urban-Architectural-Collaborative-.jpg",
    "https://patch.com/img/cdn20/users/22944156/20211020/092722/styles/raw/public/processed_images/22944156_20092722687_11177249_0.jpg",
    "https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519",
    "https://www.peoplenewspapers.com/wp-content/uploads/2019/08/632-miller-ave-dallas-tx-2-High-Res-2-800x445.jpg",
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
500.times do
    House.create(
        # address: Faker::Address.full_address, 
        lotSizeAcres: rand(1..7), 
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