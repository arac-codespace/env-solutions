# Sample webpage using Django, React.js and friends.

This webpage aims to imitate the basic front-end functionalities found on [TRCSolutions](https://www.trcsolutions.com/) - mainly the filtering and mobile response - using a combination of bootstrap and React.js.

---
Notes to myself:

I used the following: https://github.com/mbrochh/django-reactjs-boilerplate to setup the react project overall.  Instead of using create_react_app, I'm using webpack and the configurations used in the tutorial.  

To serve data and fetch data, refer to: https://wsvincent.com/django-rest-framework-react-tutorial/.

I'm using Django Rest Framework and for now, I'm allowing non-authenticated users to read the json.  This works on this application because there's no private data in the database, but authentication/permissions is something I should keep in mind for future projects.  http://www.django-rest-framework.org/api-guide/permissions/

I also installed babel-polyfill by including it in the package.json (not using isomorphic-fetch, may uninstall).  To use it with webpack, just add it to the entry bundle.  Refer to: https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined for related info.

In future projects, consider using JSS or Aphrodite for CSS-in-JS styling.  Radium's inline styles can be a little clunky and it may have issues with certain CSS features. It's also a bit more 'CSS-ish' in how it works, as Aphrodite and JSS works by generating style tags and matching things up using classes.

Backend
Django > webpack-loader > djangorestframework > fabric (deployment bundling, not yet tested)

Front-End
React > Radium (inline-css) > webpack-dev-server(hot loading, see server.js)