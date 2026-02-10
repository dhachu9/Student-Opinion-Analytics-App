# Student-Opinion-Analytics-App
A full-stack mobile application that collects student feedback (rating, text, and voice) and provides meaningful analytics to teachers through dashboards and reports.

## 🚀 Project Overview

The Student Opinion Analytics App is a full-stack feedback management platform designed for educational institutions. It allows students to share their opinions about courses and faculty using ratings, written comments, and voice feedback.

The system processes both structured (ratings) and unstructured (text and voice) data in real time or near real time. Natural Language Processing (NLP) techniques are applied to analyze sentiment and extract insights, which are then visualized for teachers and administrators through analytics dashboards.

The application follows a modular and scalable architecture with a clear separation between frontend and backend, making it suitable for academic projects as well as real-world deployment.



## 🧩 Key Features

### 🎓 Student Portal

* 🔐 Secure authentication using student ID / email and password or OTP
* 🧭 User-friendly and responsive dashboard optimized for mobile devices
* 📝 Feedback submission through multiple formats:

  * ⭐ Rating-based feedback for teaching quality, clarity, and interaction
  * ✍️ Descriptive text feedback with guided questions
  * 🎤 Voice feedback with automatic speech-to-text conversion
* 🕵️ Anonymous feedback option to encourage honest opinions
* 📜 View previously submitted feedback and status

### 👩‍🏫 Teacher / Admin Portal

* 🔐 Secure role-based access (Faculty / HOD / Admin)
* 📊 Interactive analytics dashboard for performance monitoring
* 📚 Subject-wise and faculty-wise rating summaries
* 🧠 Automated sentiment classification (Positive / Neutral / Negative)
* ☁️ Word cloud and keyword analysis from text feedback
* 📈 Trend analysis to compare feedback across weeks or semesters



## 🏗 Tech Stack

### 📱 Mobile Frontend

* **React Native** – Cross-platform mobile app development for Android and iOS
* **Expo** – Simplified development, testing, and deployment
* **React Navigation** – Screen navigation and flow management
* **Tailwind / Native styling** – Consistent and responsive UI design

### ⚙️ Backend

* **Python (FastAPI)** – High-performance backend framework
* **RESTful APIs** – Structured communication between mobile app and server
* **JWT / Token-based Authentication** – Secure user sessions

### 🗄 Database

* **PostgreSQL** – Relational database for structured feedback storage
* Tables for students, faculty, subjects, feedback, and sentiment scores

### 📊 Analytics & Intelligence

* **Power BI** – Interactive dashboards and visual reports for teachers
* **NLP (TextBlob / VADER)** – Sentiment analysis of text and voice feedback
* **Speech-to-Text API** – Conversion of voice feedback into text

### 🔧 Version Control

* Git & GitHub

---

## 🧱 Application Architecture

```
Mobile App (React Native)
   |
   | REST API (JSON)
   |
Backend (FastAPI)
   |
Database (PostgreSQL)
   |
Analytics & NLP Layer
   |
Power BI Dashboard (Teacher/Admin)
```

* The mobile app handles UI, navigation, and user interactions for students and teachers
* The backend manages authentication, validation, and feedback processing
* The analytics layer performs sentiment analysis and prepares data for visualization
* Power BI is used for advanced analytics and reporting for teachers and administrators



## 🔁 Application Navigation Flow

### Student Flow

* Splash Screen
* Login
* Student Dashboard
* Feedback Selection
* Rating / Text / Voice Feedback Submission

### Teacher Flow

* Login
* Teacher Dashboard
* Analytics View (Power BI Embedded)

