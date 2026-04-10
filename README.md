# 🖥️ BACKEND README (Node + Express)

# 🏥 Doctor Appointment Backend

This is the backend server for the Doctor Appointment Booking System.  
It handles authentication, doctor management, appointment booking, and payments.

---

# 🚀 Live Demo

- 🌐 Frontend: [https://doctor-frontend-beryl.vercel.app]  
- 🖥️ Backend API: [https://doctor-backend-6tyf.onrender.com]
---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cloudinary (image upload)
- Stripe / Razorpay (payments)
- dotenv

---

## ✨ Features

- 🔐 User & Admin Authentication (JWT)
- 👨‍⚕️ Doctor management (Add / Remove / List)
- 📅 Appointment booking system
- 💳 Payment integration (Stripe / Razorpay)
- ☁️ Image upload using Cloudinary
- 📊 Admin dashboard APIs
- 🔒 Secure REST APIs

---

## 📁 Project Structure
backend/ │── controllers/ │── models/ │── routes/ │── middleware/ │── config/ │── server.js

---

 ⚙️ Installation & Setup

git clone <your-backend-repo-link>
cd backend
npm install
npm start

---
🔐 Environment Variables
Create a .env file and add:

MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

PORT=5000

---
📌 Important Notes
Make sure MongoDB is running / connected
CORS is enabled for frontend connection
Backend may take few seconds to start (cold start on Render)
---
👨‍💻 Developer
Built by Anchal Bisht

---
⭐ If you like this project
Give it a ⭐ on GitHub and feel free to contribute!
