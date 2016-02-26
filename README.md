# RoundTable

[RoundTable](http://cook-roundtable.com) is a cooking-focused web application built on Ruby on Rails and React.js. Inspired by Genius, it allows aspiring chefs to share and annotate recipes step by step, thereby mitigating much of the confusion that comes with trying a new recipe.

RoundTable allows users to:

- Create an account
- Log in/log out
- Upload recipes
- Upload an unlimited number of nested steps per recipe
- Upload photos associated with recipes
- View an index of all recipes
- View individual recipes
- Annotate any step of any recipe
- Search for recipes, accounting for user errors like spelling

![Image of splash page](http://res.cloudinary.com/dz5btfj9w/image/upload/c_scale,h_400/v1456447985/splash_view_nv35wp.png)

![Image of recipe index](http://res.cloudinary.com/dz5btfj9w/image/upload/c_scale,h_400/v1456447987/recipes_index_view_zztmui.png)

![Image of recipe annotation](http://res.cloudinary.com/dz5btfj9w/image/upload/c_scale,h_400/v1456447980/annotation_view_jmtdwx.png)

# Technologies Used

- The back end is built on [Ruby on Rails](http://rubyonrails.org/) and [PostgreSQL](http://www.postgresql.org/).
- The front end is built using [React](https://facebook.github.io/react/) and [Flux](https://facebook.github.io/react/docs/flux-overview.html).
- Authication is handled by [bcrypt](https://rubygems.org/gems/bcrypt-ruby/versions/3.1.5).
- The [Cloudinary](http://cloudinary.com) API and upload widget to allow uses to upload recipes images that are stored in the cloud.
- The [Fuse.js](https://github.com/krisk/Fuse) JavaScript library adds a robust fuzzy search feature that accounts for user spelling errors.
- Active Record [nested attributes](http://api.rubyonrails.org/classes/ActiveRecord/NestedAttributes/ClassMethods.html) allow users to create an unlimited number of steps without making additional AJAX requests, speeding up the app considerably.
