# RoundTable

[Heroku link][roundtable-app.herokuapp.com/] **NB:** This should be a link to your production site

[heroku]: RoundTable

## Minimum Viable Product

RoundTable is a web application inspired by Genius and (and several cooking sites!) built using Ruby on Rails and React.js. RoundTable allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Read, submit, and annotate recipes
- [ ] Allow submission of a corresponding picture of the recipe upon submission of recipe
- [ ] View other users' submissions and annotations

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Recipe Model and JSON API (1.5 days)

In Phase 1, I'll set up the basic Rails backend and JASON API. I'll set up auth (using BCrypt) and direct newly reigstered or signed in users to a (for now) blank Recipe index page. Before building out the front end, I will begin by setting up a full JSON API for Recipes.

[Details][phase-one]

### Phase 2: Flux Architecture and Recipe CRUD (2 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view structure for the main application. After the basic Flux architecture has been set up, a Recipe store will be implemented and a set of actions corresponding to the needed CRUD functionality created.
Once this is done, I will create React views for the Recipe `Index`, `IndexItem` and `Form`. At the end of Phase 2, Recipes can be created, read, edited and destroyed in the browser.
Lastly, while constructing the views I will start using basic bootstrap for styling.

[Details][phase-two]

### Phase 3: RecipesIndex and Tags (1.5 days)

Phase 3 adds organization to the Recipes. Recipes all fit into one master RecipesIndex, which has its own "Index" view and serves as the landing page for users post-login. I will create a JSON API for RecipesIndex.
Recipes can also now be tagged with multiple tags. Users can bring up notes in a separate `SearchIndex` view (to be contained by a floating toolbar at the top of all non-"sign in"/"sign up" views) by searching by their titles or for their tags. Once the tag search is implemented, I will extend this to a fuzzy search for every recipe's title.

[Details][phase-three]

### Phase 4: Annotations & Comments (2 days)

Phase 4 add annotations to the Recipe view pages. Users will be able to add annotate selected portions of text in the Recipe body by clicking and dragging to highlight, then entering and submitting text.
Phase 4 will also see the introduction of user-added comments at the bottom of each Recipe page.

[Details][phase-four]

### Phase 5: User Pages (1 day)

Phase 5 will see the introduction of user profile pages. These pages will feature links to indices users' recipes, annotations, and comments, each of which will appear on the page when the currently logged-in user clicks on the relevant link.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 6 I will add styling flourishes and make modals out of some elements.

### Bonus Features (TBD)
- [ ] Add upvotes/downvotes for annotations, comments
- [ ] Add photos for recipes, likely using PaperClip gem
- [ ] Add sorting functionality for RecipesIndex page
- [ ] Prettify transitions
- [ ] Sort recipe/annotation comments by up/downvote count
- [ ] Allow users to "favorite" and view a list of recipes
- [ ] Expanded user profile pages

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
