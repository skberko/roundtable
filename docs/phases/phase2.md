# Phase 2: Flux Architecture and Recipe CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* RecipesIndex
  - RecipesIndexItem
* RecipeForm

### Stores
* Recipe

### Actions
* RecipeActions.receiveAllRecipes -> triggered by ApiUtil
* RecipeActions.receiveSingleRecipe
* RecipeActions.deleteRecipe
* RecipeActions.fetchAllRecipes -> triggers ApiUtil
* RecipeActions.fetchSingleRecipe
* RecipeActions.createRecipe
* RecipeActions.editRecipe
* RecipeActions.destroyRecipe

### ApiUtil
* ApiUtil.fetchAllRecipes
* ApiUtil.fetchSingleRecipe
* ApiUtil.createRecipe
* ApiUtil.editRecipe
* ApiUtil.destroyRecipe

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
