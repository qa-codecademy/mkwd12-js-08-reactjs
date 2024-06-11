# Homework - Implement Light/Dark Theme in Your Project

## Requirements

1. **Setup:**

   - Create a new React application using TypeScript.
   - Clear out the boilerplate code to start with a clean slate.

2. **Header Component:**

   - Create a `Header` component.
   - This component should include a button with the default label "DARK".

3. **UserDetails Component:**

   - Create a `UserDetails` component.
   - In this component, hard code a user object with the following properties:
     - `fullName`
     - `age`
     - `profession`
     - `from`
   - Display these user properties on the page.

4. **Theme Context:**

   - Create a context named `ThemeContext`.
   - Using `ThemeContext`, implement functionality to toggle between light and dark themes.
     - If the current theme is DARK, clicking the button should change it to LIGHT.
     - If the current theme is LIGHT, clicking the button should change it to DARK.
   - This functionality should be triggered by the button in the `Header` component.
     - The button text should also update to reflect the current theme.

5. **Styling Based on Theme:**
   - In the `UserDetails` component, style the page based on the current theme:
     - If the theme is DARK:
       - Background color: black
       - Text color: white
     - If the theme is LIGHT:
       - Background color: gray
       - Text color: blue

## Summary

- You will create a new React application with a `Header` and `UserDetails` component.
- Implement a theme toggler using `ThemeContext`.
- Style the `UserDetails` component based on the current theme.
