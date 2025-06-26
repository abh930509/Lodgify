<h1 align="center">🏨 Lodgify</h1>

<p align="center">
  <b>A Full-Stack Lodging & Booking Management Web Application</b><br>
  Built with ❤️ using Node.js, Express, and Vanilla JS
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Progress-blue" alt="Project Status">
  <img src="https://img.shields.io/badge/TechStack-Node.js%20%7C%20MongoDB%20%7C%20VanillaJS-orange" alt="Stack">
  <img src="https://img.shields.io/github/license/your-username/lodgify" alt="License">
</p>

---

## ✨ Overview

**Lodgify** is a clean and lightweight full-stack web app that helps users list properties, manage bookings, and handle guest interactions seamlessly. Designed with performance and simplicity in mind, Lodgify runs on a Node.js + Express backend and uses pure HTML/CSS/JavaScript on the frontend — no frameworks like React!

---

## 🚀 Features

- 🧾 User Registration & Login (JWT / Session Auth)
- 🏠 Add & Manage Property Listings
- 📅 Book Lodging with Real-Time Availability
- 📨 Email Notifications (via Nodemailer)
- 🖼 Upload Images for Properties (Multer)
- 📊 Admin Dashboard for Managing Everything
- 🔒 Protected Routes with Middleware
- 📱 Mobile Responsive Design

---

## 🛠️ Tech Stack

| Layer      | Tech Used                          |
|------------|------------------------------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla), Bootstrap/Tailwind |
| **Backend**  | Node.js, Express.js               |
| **Database** | MongoDB + Mongoose *(or MySQL + Sequelize)* |
| **Auth**     | JWT / Express-Session             |
| **Email**    | Nodemailer                        |
| **Misc**     | dotenv, bcrypt, multer, cron      |

---

## 📁 Project Structure

lodgify/
├── public/ # Static assets (CSS, JS, images)
├── views/ # EJS templates (if SSR used)
├── routes/ # App & API routes
├── controllers/ # Business logic
├── models/ # Mongoose/Sequelize schemas
├── middleware/ # Auth and validation
├── utils/ # Helper functions (e.g., mail)
├── .env # Environment variables
├── index.js # Entry point
└── package.json


---

## ⚙️ Getting Started

### 🧬 1. Clone the Repo

```bash
git clone https://github.com/your-username/lodgify.git
cd lodgify

📦 2. Install Dependencies
bash
Copy
Edit
npm install
🔐 3. Setup Environment Variables
Create a .env file in the root directory:

env
Copy
Edit
PORT=5000
DB_URI=your_database_url
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password


▶️ 4. Start the App
bash
Copy
Edit
node index.js
# or
npx nodemon index.js
🔍 How It Works
Users can register, log in, and browse properties

Listings are managed via CRUD APIs (secured)

Users can book available listings

Emails are sent on booking or status updates

Admins have control over all listings and users



🛡 Security
🔒 Passwords hashed with bcrypt

🔐 Authentication using JWT or sessions

🔍 Route protection via Express middleware

🔐 Sensitive configs stored in .env

🧠 Future Roadmap
🌍 Multi-language support

🧭 Advanced filtering & search

🔔 Push notifications


📊 Analytics & Reports Dashboard

🙋‍♂️ Author
👨‍💻 Abhishek Giri
📧 Email: abhishekgiri250700@gmail.com
🔗 GitHub: @abh930509

