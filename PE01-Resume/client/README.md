# PE01-Resume

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Input

1. Created the app using Create React App:
    ```sh
    npx create-react-app client
    ```

2. Added a `Resume` component in `src/Resume.js` and its corresponding CSS in `src/Resume.css`.

3. Updated the `App` component in `src/App.js` to include the `Resume` component:
    ```javascript
    import logo from './logo.svg';
    import './App.css';
    import Resume from './Resume';

    function App() {
      return (
        <div className='App'>
          <Resume />
        </div>
      );
    }

    export default App;
    ```

## Process

In the project directory, you can run the following scripts:

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

## Output

To save your workspace and update your repository with the changes, follow these steps:

1. Open the terminal in Visual Studio Code.
2. Stage the changes by running:
    ```sh
    git add .
    ```
3. Commit the changes with a message:
    ```sh
    git commit -m "Update App component to include Resume"
    ```
4. Push the changes to the remote repository:
    ```sh
    git push
    ```

This will save your changes and update your repository.