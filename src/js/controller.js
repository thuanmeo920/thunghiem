
import * as model from '../js/model.js';
import recipeView from './view/recipeView.js'
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpiner();
    //1. loading recipe
    await model.loadRecipe(id);
    //2. rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderMessage();
  }
};
recipeView.addHandlerRender(controlRecipes);
