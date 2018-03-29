Sample webpage using Django and ReactJS(...and friends...).


So, a roadmap of what I've done.

I used the following: https://github.com/mbrochh/django-reactjs-boilerplate to setup the react project overall.  Instead of using create_react_app, I'm using webpack and using the configurations used in the tutorial.  

To serve data and fetch data, refer to: https://wsvincent.com/django-rest-framework-react-tutorial/.

I'm using Django Rest Framework and for now, I'm allowing non-authenticated users to read the json.  This works on this application because there's no private data in the database, but authentication/permissions is something I should keep in mind for future projects.  http://www.django-rest-framework.org/api-guide/permissions/

Anyway, the only user registered is the admin so 'IsAuthenticatedOrReadOnly' is suitable for this application.

I also installed babel-polyfill by including it in the package.json (not using isomorphic-fetch, may uninstall).  To use it with webpack, just add it to the entry bundle.  Refer to: https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined for related info.

In the not so distant future, I may have to delve onto redux for filter actions.  For now though, I should refactor what I can before continuing on...

For now, the page will only include react entries where it needs it.  I'll probably create a new branch and attempt to convert the page into a SPA sometime in the future.

Backend
Django > webpack-loader > djangorestframework > fabric (deployment bundling, not yet tested)

Front-End
React > webpack-dev-server(hot loading, see server.js)