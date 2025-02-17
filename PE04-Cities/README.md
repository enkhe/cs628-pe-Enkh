# 🌆 PE04-Cities - React Application

## 📌 Overview
The **Cities React Application** allows users to **view, add, and explore cities** with details such as **country, flag, and population**. The app leverages **React Router** for navigation and **state management** for city data.

---

## **🔎 Input, Process, and Output**
### **🔹 Input**
1. **User selects a city** from the dropdown in "Add City".
2. **User manually enters city details** (Name, Country, Population).
3. **User clicks "Add City"** to save the new city.

### **🔄 Process**
1. The app **validates input fields** to ensure no empty values.
2. The new city is **added to the state**, including:
   - **City Name**
   - **Country Name**
   - **Country Code** (used to load flags)
   - **Population**
3. The app **redirects the user** back to the Cities List after adding a city.

### **📄 Output**
1. The **Cities List page updates dynamically** to display the newly added city.
2. When a city is clicked, it:
   - **Opens the City Details page**
   - **Displays the flag, name, and population**.
3. If a city is **not found**, a `"City Not Found"` message appears.

---

## **📚 Concepts Learned**
This project incorporates **core React and React Router features**, including:
- **React Router (`react-router-dom`)** for navigation between pages.
- **useParams Hook** to retrieve dynamic city names from the URL.
- **useState Hook** to manage state for user inputs and dynamic updates.
- **Conditional Rendering** to display city details or a "City Not Found" message.
- **URL Encoding & Decoding** (`encodeURIComponent()` & `decodeURIComponent()`) to handle special characters.
- **State Management** to maintain the list of cities across different routes.

---

## **⚙️ How to Get Started**
### **1️⃣ Install Dependencies**
Ensure you have **Node.js** and **npm** installed, then run:
```bash
npm install
```

### **2️⃣ Start the Development Server**
Run the app locally:
```bash
npm start
```
Then, open **http://localhost:3000/** in your browser.

---

## **📂 File Structure**
```
📁 src/
 ├📁 components/
 ┃ ├📄 CitiesList.js  --> Displays list of cities
 ┃ ├📄 CityDetails.js  --> Displays selected city details
 ┃ ├📄 AddCity.js      --> Allows users to add new cities
 ┃ └📄 Navigation.js   --> Handles navigation between pages
 ├📁 data/
 ┃ ├📄 cities.js       --> Contains predefined cities data
 ┃ └📄 countries.js    --> Contains countries data & country codes
 ├📁 styles/
 ┃ └📄 styles.css      --> Application styling
 ├📁 public/
 ┃ └📁 flags/          --> Stores country flag images (e.g., US.png, BR.png)
 ├📄 App.js            --> Main React component
 ├📄 index.js          --> Renders the React app
 └📄 README.md         --> Documentation
```

---

## **🔄 Navigation & Features**
| **Feature**          | **Route**          | **Description** |
|----------------------|--------------------|----------------|
| 🐝 **Cities List**   | `/cities`          | View all cities with flags and details |
| 🔍 **City Details**  | `/cities/:cityName` | View population and country details for a selected city |
| ➕ **Add City**      | `/add-city`        | Add a new city with name, country, and population |
| 🏠 **Home**         | `/`                | Landing page with navigation links |

---

## **🌎 Handling Special Cases**
| **Issue** | **Solution Implemented** |
|-----------|-------------------------|
| **City Name Contains Spaces** (e.g., `"New York City"`) | `encodeURIComponent()` ensures safe URL handling |
| **City Name Has Special Characters** (e.g., `"São Paulo"`) | `normalize("NFC")` ensures correct Unicode matching |
| **Empty Fields When Adding a City** | Form validation prevents submission |
| **City Not Found in Details Page** | Displays `"City Not Found"` message with a link to go back |

---

## **📸 Screenshots**
### **Cities List Page**
Displays all cities with flags:
![Cities List](https://your-image-link-here.com)

### **City Details Page**
Displays a city's flag, country, and population:
![City Details](https://your-image-link-here.com)

### **Add City Page**
Allows users to add new cities:
![Add City](https://your-image-link-here.com)

---

## **🚀 Future Enhancements**
✅ **Searchable Dropdown for Cities & Countries**  
✅ **Pagination for Large City Lists**  
✅ **Dark Mode Toggle**  
✅ **Persistent Storage (LocalStorage / Database Integration)**  

---

## **📞 Contributing**
Have ideas or feedback? Feel free to fork the project and submit a pull request!

```bash
git clone https://github.com/yourusername/cities-react-app.git
cd cities-react-app
npm install
npm start
```

---

## **💃 License**
This project is licensed under the **MIT License**.

---

### **🚀 Give it a try, Now You're Ready to Explore Cities!**
Enjoy building and improving this **React-powered Cities Application!** 🌆✨

