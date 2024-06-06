# Homework 2

## Part 1: CounterBy (Increment and Decrement by a Specified Value)

**Goal:** Create a component with one input and two buttons: "Increment" and "Decrement." The component should display a counter value on the screen. When the increment or decrement button is clicked, the counter should be updated accordingly.

### Acceptance Criteria:

- If the input is empty (no value in the input), the counter should increment and decrement by 1.
- If a value is provided (e.g., 10), the increment and decrement buttons should update the counter by that value.
- If the value in the input is not a number and the user tries to increment or decrement, display a div with a red background color and the text: "The input is not a number, please change it."
- If a negative number is provided in the input, do not allow incrementing or decrementing. (Hint: Use early return checks in the function or find out how to disable the button.)

---

## Part 2: Timer Component

**Goal:** Create a component that automatically starts a timer when the user enters it. The timer should increase by 1 each second, and there should be a "Reset" button to restart the timer from 1.

### Acceptance Criteria:

- The timer should start from 1 and increase by 1 each second.
- Create a button with the value "Reset." When clicked, it should reset the timer to start from 1 again, regardless of the current timer value.
