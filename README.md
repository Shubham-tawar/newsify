# 📰 Newsify - A React News Application

**Newsify** is a responsive, category-wise news web app built using React that fetches real-time data from the [NewsAPI](https://newsapi.org/). It offers a smooth user experience with infinite scrolling, loading indicators, and well-structured routing.

> ⚠️ Note: NewsAPI doesn't allow free-tier API keys to be used in deployed public apps, so this project is only available for local testing.

---

## 🚀 Features

- 🔀 **Category Navigation**: Switch between categories like Technology, Health, Science, Business, Sports, and Entertainment using React Router.
- 🔃 **Top Loading Bar**: A visual progress bar appears while data is loading to improve user feedback.
- 🔄 **Infinite Scrolling**: New articles automatically load as you scroll to the bottom of the page.
- 📄 **Responsive Layout**: Uses Bootstrap components for quick and adaptive UI design.
- 🔐 **Secure API Handling**: API key is hidden via environment variables using `.env.local`.

---

## 📚 Technologies Used

- **React (Class & Functional Components)**
- **React Router DOM**
- **Bootstrap 5**
- **React Top Loading Bar**
- **NewsAPI**
- **.env.local for API key security**

---

## 🧠 What I Learned

- Working with **class-based components** and their lifecycle methods (`componentDidMount`, etc.)
- Handling **functional components** with hooks like `useState`
- Using **React Router** to handle dynamic routes and navigation
- Implementing **infinite scroll** manually
- Adding **loading indicators** for better UX
- Reading and following **official documentation** for problem-solving
- Securely managing API keys in development

---

## 🛠 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/newsify.git
   cd newsify
