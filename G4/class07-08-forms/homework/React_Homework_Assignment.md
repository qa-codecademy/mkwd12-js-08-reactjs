# Part 3: Practicing State, HTTP and Forms

## Tasks:

### Items Page:

#### Add New Items:

- Add a text input to add new items to the list.
- Add a category select input to select the category of the new item.
- When both inputs have values, a new item should be added to the corresponding category in the state.

#### Sort Items:

- Add a sort select input to sort items by title, quantity, isPacked, etc.

#### Reset Items:

- Add a reset button to reset the items, including their isPacked status and quantity.

### Destination Page:

#### List and Search Countries:

- Create a new page called Destination.
- Add a search input for searching through the list of countries.
- Fetch country data from [https://restcountries.com/](https://restcountries.com/) and display the list of countries.
- When a country is clicked, set a destination state in the global context.

### Trip Details Page:

#### Gather Trip Details:

- Create a new page called Trip Details.
- Build a form using `react-hook-form` to gather:
  - First Name
  - Last Name
  - Date of Birth
  - Email
  - Phone Number
- On form submission, update the global context with the form data under tripDetails.

### Summary Page:

#### Display Trip Data:

- Add a button in the Trip Details page called "Display Trip Data".
- On button click, navigate to a new page called Summary.
- Display the following information on the Summary page:
  - List of all packed items with their quantities.
  - Selected destination country.
  - Trip details from the form.

### Special Bonus Component:

- Add a sidebar component to show the completion status of each step:
  - Items: ✔️ or ✖️ (Based on packing status)
  - Destination: ✔️ or ✖️ (Based on selection status)
  - Trip Details: ✔️ or ✖️ (Based on form submission)

### Tips:

- This assignment is intended to take until the end of the subject to complete.
- Understand which states are global (used in context) and which are local.
- Validate that the user has set a destination and packed items before navigating to the Summary page.

### Example UI:

#### Items Page:

- Text input for adding new items.
- Category select input.
- Sort select input.
- Reset button.

#### Destination Page:

- Search input for countries.
- List of countries fetched from the API.

#### Trip Details Page:

- Form fields for personal information.
- "Display Trip Data" button.

#### Summary Page:

- Packed items list.
- Selected destination.
- Trip details.

#### Sidebar Component:

- Completion status for each step.
