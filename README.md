🧾 Reservation System – Spring Boot + MongoDB

A full-stack reservation management system built using Spring Boot, MongoDB, HTML, CSS, and JavaScript.
The application allows users to create and store reservations through a web interface and saves data in MongoDB Atlas.

🚀 Live Demo

Deployed on Render:
👉 https://reservation-system-management-spcl-task-2.onrender.com/


🛠 Tech Stack

Backend

Java

Spring Boot

Spring Web

Spring Data MongoDB

Maven

Frontend

HTML

CSS

JavaScript (Fetch API)

Database

MongoDB Atlas

Deployment

Render (Docker)

GitHub

📂 Project Structure
reservation-system-backend
│
├── src/main/java/com/.../reservation_system_backend
│   ├── controller
│   ├── model
│   ├── repository
│   └── dto
│
├── src/main/resources
│   ├── static (HTML, CSS, JS)
│   └── application.properties
│
├── Dockerfile
├── pom.xml
└── README.md

⚙️ Features

Create reservation form

Save reservations to MongoDB Atlas

REST API using Spring Boot

Fully deployed backend

Environment variable support for Mongo URI

Dockerized for deployment

🔌 API Endpoint
Create Reservation
POST /api/reservations


Body (JSON):

{
  "checkIn": "dd-mm-yy",
  "checkOut": "dd-mm-yy",
  "roomType": "executive",
  "numberOfGuests": 2 ,
  "specialrequest": "early checkIn request"
}

🔑 Environment Variables

Create .env file locally:

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/


In application.properties:

spring.data.mongodb.uri=${MONGO_URI}
spring.data.mongodb.database=reservation_db
server.port=${PORT:8080}


⚠️ .env is in .gitignore and should NOT be pushed to GitHub.

💻 Run Locally
1. Clone repo
git clone https://github.com/deb2004m/reservation-system-management-SPCL-Task.git
cd repo-name

2. Add Mongo URI

Create .env file and add:

MONGO_URI=your_mongodb_uri

3. Run project
./mvnw spring-boot:run


App runs on:

http://localhost:8080

🌍 Deployment (Render)

Connected GitHub repo to Render

Used Dockerfile for deployment

Added environment variable:

MONGO_URI

Enabled MongoDB Atlas network access (0.0.0.0)

🧑‍💻 Author

Debashis Moharana
B.Tech CSE | Java Full Stack Developer

GitHub: https://github.com/deb2004m

⭐ Future Improvements--

Login & authentication (JWT)

Admin dashboard

Update/delete reservation

Email confirmation

Payment integration
