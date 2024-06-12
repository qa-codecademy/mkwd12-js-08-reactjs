
# Part Two: Adding Routing, Parameters, Add Item Button, and Not Found Page

## Step 1: Install React Router:

First, install React Router to handle routing:
npm install react-router-dom

## Step 2: Set Up Routing

• Use React Router for navigation between pages (home, item-list, not found).

## Suggested Components Structure

## 1. Homepage

### Buttons:

- Two buttons labeled "Male" and "Female".
- Clicking on either button navigates to the item-list page with the appropriate gender-specific items.

## 2. Item-list Page

### Dynamic Content:

- The list of items changes based on the user's selection (male or female) on the homepage.

### Item Categories:

- Items are displayed in categories such as "Essentials" and "Toiletries".

### Item Details:

- Each item displays its title, quantity, and packed status.
- There are plus (+) and minus (-) buttons for increasing or decreasing the quantity.
- A button to toggle the packed status of the item (pack/unpack).

### Summary Section:

- At the bottom of the page, show:
  - Total number of items.
  - Total quantity of all items.
  - Count of packed items.
  - Count of unpacked items.

## 3. Not Found Page

### 404 Page:

- Displays a "Not Found" message when an invalid URL is entered.

## Additional Considerations

### State Management:

- Use React's useState for managing the state of items (quantity, packed status).

## Suggested Components Structure

### HomePage Component:

- Contains Male and Female buttons.

### ItemListPage Component:

- Displays the items based on the selected gender.
- Includes logic for displaying categories, item details, and summary.

### NotFoundPage Component:

- Shows a "Not Found" message.

### Item Component:

- Represents an individual item with title, quantity controls, and packed/unpacked button.

### Summary Component:

- Displays the total items, total quantity, packed, and unpacked counts.
