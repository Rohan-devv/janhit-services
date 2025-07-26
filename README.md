# 🚀 janhit-services – Your City, Your Voice

<p align="center">
  <img src="./screenshots/docker1.png" alt="Docker Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/express.png" alt="Express Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/js.png" alt="JavaScript Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/mongo.png" alt="MongoDB Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/nodejs.png" alt="Node.js Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/react.png" alt="React Logo" width="60" style="border-radius: 50%; margin: 10px;" />
</p>

---

![Dockerized](https://img.shields.io/badge/Ready-Dockerized-blue?logo=docker)
![Full Stack](https://img.shields.io/badge/Stack-MERN-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-Production--Ready-success)

---

## 📖 Overview

**Janhit** is a full-stack civic engagement platform built on the **MERN stack**. It empowers local residents to report civic issues using an interactive map interface and lets municipal authorities track, resolve, and close complaints through an admin panel.

---

## ✨ Key Features

- 🗺️ **Map-based Reporting** – Drop pins to report local issues like garbage, potholes, water leakage, etc.
- 📊 **Severity Voting System** – Vote on the issue’s importance (only counted if severity ≥ 3).
- 🧑‍💼 **Admin Panel** – Restricted to municipal officials to manage and resolve complaints.
- 💬 **Comment & Rating** – Post updates, feedback, or thank the officials once resolved.
- 🔒 **Role-based Access Control** – Ensures safe, authenticated actions by public/admin users.

---

## 🖼️ Live Preview Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/c76bc122-98c4-4adf-9502-d47b2ee9e2b3" width="300"/>
  <img src="https://github.com/user-attachments/assets/2369af92-03aa-4c2b-9574-96d1a662fdf8" width="300"/>
  <img src="https://github.com/user-attachments/assets/fa27ddcd-0081-42f3-87b6-d2a924cd4e83" width="300"/>
  <img src="https://github.com/user-attachments/assets/be75a3d2-7060-40a0-9356-400a89583cdd" width="300"/>
  <img src="https://github.com/user-attachments/assets/bffd4cd4-d8e3-4efb-a6a4-57fd35022875" width="300"/>
</p>

---

## 🐳 Dockerized Setup (Recommended)

No need to install Node, Mongo, or run multiple terminals. Everything is bundled and launched via **Docker**.

### 📁 Folder Structure

<details>
<summary>Click to expand</summary>

Janhit/
├── client/               # React Frontend (Vite)
│   └── src/
├── server/               # Node.js + Express Backend
│   └── routes/
├── screenshots/          # Tech icons and preview images
├── docker-compose.yml    # Docker multi-container setup
└── README.md
</details>
⚙️ Environment Variables
client/.env
  VITE_BACKEND_URL=http://localhost:8000

server/.env
  PORT=8000
  MONGO_URL=mongodb://mongo:27017/janhit

🛠️ Build & Run (with Docker)

# Clone the repo
git clone https://github.com/your-username/janhit-services.git
cd janhit-services

# Start all services using Docker
docker-compose up --build

✅ This launches:

🚀 Frontend: http://localhost:5173

⚙️ Backend: http://localhost:8000

🐘 MongoDB Container: mongo:27017

🧪 Demo Credentials

👤 Username: xyz
🔐 Password: 12345


🤝 Contributions
Pull requests are welcome! For major changes, open an issue first to discuss what you'd like to improve or add.


<details> <summary><code>client/.env</code></summary>
VITE_BACKEND_URL=http://localhost:8000



