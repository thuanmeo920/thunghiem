import { API_URL } from './config';
import { getJSON } from './helper';
export const state = {
  recipe: {},
};
export const loadRecipe = async function (id) {
  try {
    const data=await getJSON(`${API_URL}/${id}`);
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url,
      sourceUrl: recipe.source_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw(err);
  }
};
