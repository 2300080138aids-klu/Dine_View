# 🍽️ DineView – Restaurant Review & Analytics Platform

DineView is a full-stack web application that allows users to discover restaurants, submit reviews, and visualize rating analytics through interactive charts.

The platform combines a modern React frontend with a Node.js backend and a PostgreSQL cloud database to provide a smooth restaurant review experience.

---

## 🚀 Features

- User authentication (JWT based login & signup)
- Add and view restaurants
- Submit ratings and written reviews
- Real-time review analytics
- Pie chart visualization of rating distribution
- Clean and responsive UI
- REST API powered backend
- PostgreSQL cloud database (Neon)

---

## 🧠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Chart.js / React ChartJS
- Material UI (optional styling)

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs password hashing

### Database
- PostgreSQL (Neon Cloud)

---

## 📊 Analytics

The platform generates visual insights for each restaurant using **Chart.js**, displaying:

- Rating distribution
- User sentiment patterns
- Community feedback trends

---

## 📂 Project Structure

```
backend
│
├── server.js
├── package.json
└── src
    ├── app.js
    ├── config
    │   └── db.js
    ├── controllers
    │   ├── authController.js
    │   ├── restaurantController.js
    │   └── reviewController.js
    ├── middleware
    │   ├── authMiddleware.js
    │   └── roleMiddleware.js
    ├── routes
    │   ├── authRoutes.js
    │   └── restaurantRoutes.js
    └── utils
        └── reviewAI.js


frontend
│
├── index.html
├── package.json
└── src
    ├── main.jsx
    ├── App.jsx
    ├── services/api.js
    ├── components
    │   ├── Navbar.jsx
    │   └── RestaurantCard.jsx
    └── pages
        ├── Home.jsx
        ├── Login.jsx
        ├── Signup.jsx
        ├── Dashboard.jsx
        ├── Leaderboard.jsx
        └── RestaurantDetails.jsx
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/dineview.git
cd dineview
```

---

### Backend Setup

```
cd backend
npm install
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## 🗄 Database

The project uses **Neon PostgreSQL**.

Tables used:

- users
- restaurants
- reviews

---

## 🔐 Authentication

JWT based authentication is implemented for secure login and protected routes.

---

## 📌 Future Improvements

- AI based fake review detection
- Sentiment analysis of reviews
- Google Maps restaurant location integration
- Restaurant image uploads
- Real-time analytics dashboard

---

## 👨‍💻 Author

Developed as a full-stack learning project demonstrating React, Node.js, PostgreSQL, and data visualization.
