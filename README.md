# CivicVoice 🇳🇵

**A Citizen-Powered Public Issue Reporting and Tracking Platform**

CivicVoice is a Nepal-first civic technology platform designed to help citizens report public issues, track complaint progress, and improve communication between citizens and responsible authorities.

The platform aims to make public issue reporting more transparent, accessible, and accountable.

## ✨ Features

### Currently Implemented
- User registration
- User login and authentication
- Password hashing
- HTTP-only authentication cookies
- Current-user authentication endpoint (`/me`)
- MongoDB database integration
- Role field for citizens, officers, and administrators
- Environment variable configuration

### Planned Features
- Submit complaints with descriptions and locations
- Upload images as evidence
- Track complaint status and updates
- View personal complaint history
- Assign complaints to responsible departments or officers
- Officer dashboard for managing assigned complaints
- Admin dashboard for user and complaint management
- Complaint status history and notifications
- Map-based complaint visualization

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- Helmet
- CORS
- Cookie Parser

## 📁 Project Structure

```text
CivicVoice/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── modules/
│   │   ├── scripts/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd CivicVoice
```

Replace the placeholder with your actual repository URL.

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017/civicvoice
JWT_SECRET=your_long_random_secret
```

Ensure MongoDB is running locally, or use a MongoDB Atlas connection string.

Start the backend:

```bash
npm run dev
```

The API should run at `http://localhost:5000`.

### 3. Set up the frontend

Open a second terminal:

```bash
cd client
npm install
```

Create `client/.env`:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

Start the frontend:

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

**Note:** Restart the Vite development server after changing environment variables.

## 🔗 API Endpoints

Base URL: `http://localhost:5000/api/v1`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Check API health |
| POST | `/auth/register` | Register a citizen |
| POST | `/auth/login` | Log in |
| POST | `/auth/logout` | Log out |
| GET | `/auth/me` | Get the authenticated user |

Protected endpoints require a valid authentication cookie.

## 🔐 Security

- Passwords are hashed before being stored.
- Authentication cookies are configured as HTTP-only.
- Environment files are excluded from Git using `.gitignore`.
- Public registration must not allow users to assign themselves officer or admin roles.
- Protected APIs must verify authentication, role permissions, and complaint ownership.
- Production deployments must use HTTPS and strong secrets.

## 🗺️ Project Roadmap

- [x] Set up the frontend and backend
- [x] Connect the backend to MongoDB
- [x] Implement user registration
- [x] Implement login and authentication
- [x] Implement the current-user endpoint
- [ ] Complete logout and frontend authentication state
- [ ] Build the complaint data model
- [ ] Implement complaint creation and listing APIs
- [ ] Add complaint status tracking
- [ ] Build citizen dashboard
- [ ] Implement officer and admin workflows
- [ ] Add image uploads and map integration
- [ ] Add automated tests and deployment

## 🎯 Vision

CivicVoice aims to help citizens report public problems more easily and follow their progress through a transparent digital platform.

**Report an issue. Track the progress. Make a difference.**

---

*Developed as a civic technology project focused on Nepal.*
