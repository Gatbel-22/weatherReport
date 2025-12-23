# Daily Weather App

A simple, responsive, and user-friendly web application that displays real-time weather information for any city using the OpenWeather API. The app is built with **HTML**, **CSS**, and **Vanilla JavaScript**, and is fully compatible with **GitHub Pages**.

---

## 🚀 Live Demo
Once deployed on GitHub Pages, access the app at:

https://<your-username>.github.io/<repository-name>/weather_report.html


---

## 📌 Features

- Search weather by city name
- Real-time temperature in Celsius
- Weather condition description
- Humidity and wind speed details
- Clean, modern, and responsive UI
- Error handling for invalid city names
- Works perfectly on GitHub Pages (HTTPS)

---

## 🛠️ Technologies Used

- **HTML5** – Structure
- **CSS3** – Styling and responsive layout
- **JavaScript (ES6)** – Logic and API integration
- **OpenWeather API** – Real-time weather data

---

## 📂 Project Structure

weather-report-app/
│
├── weather_report.html
├── weather_report.css
├── weather_report.js
└── README.md

---

## ⚙️ How It Works

1. User enters a city name.
2. JavaScript sends a request to the OpenWeather API.
3. Weather data is fetched and displayed dynamically.
4. Errors are handled gracefully if the city is not found.

---

## 🔑 API Configuration

This project uses the **OpenWeather API**.

### To use your own API key:
1. Sign up at: https://openweathermap.org/
2. Generate an API key.
3. Open `weather_report.js`.
4. Replace the API key with your own:

```javascript
const apiKey = "YOUR_API_KEY_HERE";
