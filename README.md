# 🌤️ AI-Powered Personal Dashboard

A sleek and interactive **AI-powered personal dashboard** built to make your daily digital experience seamless. It brings together **news updates**, **world weather**, a **to-do manager**, and an integrated **AI chat assistant** — all in one responsive, modern interface.

---

## 🚀 Features

### 🏠 Home

* Personalized greeting with current time, date, and weather of your city.
* Simple option to **reset credentials** (name, city, and news topic).
* Supports **dark and light mode** toggle for better usability.

---

### 📰 News

* Displays the latest trending news based on your selected topic.
* Click on any news snippet to open a **detailed view** showing full articles.

---

### ☁️ Explore World Weather

* Search and view **real-time weather data** for any city worldwide.
* Displays temperature, weather condition, and other details with a clean UI.

---

### ✅ Things To Do

* Manage your daily activities easily:

  * ➕ Add new tasks
  * ✔️ Mark tasks as done
  * ❌ Remove completed tasks

---

### 💬 Chat With Me (Gemini Chat)

* Powered by **Gemini API**, this chat feature allows smart, conversational interactions.
* Enhances productivity with a friendly AI assistant capable of responding naturally and contextually.

---

## 🧭 Sidebar Navigation

All main sections — **Home**, **News**, **Weather**, **To-Do**, and **Chat** — include a **consistent sidebar** that allows seamless navigation between features.

**Sidebar Menu:**

```
🏠 Home
📰 News
☁️ Weather
✅ To-Do List
💬 Chat
```

This unified sidebar ensures quick access across all components, making navigation fluid and intuitive.

---

## 🧩 User Onboarding

For first-time users:

1. Enter your **name**, **current city**, and **news topic** to personalize your dashboard.
2. Instantly access the **Home page** with your customized setup.
3. You can reset this information anytime with the **Reset Credentials** button.

---

## 🔑 Environment Variables Setup

This project requires API keys for **Gemini**, **News**, and **Weather** services.
You need to create a `.env` file in the **root directory** of your project and add the following:

```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_FOOTBALL_NEWS_API_KEY=your_news_api_key_here
VITE_WEATHER_API_KEY=your_weather_api_key_here
```

### Steps:

1. Create a file named `.env` in the root folder.
2. Replace the placeholder values with your actual API keys:

   * **Gemini API Key** – from [Google AI Studio (Gemini API)](https://aistudio.google.com/app/apikey)
   * **News API Key** – from [NewsAPI.org](https://newsapi.org/)
   * **Weather API Key** – from [OpenWeatherMap](https://openweathermap.org/api)
3. Restart your development server after saving the file.

> ⚠️ **Important:** Never share your `.env` file publicly or upload it to GitHub.[add it to gitignore to hide it from github]

---

## 🌗 Theme Modes

* Seamless **Light/Dark mode** toggle for comfortable viewing at any time of the day.

---

## 🛠️ Tech Stack

* **Frontend:** React + Vite
* **Styling:** Vanilla CSS
* **APIs:**

  * OpenWeather API – real-time weather data
  * News API – top headlines and articles
  * Gemini API – AI chat assistant
* **State Management:** React Hooks / Context API/ React Redux
* **Routing:** React Router DOM

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/hirodinn/ai-powered-personal-dashboard.git

# Navigate into the project folder
cd ai-powered-personal-dashboard

# Install dependencies
npm install

# Add your .env file (see instructions above)

# Run the development server
npm run dev
```

Then open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🎯 Future Improvements

* Add user authentication and profile persistence
* Support for more APIs (calendar, finance, etc.)
* Voice assistant integration
* Mobile app version

---

## 👨‍💻 Author

**Hire Bikila (Hirodin)**
📍 Software Engineering Student @ Addis Ababa University
💡 Passionate about React, AI, and building smart digital tools.
🔗 [GitHub](https://github.com/hirodinn)

---
