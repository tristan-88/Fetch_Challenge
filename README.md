# FE Fetch Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tech Stack/Libraries used

- TypeScript
- JavaScript
- Tailwind
- Axios.js
- React
- HTML
- CSS
- Jest.js

---

## Set-up

- After cloning the project from [repository](https://github.com/tristan-88/Fetch_Challenge/)
- You can run cd to the location or path where you saved it to
Example:
```
cd Desktop/Fetch_Challenge
```
- You can then run this command to be able to use the project via local machine
```
npm install
```

While in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
Note: The page will reload if you make edits.\
You will also see any lint errors in the console.
```
---

## Test

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Items that was unit tested
- Api Calls
- Submit Button Disable/Enable
- Feedback Message Upon Successful/Unsuccessful Posting to Api

---

# Main Form Screen

![Main](https://github.com/tristan-88/Fetch_Challenge/blob/main/src/images/main_form.png)

---

# Features

## This form does not allowed to continue if any field is empty or unselected

### Disabled with empty values in the field
![Disable](https://github.com/tristan-88/Fetch_Challenge/blob/main/src/images/initial%20form.png)

### Enable with no empty values in the fields
![Enable](https://github.com/tristan-88/Fetch_Challenge/blob/main/src/images/enables%20submit%20button.png)


## Feedback After Posting

### Successful 201 Status Feedback
![Success](https://github.com/tristan-88/Fetch_Challenge/blob/main/src/images/201%20status%20feedback.png)

### Error occured during Submission of Information
![Error](https://github.com/tristan-88/Fetch_Challenge/blob/main/src/images/error-feedback.png)
---

# Developer's Thoughts
- Deliver a clean looking form in which tailwind it helps facilitates that with its phenomenal documentation and examples
- It can be a pretty form but It needs to be functional as well, where implementing the logic using react, proper hooks to store and pass values for api calls. Also using Axios to grab the proper values for the option list for both occupancies and states.
- To keep full-stack in mind, Typing should be implemented. Hence the use of Typscript especially since Fetch handle clients viable data and information.
- Lastly implement handle for some human error that can occur for instance submission of an empty value for Name field.

---

## Other useful Commands

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
