
# 📚 Language Vocabulary Builder

This is a full-stack **English Vocabulary Builder** web application that helps users **add**, **practice**, and **test** vocabulary words interactively. Built using **React.js** (frontend) and **Node.js + Express.js + MongoDB** (backend).

---

## 🚀 Features

- ➕ Add new vocabulary words with definitions and optional images.
- 📃 See all words in a word list.
- 🧠 Practice flashcards to improve memory.
- 📝 Take interactive quizzes with multiple-choice questions.
- ⏳ Timer for each quiz question.
- 📤 Bulk upload of vocabulary via JSON file.
- 🎨 Homepage animation using TSParticles (optional).
- 📱 Responsive and mobile-friendly UI.

---

## 🛠️ Technologies Used

- **Frontend:** React.js, React Router DOM, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Styling:** CSS, Flexbox
- **Others:** TSParticles, Postman (for testing)

---

## 📁 Project Structure

```
vocab-builder/
├── client/             # Frontend code (React)
│   └── src/pages/
├── server/             # Backend code (Node.js + Express)
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── server.js
├── words.json          # Optional bulk upload data
└── README.md           # This file
```

---

## ⚙️ How to Run the Project Locally

### ✅ Prerequisites

- Node.js installed
- MongoDB installed or use MongoDB Atlas

---

### 🔧 Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/Anowar31Hossain/Language-Vocabulary-Builder.git
cd Language-Vocabulary-Builder
```

2. Install backend dependencies:
```bash
npm install
```

3. Create a `.env` file in root:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. Run backend server:
```bash
npm start
```
➡ Server runs at: `http://localhost:5000`

---

### 🌐 Frontend Setup

1. Navigate to frontend directory:
```bash
cd client
```

2. Install frontend dependencies:
```bash
npm install
```

3. Run frontend:
```bash
npm start
```
➡ Frontend runs at: `http://localhost:3000`

---

## 📤 Bulk Upload (Optional)

1. Create a `words.json` like this:
```json
[
  { "word": "Eloquent", "definition": "Fluent or persuasive in speaking." },
  { "word": "Obsolete", "definition": "No longer in use." }
]
```

2. Use Postman or REST client to `POST` to:
```
http://localhost:5000/api/words/bulk-add
```

---

## 📸 Screenshots (Optional)

> You can add image links here:
```
![Home](link_to_homepage_screenshot)
![Quiz](link_to_quiz_screenshot)
```

---

## 👤 Author

- **👨‍💻 Name:** Anowar Hossain  
- **🏫 University:** Rajshahi University of Engineering & Technology (RUET)  
- **🔗 GitHub:** [Anowar31Hossain](https://github.com/Anowar31Hossain)

---


