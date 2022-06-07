# Mush|Home - An Web App that helps buyers purchase houses directly from homeowners
*Created by: Chloe Peng* 

#   Click for Project Demo 
[![Energy Booster](<img width="1695" alt="image" src="https://user-images.githubusercontent.com/61214246/172442543-0de5a240-3435-43e9-be36-9adf064d6797.png">
)](https://www.youtube.com/watch?v=1D11cGz11dE&t=15s&ab_channel=ChloePeng)
*Created by: Molly McDonough and Chloe Peng* 

# Table of Contents 
*   [Project Demo](#click-for-project-demo)
*   [Introduction](#introduction)
*   [Features](#features)
*   [Wireframe](#wireframe)
*   [Setup](#setup)


#   Introduction
A Real Estate platform that helps buyers purchase houses directly from homeowners


#   Features 
- Login / Sign up and manage the account (create, update and delete the house)
- Filters
- List new houses 🏡 
- Mortgage calculation 🧮 
- Add houses to their watch list
- Place bid / make an offer
- Leave a message to the seller (now it's sending email)
- FAQs


#   Wireframe:
link: https://www.figma.com/file/j34HP40p8JQfM6Ae2mg6mW/Untitled?node-id=0%3A1
<img width="1130" alt="image" src="https://user-images.githubusercontent.com/61214246/172072718-30dafb73-2c6d-4ef6-864e-11f6db2a99a3.png">

#   Setup

- To run front-end:
```
npm install --prefix client
npm start --prefix client
```

- To run back-end:
```
bundle i
rails db:create
rails s
```

- To kill postgreSQL: 
```
sudo lsof -i :5432
sudo pkill -u postgres
```


