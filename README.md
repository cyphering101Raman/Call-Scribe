# CallScribe — AI Minutes-of-Meeting Generator

CallScribe converts raw call audio into clean, structured Minutes of Meeting (MoM) using Speech-to-Text + LLM processing.

## 🌐 Live App
**https://callscribe.netlify.app**

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-blue?style=for-the-badge)](https://callscribe.netlify.app)


---

## Built With
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=for-the-badge)
![Groq Whisper](https://img.shields.io/badge/Groq%20Whisper-STT-orange?style=for-the-badge)
![Groq Llama 3.3](https://img.shields.io/badge/Groq%20Llama%203.3-LLM-red?style=for-the-badge)

---

## 📸 Screenshot

### 🏠 Home Page  
<img width="1351" height="1164" alt="Call-Scribe-HomePage" src="https://github.com/user-attachments/assets/83a74bfd-732e-4496-8118-6085cbb4ddf5" />

### 📄 Transcription & Meeting Summary 
<img width="1351" height="1992" alt="Call-Scribe-MoM" src="https://github.com/user-attachments/assets/46493bff-03b3-4f7d-970b-b3a14e7a8af7" />


---

## 🚀 Features
- Record audio directly in browser  
- Upload existing audio files  
- Converts Audio into structured MoM  
- Download MoM as PDF  
- Minimal, fast, modern UI  
- No data stored — processed in real time  

---

## 🧭 Project Structure
```
CALLSCRIBE
├── backend
│   ├── node_modules/
│   ├── src
│   │   ├── routes
│   │   │   ├── chat.js
│   │   │   └── stt.js
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
└── frontend
    ├── node_modules/
    ├── public/
    ├── src
    │   ├── assets/
    │   ├── components
    │   │   └── Navbar.jsx
    │   ├── page
    │   │   └── Home.jsx
    │   ├── routes
    │   │   └── routes.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .env
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.js
    └── tailwind.config.js
```

---

## 🔧 Setup Instructions

### 1. Clone Repository
```
git clone https://github.com/cyphering101Raman/Call-Scribe
cd CallScribe
```
---

## 🖥️ Backend Setup
```
cd backend
npm install
```
## Create `.env`:
```
GROQ_API_KEY=****
CORS_ORIGIN=****
```

## Run backend:
```
npm run dev
```
---

## 🌐 Frontend Setup
```
cd frontend
npm install
```
## Create `.env`:
```
VITE_BACKEND_PORT_URL=****
```

## Run frontend:
```
npm run dev
```
---

## 🔁 How It Works
1. User records or uploads audio  
2. Audio → Backend → Groq Whisper STT  
3. Transcript sent to Groq Llama 3.3 with strict MoM system prompt  
4. Clean MoM returned to frontend  
5. User downloads MoM as PDF  

---

## 📄 Example MoM Output
```
Minutes of Meeting
Date: Not mentioned
Attendees: Not mentioned

Agenda Summary:

Project discussion

Key Discussion Points:

Timeline updates

Responsibilities

Decisions Made:

Action Items:

Next Meeting:
```

---

## 📎 License
MIT License
