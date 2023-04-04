# What is this project?
This is the fronend part of a task assignment to build an autocomplete input, it uses the backend as API so it needs to be running for it to work. Not much to talk about here, it's a simple autocomplete input component with a debounce time to avoid request abuse. There are some elements just used just for better presentation, but others are based on the possibility for this project to grow and keep a good maintainability.

# How to start this application
The project doesn't have a local development server (like json-server) so it needs the backend up and running.

Install packages and run the prepared script for local development:
```
npm i

npm run start:dev
```

# How to run tests
To run unit tests it's as simple as:
```
npm run test

# to keep tracking the files
npm run test:watch
```

## The tech stack
- **Vite** is much easier to use than webpack/babel, and most browsers support it
- **Radix UI** is a great tool that helps build commom components. It provides good accessibility and user experience.
- **Axios** is used here because it's easy to set up a commom URL and other parameters if necessary. Also it have some other good features which makes a better choice than the fetch API.
- **React-hook-form** provides a good way to handle forms. It's not a rule when handling data, but it has some features that makes it easier to provide feedback info to user.
- **Styled-components** because it have a nice readability when building components and provides themes, among other features.
- **Zod** is a validator, which integrates well with Typescript and react-hook-forms.
