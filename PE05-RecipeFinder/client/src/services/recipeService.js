import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const recipeService = {
  getAllRecipes: async () => {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  },

  getRecipeById: async (id) => {
    const response = await axios.get(`${API_URL}/recipes/${id}`);
    return response.data;
  },

  createRecipe: async (recipe) => {
    const response = await axios.post(`${API_URL}/recipes`, recipe);
    return response.data;
  },

  updateRecipe: async (id, recipe) => {
    const response = await axios.put(`${API_URL}/recipes/${id}`, recipe);
    return response.data;
  },

  deleteRecipe: async (id) => {
    const response = await axios.delete(`${API_URL}/recipes/${id}`);
    return response.data;
  },
};

export default recipeService;