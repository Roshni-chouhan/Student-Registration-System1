# Student Registration System

A full-stack web application for managing student registrations.

## Features

* Student Registration Form
* Add Student Records
* View Registered Students
* MySQL Database Integration
* REST API Backend
* Professional Responsive UI
* React + Vite Frontend
* Node.js + Express Backend

## Technologies Used

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MySQL

---

## Project Structure

```text
Student-Registration-System1/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Roshni-Chouhan/Student-Registration-System1.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

---

## MySQL Database Setup

```sql
CREATE DATABASE student_db;

USE student_db;

CREATE TABLE students (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 enrollment_number VARCHAR(50),
 email VARCHAR(100),
 mobile_number VARCHAR(15),
 branch VARCHAR(50)
);
```

---

## API Endpoints

### Add Student

```http
POST /api/students
```

### Get All Students

```http
GET /api/students
```

---

## Screenshots

Add project screenshots here.

---

## Author

Roshni Chouhan

B.Tech CSE Student

Frontend Developer | Web Development Enthusiast
