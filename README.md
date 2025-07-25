# 🚀 janhit-services – Your City, Your Voice

<p align="center">
  <img src="./screenshots/docker1.png" alt="Docker Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/express.png" alt="Express Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/js.png" alt="JavaScript Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/mongo.png" alt="MongoDB Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/nodejs.png" alt="Node.js Logo" width="60" style="border-radius: 50%; margin: 10px;" />
  <img src="./screenshots/react.png" alt="React Logo" width="60" style="border-radius: 50%; margin: 10px;" />
</p>

## Overview
This is a MERN stack-based Civic Engagement Portal that allows local residents to report civic issues, vote on them, and track their resolution. It uses a map-based interface for real-time issue tracking, allowing users to easily raise and resolve local problems.

### Features:
- **Map-based reporting**: Users can drop pins on the map to report problems.
- **Voting system**: Other users can can give severity rating on reported problems to prioritize them. If severity is greater than  or equal to 3 then vote is count of that problem
- **Issue management**: Municipality and government officials can view and resolve reported problems.
- **Comment and rating system**: Users can add comments, and track their status.
- **🌍 Fully Dockerized app with MongoDB container
---

## Demo

### Video Demonstration
Here's a demo video showing the functionality of the Civic Engagement Portal:

[![Watch the video](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)


---

### Preview Image
![image](https://github.com/user-attachments/assets/c76bc122-98c4-4adf-9502-d47b2ee9e2b3)
![image](https://github.com/user-attachments/assets/2369af92-03aa-4c2b-9574-96d1a662fdf8)
![image](https://github.com/user-attachments/assets/fa27ddcd-0081-42f3-87b6-d2a924cd4e83)
![image](https://github.com/user-attachments/assets/be75a3d2-7060-40a0-9356-400a89583cdd)
![image](https://github.com/user-attachments/assets/bffd4cd4-d8e3-4efb-a6a4-57fd35022875)


---

## Technologies Used:
- **Frontend**: React, TypeScript, Leaflet (for maps)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT Token-based Authentication
- **API**: RESTful API routes

---

## Installation & Setup

### Prerequisites:
- Node.js
- MongoDB (or MongoDB Atlas)
- npm or yarn

### 1. Clone the repository:
```bash
git clone https://github.com/Rachit-31/Janhit.git

```
### 2. Install dependencies
1. Backend
   ```bash
   cd Server
   npm install
   ```
2. Frontend
   ```bash
   cd Client
   npm install
   ```
### 3. Configuration
Server: Create a .env file in the Server directory and add your MongoDB URI and any necessary environment variables.
**Sample env file:**
- MONGODB_URI=
- ACCESS_TOKEN_SECRET=
- REFRESH_TOKEN_SECRET=
- ACCESS_TOKEN_EXPIRY=
- REFRESH_TOKEN_EXPIRY=
- CORS=*
- PORT=8000

### 4. Run the project
1. Backend
   ```bash
   cd Server
   npm run dev
   ```
2. Frontend
   ```bash
   cd Client
   npm run dev
## Contributing
If you'd like to contribute to this project, feel free to fork the repository, create a feature branch, and submit a pull request.

## Contact
- Rohan Pal: rohan49421@gmail.com
