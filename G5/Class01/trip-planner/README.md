# Homework

## Prerequiremnts

- Create new react + typescript app named Trip-Planner
- Remove the initial css files (App.css and index.css) that are created when the project's boilerplate is created. NOTE: When you gonna remove them, make sure you remove the imports of those files as well.
- Remove the contents of App.tsx so you are good to code you application

## Requirements

- Create a functional component named: Greetings that will show just a welcoming message to the user. Call this component in App.tsx
- Create new component Trips. In this component create an array of trips that is going to be just an array of strings. The array should contain the desired destinations.
  For Example: const trips = ['London', 'Paris', 'Tokyo'].
  - Iterate through the list of trips and display them on the screen.
  - Display this component in App.tsx also
- Create new component AboutMe. This component should accept the following props: fullName :string, from: string, favouriteMovies: string[]
  - In this component in a paragraph display the property fullName and the property from.
  - Create new component Movies that is going to accept 1 props which is array of movies.
  - This new Movies component call it in the component AboutMe and pass the favouriteMovies prop as coresponding property.
  - As expected, iterate through the list of movies in the Movies component and show them on the screen.
  - Finally call the AboutMe component in App.tsx
