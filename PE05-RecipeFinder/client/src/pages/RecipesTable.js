import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import recipeService from '../services/recipeService';

function RecipesTable() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    recipeService.getAllRecipes().then((data) => setRecipes(data));
  }, []);

  const handleDelete = (id) => {
    recipeService.deleteRecipe(id).then(() => {
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
    });
  };

  return (
    <Container>
      <h1>Recipes</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Cooking Time</TableCell>
              <TableCell>Servings</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipes.map((recipe) => (
              <TableRow key={recipe._id}>
                <TableCell
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => navigate(`/recipes/${recipe._id}`)}
                >
                  {recipe.name}
                </TableCell>
                <TableCell>{recipe.category}</TableCell>
                <TableCell>{recipe.cookingTime} mins</TableCell>
                <TableCell>{recipe.servings}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/edit-recipe/${recipe._id}`)}
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(recipe._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default RecipesTable;