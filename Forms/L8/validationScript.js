// JavaScript code for form validation
document.addEventListener('DOMContentLoaded', function(){

  
  var form = document.getElementById('myForm');
  form.addEventListener('submit', function(event){
    // Prevent form from submitting
    event.preventDefault();

    // Retrieve the input field value
    var inputField = document.getElementById('inputField').value;

    // Regular expression pattern for alphanumeric input
    var alphanumericInput = /^[a-z0-9]+$/i;

    // Check if the input value matches the pattern
    if (alphanumericInput.test(inputField)){

      // Valid input: display confirmation and submit the form
      alert('Input is valid! This form would be submitted if it were able.')
    }
    else{
      // Invalid input: display error message
      alert('Error: Input value must be alphanumeric.')
    }
  });
});