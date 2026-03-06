Patch Notes
A gaming social platform for sharing patch notes and direct messaging.

Technologies Used
- Backend:  Spring Boot, Spring Security, JWT, MySQL
- Frontend: React, Vite, Axios
- Database: MySQL

Steps to Run Backend
1. Make sure MySQL is running
2. Create database: `CREATE DATABASE patchnotes_db;`
3. Navigate to backend: `cd backend/demo`
4. Run: `mvn clean spring-boot:run`
5. Backend runs on: `http://localhost:8080`

Steps to Run Web App
1. Navigate to web: `cd web`
2. Install dependencies: `npm install`
3. Run: `npm run dev`
4. Web app runs on: `http://localhost:5174`

Steps to Run Mobile App
- To be implemented in the next session.

API Endpoints
| Method |      Endpoint      |    Description    | Auth Required |
|        |                    |                   |               |
| POST   | /api/auth/register | Register new user |      No       |
| POST   | /api/auth/login    |    Login user     |      No       |
| GET    | /api/user/me       | Get current user  |      Yes      |
