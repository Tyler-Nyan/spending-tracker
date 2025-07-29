# Spending Tracker

A React-based web application for tracking personal expenses with an interactive analytics dashboard.

---

## 🔗 Live Demo

[https://tyler-nyan.github.io/spending-tracker](https://tyler-nyan.github.io/spending-tracker)

---

## 👤 Contributor

**Thukha Nyan (6520076)**

---

## 🛠 Technologies Used

- React.js (Create React App)
- React Router
- Chart.js + react-chartjs-2
- Local Storage for data persistence
- GitHub Pages for deployment

---

## 📓 Features

### 📘 Journal Page

![Journal](https://github.com/user-attachments/assets/033ddb67-1875-4417-b570-e4b27c025fad)

Transaction Management:
- Pre-defined categories from `spending-category.json`
- LocalStorage-based history
- Delete transaction

---

### 📊 Analytics Dashboard

![Dashboard1](https://github.com/user-attachments/assets/002ad859-a2ef-489a-8be3-c7b519656977)
![Dashboard](https://github.com/user-attachments/assets/0265cd4d-d423-4489-bb78-9f6bccd6f043)


Comprehensive spending overview:
- 📌 Total spending (all time)
- 📆 Total spending (filtered month)
- 🔁 Filtered transactions count

Flexible filtering:
- Selectable month input (by year-month)

Data Visualization:
- **Line Chart**: Daily trends
- **Pie Chart**: Category breakdown

---

## 💾 Data Storage

- Uses **browser Local Storage** to persist transactions
- No login / backend required
- Automatically saves new entries and chart data

---

## 🌐 Routing Structure

| Route | Description                    |
|-------|--------------------------------|
| `/`   | Journal page (default)         |
| `/dashboard` | Analytics dashboard     |

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/tyler-nyan/spending-tracker.git
Install dependencies:

bash
Copy
Edit
cd spending-tracker
npm install
Run the development server:

bash
Copy
Edit
npm start
Build for production:

bash
Copy
Edit
npm run build
Deploy to GitHub Pages:

bash
Copy
Edit
npm run deploy

## Note
This is a client-side only application. All data is stored in the browser's Local Storage.
