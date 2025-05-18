# 📝 Notes Application

A full-stack **MERN (MongoDB, Express, React, Node.js)** application to create, edit, view, and delete personal notes. It's designed to help users manage their ideas, tasks, or reminders efficiently.

---

## 🚀 Features

- 📄 Add new notes with a title and description  
- 📋 View a list of all saved notes  
- ✏️ Edit and update existing notes  
- 🗑️ Delete notes permanently  
- ⚙️ Backend API built with Express & MongoDB  
- ⚡ Fast and responsive UI built with React + Tailwind CSS

---

## 🧑‍💻 Tech Stack

- **Frontend**: React, Tailwind CSS, React Router, Axios  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (MongoDB Atlas)  
- **Version Control**: Git & GitHub

---

## 🔧 Installation & Running Locally

Follow these steps to set up the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/vipinsahu123/Notes_App.git
cd Notes_App
```

### 2. Set up the backend

```bash
cd server
npm install
```

#### ➕ Add MongoDB connection

Inside `server/index.js`, make sure the MongoDB URI is correct:

```js
mongoose.connect("your_mongodb_connection_string");
```

You can get it from [MongoDB Atlas](https://cloud.mongodb.com/).

Then start the backend server:

```bash
node index.js
```

The backend will run on `http://localhost:3001`.

### 3. Set up the frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (Vite default).

---

## 📸 Screenshots

### 🖼️ Notes List View
![Notes List](./screenshots/screenshot1.png)

### 📝 Add Note Page
![Add Note](./screenshots/screenshot2.png)

### 📝 Edit Note Page
![Edit Note](./screenshots/screenshot3.png)

---

## 🌐 Live Demo

_Coming soon..._

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## ✨ Author

[Vipin Sahu](https://github.com/vipinsahu123)
