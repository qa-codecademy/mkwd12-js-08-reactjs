```markdown
# Homework - 3

## Requirements:

### 1. Add a Trip Feature

Enhance the existing code by adding the functionality to create and add a new trip.

### 2. Acceptance Criteria:

1. **Create a New Component**:

   - Develop a new component called `AddTrip`.

2. **Add a Link in the Header**:

   - Add a new nav link named "Add Trip" in the header.
   - Ensure that clicking this link displays the `AddTrip` component.

3. **Form in AddTrip Component**:

   - Include a form within the `AddTrip` component with the following input fields:
     - **Title**: Input for the trip's title.
     - **Destination**: Input for the trip's destination.
     - **Budget**: Input for the trip's budget.
     - **Image**: Input for an image URL related to the trip.
   - Add a button labeled "Create Trip".

4. **Add Trip to Planned Trips**:
   - Upon clicking the "Create Trip" button, create a new trip object with the provided details.
   - Add this new trip object to the `plannedTrip` state prop array.
   - The trip's status should have a default value of "PLANNING".

### 3. Implementation Hint:

- For generating a unique `id` for each trip, you can use `Date.now()`.

---

Feel free to reach out if you have any questions or need further clarifications. Happy coding!
```
