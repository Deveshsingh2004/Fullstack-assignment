# Full-Stack Intern Assignment

## Objective
This project is a full-stack web application built as part of the Full-Stack Intern Assignment. It includes a **React-based frontend** with TypeScript and a **Node.js backend** with Prisma, ensuring adherence to modern development practices.

## Tech Stack
### Frontend:
- **React (TypeScript)** – For building the user interface.
- **React Hook Form** – For form management and validation.
- **React Query** – For efficient data fetching and caching.
- **Zod** – For schema validation and data integrity.
- **Axios** – For API requests.

### Backend:
- **Node.js (TypeScript)** – For handling backend logic.
- **Express.js** – For routing and API endpoints.
- **Prisma** – For database management.
- **PostgreSQL** – As the database.

---

## Features
### Frontend:
- **Figma Design Conversion** – UI fully converted from the provided Figma design.
- **Reusable UI Components** – Organized into modular components.
- **Type Safety** – API responses and UI components use TypeScript for strict type safety.
- **API Handling** – Efficient state management using React Query.
- **Error Handling** – Proper UI feedback for errors and validation messages.

### Backend:
- **User Authentication** – Sign-up and login using email and password.
- **Prisma ORM** – User schema with `email` and `password` fields.
- **Express API** – Endpoints for user authentication.
- **Middleware for Error Handling** – Graceful error responses.

---

## Project Structure
### Frontend:
```
/frontend
├── src
│   ├── components    # Reusable UI components
│   ├── hooks         # Custom hooks for business logic
│   ├── api           # API request handling
│   ├── pages         # Application pages
│   ├── utils         # Utility functions
│   ├── styles        # Global styles
│   ├── App.tsx       # Main application file
│   ├── main.tsx      # Entry point
│   ├── routes.tsx    # Route definitions
├── public            # Static assets
├── package.json      # Project dependencies
```

### Backend:
```
/backend
├── src
│   ├── controllers   # Business logic for endpoints
│   ├── routes        # API route handlers
│   ├── middleware    # Error handling and validation
│   ├── prisma        # Database schema and migrations
│   ├── app.ts        # Express app setup
│   ├── server.ts     # Server entry point
├── .env              # Environment variables
├── package.json      # Project dependencies
```

---

## Installation & Setup
### Prerequisites:
- Node.js (v18+)
- PostgreSQL (if using a local database)
- Git

### Clone the Repository:
```bash
git clone https://github.com/yourusername/fullstack-intern-assignment.git
cd fullstack-intern-assignment
```

### Backend Setup:
```bash
cd backend
npm install
cp .env.example .env # Add your database credentials
npx prisma migrate dev # Apply database migrations
npm run dev # Start the backend server
```

### Frontend Setup:
```bash
cd frontend
npm install
npm run dev # Start the frontend
```

---



---

## Testing
- **Frontend Testing**: Manually test form validation and API responses.
- **Backend Testing**: Use Postman or curl to test API endpoints.

---

## Error Handling & Validation
### Frontend:
- **Zod** is used for input validation.
- Errors are displayed using UI feedback messages.

### Backend:
- **Middleware handles errors globally** and returns standardized error responses.
- **Validation ensures correct API requests** and returns meaningful messages.

---



---

## GitHub Repository
The complete source code is available at:
[GitHub Repository](https://github.com/Deveshsingh2004/Fullstack-assignment/)

---



---

**Author:** [Devesh Singh]

For any questions, feel free to contact me.

