# Phase 3: RecipeIndex and Tags (2 days)

## Rails
### Models
* Tag
* Tagging

### Controllers

### Views
* notebooks/index.json.jbuilder
* notebooks/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* recipes/index.json.jbuilder
* NotebooksIndex
  - NotebookIndexItem
* NotebookForm
* SearchIndex

### Stores
* Notebook

### Actions
* RecipeActions.receiveAllNotebooks -> triggered by ApiUtil
* RecipeActions.receiveSingleNotebook
* RecipeActions.deleteNotebook
* NotebookActions.fetchAllNotebooks -> triggers ApiUtil
* NotebookActions.fetchSingleNotebook
* NotebookActions.createNotebook
* NotebookActions.editNotebook
* NotebookActions.destroyNotebook

### ApiUtil
* ApiUtil.fetchAllNotebooks
* ApiUtil.fetchSingleNotebook
* ApiUtil.createNotebook
* ApiUtil.editNotebook
* ApiUtil.destroyNotebook

## Gems/Libraries
