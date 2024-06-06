# Part One: Create a Travel Packing List Application - ”🌴 PackMate: Your Travel Companion 🧳“

## Setup

First, ensure you have a React and TypeScript setup. You can create a new React project with TypeScript using:

1. npm create vite
2. add project name - packmate
3. select framework - React, of course
4. select variant - Typescript
5. cd packmate
6. npm install (i)
7. npm run dev

ANDDD YOU ARE GOOD TO GO!

## Goals - Your task is to create a travel packing list application using React and TypeScript.

- Using all the things we learned so far create a single page app in react
- The page should have a list of items that are either packed or unpacked
- Each item should be its own component and recieve props from the parent packmate page component
- The page should have a header and a footer (be creative and expermient with css/html)

- The item data should consist of an array of item objects that look like this:
  ```
  {
    id: use your previous knowledge (hint: UU**)
    description: string
    quantity: number
    isPacked: boolean ( default false )
  }
  ```
- Make sure all the data from above is properly rendered in the html
- Color the item background depending on if the item is packed or not ( red for unpacked , green for packed, or use your own colors)
- At the bottom of the page show the total number of items, total number of packed items and total number of unpacked items
- Add some form of icon like a ✅ for packed items or ❎ for unpacked items

## Bonus

- Using state try to make it so that when the user clicks on a item it will change from unpacked to packed
- Make sure when you pack an item to update the counts at the bottom of the page

> This will help you get experience with a real world scenario and it will help you pack for the upcoming holidays 😋. Happy coding, guys! 👩🏻‍💻
