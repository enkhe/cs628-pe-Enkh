# PE05 Recipe Finder

## Overview
The PE05 Recipe Finder is a full-stack MERN application that allows users to discover, manage, and share recipes. The application consists of a client-side built with React and a server-side built with Node.js, Express, and MongoDB.

---

## Features
- **Recipe List**: View a list of all available recipes with clickable links to their details.
- **Add Recipe**: Users can add new recipes by providing the name, ingredients, and cooking instructions.
- **Recipe Details**: View detailed information about each recipe, including ingredients and instructions.
- **Update Recipe**: Edit existing recipes to update their details.
- **Delete Recipe**: Remove recipes from the system.

---

## Input, Process, and Output

### Input
- **User Inputs**:
  - Recipe Name
  - Category (e.g., "Dessert", "Main Course")
  - Cooking Time (in minutes)
  - Servings
  - Difficulty Level (e.g., "Easy", "Medium", "Hard")
  - Ingredients (name, quantity, unit)
  - Instructions (step-by-step guide)
  - Notes (optional additional details)
  - Cookwares (list of tools required)

### Process
1. **Frontend**:
   - Users interact with the React-based UI to input recipe details.
   - Data is validated on the client side before being sent to the backend.
2. **Backend**:
   - The Node.js/Express API receives the data and validates it against the MongoDB schema.
   - Recipes are stored, retrieved, updated, or deleted in the MongoDB database.
3. **Database**:
   - MongoDB stores the recipe data, including nested arrays for ingredients and cookwares.

### Output
- **Recipe List**:
  - Displays all recipes with their names and categories.
- **Recipe Details**:
  - Shows detailed information about a selected recipe, including ingredients, instructions, and notes.
- **Success Messages**:
  - Confirmation messages for adding, updating, or deleting recipes.
- **Error Messages**:
  - Validation errors or server-side issues are displayed to the user.

---

## Project Structure
```
PE05-RecipeFinder
├── client                # Frontend React application
│   ├── public            # Public assets
│   ├── src               # Source code for the React app
│   ├── package.json      # Client dependencies and scripts
│   └── README.md         # Client documentation
├── api                   # Backend Node.js application
│   ├── src               # Source code for the API
│   ├── package.json      # API dependencies and scripts
│   └── README.md         # API documentation
└── README.md             # Overall project documentation
```

---

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB Atlas** account for database hosting or a locally running MongoDB instance.

---

### Installation

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd PE05-RecipeFinder
```

---

### Backend Setup (API)

1. **Navigate to the API directory**:
   ```bash
   cd api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure MongoDB**:
   - Open `src/config/db.js` and update the MongoDB connection string:
     ```javascript
     const mongoose = require('mongoose');

     const connectDB = async () => {
       try {
         await mongoose.connect('<your-mongodb-connection-string>', {
           useNewUrlParser: true,
           useUnifiedTopology: true,
         });
         console.log('MongoDB connected...');
       } catch (err) {
         console.error(err.message);
         process.exit(1);
       }
     };

     module.exports = connectDB;
     ```

4. **Start the API server**:
   ```bash
   npm start
   ```
   - The API will run on `http://localhost:5000` by default.

---

### Frontend Setup (Client)

#### 1. Create the React App
If the React app is not already created, you can create it using the following command:
```bash
npx create-react-app client
```

#### 2. Navigate to the Client Directory
```bash
cd client
```

#### 3. Install Necessary Packages
Install the following packages required for the client app:
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install react-router-dom axios
```

#### 4. Configure the API URL
- Create a `.env` file in the `client` directory and add the following:
  ```
  REACT_APP_BACKEND_URL=http://localhost:5000
  ```

#### 5. Start the React Application
```bash
npm start
```
- The client will run on `http://localhost:3000` by default.

---

## Usage

1. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000`.

2. **Explore Features**:
   - View the list of recipes.
   - Add a new recipe by filling out the form.
   - Edit or delete existing recipes.

---

## Example Recipe Data

Here’s an example of a recipe object stored in the database:

```json
{
  "name": "Classic Hamburgers",
  "category": "American",
  "cookingTime": 25,
  "servings": 4,
  "difficulty": "Easy",
  "ingredients": [
    { "name": "ground beef (80/20)", "quantity": "1 1/2", "unit": "lbs" },
    { "name": "salt", "quantity": "1", "unit": "tsp" },
    { "name": "black pepper", "quantity": "1/2", "unit": "tsp" }
  ],
  "instructions": "1. Combine ingredients. 2. Cook patties. 3. Assemble burgers.",
  "notes": "Use fresh ingredients for the best flavor.",
  "cookwares": ["Mixing bowl", "Grill", "Spatula"]
}
```

---

## API Endpoints

### Recipes
- **GET /recipes**: Fetch all recipes.
- **GET /recipes/:id**: Fetch a recipe by ID.
- **POST /recipes**: Create a new recipe.
- **PUT /recipes/:id**: Update an existing recipe.
- **DELETE /recipes/:id**: Delete a recipe by ID.

---

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.