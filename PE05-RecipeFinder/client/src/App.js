import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import RecipeForm from './pages/RecipeForm';
import RecipesTable from './pages/RecipesTable';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes-table" element={<RecipesTable />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/edit-recipe/:id" element={<RecipeForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
