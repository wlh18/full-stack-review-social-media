# Unit-6-Review

> This repository is code for the Unit 6 Review for the DevMountain Web Development program.  
> It involves reviewing concepts from units 5 and 6, including routing using `react-router-dom`, connecting to a database using `massive`, handling user sessions using `express-session`, hashing passwords using `bcryptjs`, and state management using `redux`/`react-redux`.

## General Outline

### Setup

- `git fork` and `git clone`
- `npm i`
- Build component tree/server file structure - it should mostly be done for you

### Backend

#### Database

- Make a schema: what each table holds and how they relate to each other
- Create the tables in SQLTabs
- Create SQL files and write queries for all of them
- Add `.env` in your `.gitignore`
- Add `CONNECTION_STRING` in your `.env` file

#### Server

- Add `SERVER_PORT` and `SESSION_SECRET` in your `.env`.
- Build out `index.js`:
  - Import packages.
  - Import controllers.
  - Top-level middleware.
  - Auth endpoints.
  - Post endpoints.
- Build out all the corresponding functions in `authController`
- Test with Postman.

### Front End

#### Routing

- Build out `routes.js`
- `Landing.js`, `Register.js`, `Dashboard.js`, `Profile.js` routes.
- `import routes from './routes'`in `App.js`
- Build ternary to toggle between `Header.js` and `AuthHeader.js` depending on route
- Bring in `withRouter` and explain its use (both `Header.js` and `AuthHeader.js` don't get `props.match`, `props.location`, or `props.history` without it)
- Build out `Landing.js`
- Build out `Register.js`

#### Redux

- Build out `getUser` and `logout` in `reducer.js`
- Bring `getUser` into `Landing.js` and `Register.js`
- Bring `logout` into `Profile.js`

### Post Functionality (both front end and back end)

- Add functionality to `Dashboard.js`:
  - Build out handler functions to hit 'post' endpoints.
- Add functionality to `controller.js` and `index.js`
  - Build out the endpoints and corresponding functions
- Test with Postman or on the front end
