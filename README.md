Added a form and a result elements from the DOM using querySelector.
Added an event listener to the form's submit event.
It extracts the values of "dividend" and "divider" from the form data.
If either windows are empty, a message pops up saying both values are required.
If the divider is zero, a message pops up saying division by zero is not allowed.
If either "dividend" or "divider" is not a number, it logs an error message to the console and displays an error message on the page.
When all validations pass, division of specified numbers is done.
