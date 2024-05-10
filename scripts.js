const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

   // validation for empty inputs
  if (!dividend || !divider){
    result.innerText = "Division not performed. Both values are required in inputs. Try again"
    return;
    
  }
  // validation for division by zero
  if  (parseInt(divider) === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Division by zero error: ", new Error().stack);
    return; 
  }

  function showError(message) {
    // Log error message with stack trace
    console.error("Error:", message, new Error().stack);
    // Display critical error message directly on the document
    document.write("Something critical went wrong. Please reload the page");
    // Add critical-error class to the body element
    document.body.classList.add('critical-error');
}

// Check if either dividend or divider is not a number
if (isNaN(dividend) || isNaN(divider)){
    // Call showError function with custom message
    showError("Invalid number provided");
    // Exit function
    return;
}

  result.innerText = Math.floor(dividend / divider);
});