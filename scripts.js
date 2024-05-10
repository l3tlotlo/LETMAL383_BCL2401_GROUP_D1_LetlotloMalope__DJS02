const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

   // Checking ifthere are values entered in the fields
  if (!dividend || !divider){
    result.innerText = "Division not performed. Both values are required in inputs. Try again" //Error message
    return;
    
  }
  // validation for division by zero
  if  (parseInt(divider) === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";//Error message 
    console.error("Division by zero error: ", new Error().stack);//Message displayed in console
    return; 
  }

  //Checking if inputs are not numbers
  if (isNaN(dividend) || isNaN(divider)){   
    document.write( "Something critical went wrong. Please reload the page");//Error message to be shown on browser
    console.error("Error: Invalid number provided",new Error().stack) //Displays the error message in the console
    document.body.classList.add('.critical-error');
    return;
  }
//Function to do calculation
  result.innerText = Math.floor(dividend / divider);
});