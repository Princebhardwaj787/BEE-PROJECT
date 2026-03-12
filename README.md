# LeetCode Clone

A full-featured LeetCode clone with **Sign In / Sign Up**, user profiles, contest page, discuss forum, and explore section — built with **Node.js**, **Express.js**, and **EJS** templating.

## Features

### Auth System
- 🔐 **Sign In / Sign Up** with form validation
- 💪 **Password strength meter** on registration
- 🔑 **Forgot Password** flow
- 👤 **Session-based auth** (express-session)
- 🚪 **Sign Out**

### Pages
- 🏠 **Home** — animated progress rings, stats, CTA
- 📋 **Problems** — filter by difficulty, tag, status, search
- 💻 **Code Editor** — split panel, line numbers, 3 languages, run/submit
- 👤 **User Profile** — solved stats, submission history, badges
- ✏️ **Edit Profile** — update bio, location, social links
- 🏆 **Contest** — upcoming/past contests with countdown timers
- 💬 **Discuss** — forum posts, tags, trending discussions, sidebar
- 🔍 **Explore** — study plans, company prep, topic browser

### Design
- Dark theme with JetBrains Mono + Syne fonts
- Responsive layout
- Animated page transitions and hover effects
- Resizable split panel in code editor

## Getting Started

```bash
npm install       # installs express, ejs, express-session
npm start         # http://localhost:3000
npm run dev       # with nodemon auto-reload
```

**Demo login:** `alex@example.com` / `password123`

## Project Structure

```
├── app.js
├── routes/
│   ├── index.js       # Home
│   ├── problems.js    # Problem list + editor + run/submit API
│   ├── auth.js        # Sign in, sign up, logout, forgot password
│   ├── users.js       # Profile, edit profile
│   └── pages.js       # Contest, Discuss, Explore
├── views/
│   ├── auth/
│   │   ├── signin.ejs
│   │   ├── signup.ejs
│   │   └── forgot-password.ejs
│   ├── partials/
│   │   ├── header.ejs   (session-aware navbar)
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── problems.ejs
│   ├── problem.ejs
│   ├── profile.ejs
│   ├── profile-edit.ejs
│   ├── contest.ejs
│   ├── discuss.ejs
│   ├── explore.ejs
│   └── 404.ejs
├── public/
│   ├── css/style.css
│   ├── css/auth.css
│   └── js/main.js
└── data/
    ├── problems.js   (10 problems with examples & starter code)
    └── users.js      (in-memory user store)
```
