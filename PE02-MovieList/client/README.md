# PE02-MovieList

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Input, Process, Output

### Input

1. Created the app using Create React App:
    ```sh
    npx create-react-app client
    ```

2. Added a `MovieList` component in `src/Components/MovieList.js` and its corresponding CSS in `src/Components/MovieList.css`.

3. Updated the `App` component in `src/App.js` to include the `MovieList` component:
    ```javascript
    import React from 'react';
    import MovieList from './Components/MovieList';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <MovieList />
        </div>
      );
    }

    export default App;
    ```

### Process

The `MovieList` component maintains a list of 100 real movie titles, genres, and their release years. It also includes placeholder image URLs for each movie. The component allows users to filter movies by genre and displays the filtered list.

1. The `MovieList` component uses the `useState` hook to manage the selected genre.
2. The list of movies is stored in an array of objects, each containing the title, genre, release year, and image URL of a movie.
3. The genres are dynamically generated from the list of movies.
4. The user can select a genre from a dropdown menu to filter the movies.
5. The filtered list of movies is displayed, showing the title, release year, genre, and image of each movie.

### Output

To save your workspace and update your repository with the changes, follow these steps:

1. Open the terminal in Visual Studio Code.
2. Stage the changes by running:
    ```sh
    git add .
    ```
3. Commit the changes with a message:
    ```sh
    git commit -m "Update MovieList component to include 100 movies and images"
    ```
4. Push the changes to the remote repository:
    ```sh
    git push
    ```

This will save your changes and update your repository.