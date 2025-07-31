# 🚀 janhit-services – Your City, Your Voice

<div align="center">
  <img src="./screenshots/docker1.png" alt="Docker Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/express.png" alt="Express Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/js.png" alt="JavaScript Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/mongo.png" alt="MongoDB Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/nodejs.png" alt="Node.js Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/react.png" alt="React Logo" width="60" style="border-radius: 50%; margin: 10px;" />
</div>

<div align="center">
  <h3>🌍 Civic Engagement Portal for Smart Cities</h3>
  <p><strong>Empowering citizens to report, track, and resolve local issues through an interactive map-based platform</strong></p>
  
  [![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
</div>

---

## 📋 Table of Contents
- [✨ Features](#-features)
- [🎯 Demo](#-demo)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [🔧 Configuration](#-configuration)
- [🌐 API Documentation](#-api-documentation)
- [🤝 Contributing](#-contributing)
- [📞 Contact](#-contact)

---

## ✨ Features

### 🗺️ **Interactive Map Interface**
- Real-time location-based issue reporting
- Pin-drop functionality for precise problem location
- Visual problem tracking and status updates

### 🗳️ **Smart Voting System**
- Severity-based rating system (1-5 scale)
- Automatic vote counting for high-priority issues (severity ≥ 3)
- Community-driven problem prioritization

### 👥 **Multi-User System**
- **Citizens**: Report issues, vote, and track progress
- **Officials**: Manage and resolve reported problems
- **Municipality**: Oversee and coordinate solutions

### 💬 **Social Features**
- Comment system for issue discussion
- Real-time status updates
- User engagement tracking

### 🔐 **Security & Authentication**
- JWT-based secure authentication
- Role-based access control
- Secure cookie management

### 🐳 **Docker Integration**
- Fully containerized application
- Easy deployment with docker-compose
- MongoDB container included

---

## 🎯 Demo

### 📱 Application Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/c76bc122-98c4-4adf-9502-d47b2ee9e2b3" alt="Home Page" width="300" />
  <img src="https://github.com/user-attachments/assets/2369af92-03aa-4c2b-9574-96d1a662fdf8" alt="Dashboard" width="300" />
  <img src="https://github.com/user-attachments/assets/fa27ddcd-0081-42f3-87b6-d2a924cd4e83" alt="Map Interface" width="300" />
  <img src="https://github.com/user-attachments/assets/be75a3d2-7060-40a0-9356-400a89583cdd" alt="Issue Reporting" width="300" />
  <img src="https://github.com/user-attachments/assets/bffd4cd4-d8e3-4efb-a6a4-57fd35022875" alt="User Dashboard" width="300" />
</div>

### 🎥 Video Demo
*Coming Soon - Interactive walkthrough of the application*

---

## 🏗️ Architecture

```
janhit-services/
├── 🐳 docker-compose.yml          # Multi-container orchestration
├── 📱 Client/                     # React + TypeScript Frontend
│   ├── 🎨 src/components/         # Reusable UI components
│   ├── 🗺️ src/pages/             # Application pages
│   └── 🔧 vite.config.ts          # Build configuration
├── ⚙️ Server/                     # Node.js + Express Backend
│   ├── 🛣️ src/routes/            # API route definitions
│   ├── 🎮 src/controller/         # Business logic
│   ├── 📊 src/models/             # MongoDB schemas
│   └── 🔐 src/middlewares/        # Authentication & validation
└── 🔗 blockchain/                 # Smart contract integration
    └── 📄 contracts/              # Solidity contracts
```

---

## 🚀 Quick Start

### Using Docker (Recommended)
```bash
# Clone the repository
git clone https://github.com/Rohan-devv/janhit-services.git
cd janhit-services

# Start all services
docker-compose up --build

# Access the application
# Frontend: http://localhost:5173
# Backend: http://localhost:8000
# MongoDB: localhost:27017
```

### Manual Setup
```bash
# 1. Install dependencies
cd Server && npm install
cd ../Client && npm install

# 2. Configure environment variables
# (See Configuration section below)

# 3. Start services
cd ../Server && npm run dev
cd ../Client && npm run dev
```

---

## 📦 Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/) (for containerized setup)
- [MongoDB](https://www.mongodb.com/) (or use Docker container)

### System Requirements
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 2GB free space
- **Network**: Stable internet connection

---

## 🔧 Configuration

### Environment Variables

#### Server Configuration (`Server/.env`)
```env
# Server Configuration
PORT=8000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/janhit-services

# Authentication
ACCESS_TOKEN_SECRET=your-super-secret-jwt-key-here
ACCESS_TOKEN_EXPIRY=7d

# CORS
CORS_ORIGIN=http://localhost:5173

# Optional: For production
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/janhit-services
```

#### Client Configuration (`Client/.env`)
```env
# API Configuration
VITE_API_URL=http://localhost:8000/api/v1/users

# Optional: For production
# VITE_API_URL=https://your-backend-domain.com/api/v1/users
```

---

## 🌐 API Documentation

### Authentication Endpoints
```http
POST /api/v1/users/signupUser     # User registration
POST /api/v1/users/loginUser      # User login
POST /api/v1/users/logout         # User logout
GET  /api/v1/users/getUser        # Get user profile
```

### Problem Management
```http
POST   /api/v1/users/createProblem/:userId    # Report new issue
GET    /api/v1/users/getAllproblems           # List all problems
POST   /api/v1/users/problems/:id/rate/:userId # Rate problem severity
DELETE /api/v1/users/problem/:id/user/:userId  # Delete problem
```

### Comments & Engagement
```http
POST   /api/v1/users/addComment/:problemId/:userId  # Add comment
GET    /api/v1/users/getComment/:problemId          # Get comments
DELETE /api/v1/users/comments/:commentId/:userId    # Delete comment
```

### Official Management
```http
POST /api/v1/users/signupOfficial     # Official registration
POST /api/v1/users/loginOfficial      # Official login
POST /api/v1/users/assign/:problemId  # Assign problem to official
GET  /api/v1/users/getProblemOfficial # Get official's problems
```

---

## 🛠️ Development

### Available Scripts

#### Server
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm test         # Run tests (if configured)
```

#### Client
```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Code Structure
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + MongoDB
- **Authentication**: JWT tokens with httpOnly cookies
- **Maps**: Leaflet.js for interactive mapping
- **Styling**: CSS modules with responsive design

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Reporting Bugs
1. Check existing issues
2. Create a new issue with detailed description
3. Include steps to reproduce

### 💡 Suggesting Features
1. Open a feature request issue
2. Describe the use case and benefits
3. Provide mockups if possible

### 🔧 Submitting Code
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 📋 Development Guidelines
- Follow existing code style
- Add tests for new features
- Update documentation
- Ensure all tests pass

---

## 📞 Contact

### Team Members
- **Rohan Pal** - [rohan49421@gmail.com](mailto:rohan49421@gmail.com)
- **Rachit** - Project Lead
- **Development Team** - Janhit Services

### 📧 Get in Touch
- **Email**: rohan49421@gmail.com
- **GitHub**: [Rachit-31](https://github.com/Rachit-31)
- **Project**: [Janhit Repository](https://github.com/Rachit-31/Janhit)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p><strong>Made with ❤️ for better civic engagement</strong></p>
  <p>Empowering citizens to make their cities better, one issue at a time.</p>
</div>
   
 