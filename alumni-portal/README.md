# Alumni Association Portal

## Project Overview
The Alumni Association Portal is a full-stack web application designed to connect alumni, faculty, and students. It addresses challenges such as outdated records and poor communication, providing a platform for networking, job opportunities, and event management.

## Tech Stack
- **Frontend:** React.js with Tailwind CSS
- **Backend:** Node.js/Express.js
- **Database:** MongoDB (using Mongoose ODM)
- **Authentication:** JWT tokens

## Core Features
1. **User Registration/Login:** Supports Alumni, Students, and Faculty roles.
2. **Alumni Profile Management:** Users can update their contact information, job details, and profile photos.
3. **Dashboard:** Personalized feed with events, job postings, and news.
4. **Events Management:** Create, view, and RSVP to reunions and workshops.
5. **Job Board:** Post and browse job opportunities for alumni.
6. **Messaging/Chat:** Real-time communication between members.
7. **Admin Panel:** For institutional updates and management.

## Database Schema
- **Users:** { name, email, password, role, graduationYear, currentJob, profilePhoto, isVerified }
- **Events:** { title, date, venue, description, organizer, attendees[] }
- **Jobs:** { title, company, description, postedBy, applicants[] }
- **Messages:** { sender, receiver, content, timestamp }

## Key Pages/Components
- **Landing Page:** Showcases features and testimonials.
- **Auth Pages:** Login, Register, and Forgot Password.
- **Dashboard:** Displays events feed and quick actions.
- **Profile Page:** View and edit user profile.
- **Events Page:** Calendar view and RSVP options.
- **Jobs Page:** Search and filter job postings.
- **Chat Interface:** Real-time messaging.

## API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/profile`
- `PUT /api/profile`
- `GET /api/events`
- `POST /api/events/rsvp`
- `GET /api/jobs`
- `POST /api/messages`

## Setup Instructions
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd alumni-portal
   ```

2. **Install dependencies for the server:**
   ```
   cd server
   npm install
   ```

3. **Set up environment variables:**
   Copy `.env.example` to `.env` and fill in the required values.

4. **Install dependencies for the client:**
   ```
   cd ../client
   npm install
   ```

5. **Run the server:**
   ```
   cd server
   npm start
   ```

6. **Run the client:**
   ```
   cd ../client
   npm start
   ```

## Additional Notes
- Ensure MongoDB is running and accessible.
- The application is designed to be responsive and mobile-friendly.
- Implemented features include role-based access control, email verification, and password reset functionality.

## Future Enhancements
- Payment integration for premium membership.
- Additional features based on user feedback.

## License
This project is licensed under the MIT License.