# This Branch is the production version of the main [taskTracker](https://reda-codes.github.io/taskTracker/) app. <br>
### To get this project runnig on your machine follow the below steps:<br>
Go to [NodeJs Website](https://nodejs.org/en/download/) and Install it on your computer.<br>
Go to the directory where you want the taskTracker app to be hosted and open you favorit terminal.<br>
### Past the following commands:<br>
Create react development environment:<br>
```
npx create-react-app test-react
```
Install React router for multiple pages support:
```
npm i react-router-dom
```
Instal react Icons:
```
npm i react-icons
```
### Copy all Build-code branch files into test-react folder:<br>
    ▼ public
         favicon.ico
         index.html
         logo192.png
         logo512.png
         manifest.json
         robots.txt
    ▼ src
        ▼ components
            About.js
            AddTask.js
            Header.js
            MainApp.js
            Tasks.js
         App.js
         index.css
         index.js
    .gitignore
     README.md
     package-lock.json
     package.json
### Note:<br>
After pasting all the files you will have an extra file called node-modules which was created when we run the `npx create-react-app test-react` command.<br>
### Start the app:<br>
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.<br>
**to stop the app from runnig just type Ctrl+c and chose (y).**

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.




