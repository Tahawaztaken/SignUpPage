function passwordMatch(password1, password2) {
    if (password1.value === password2.value) {
      // Set border color to green when passwords match
      password2.style.borderColor = 'green';
      return true;
    } else {
      // Set border color to red when passwords don't match
      password2.style.borderColor = 'red';
      return false;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#errorMessage").style.opacity = "0"; // Hide the error message initially
  
    let confirmbtn = document.querySelector('input[type="submit"]');
    confirmbtn.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the form from submitting initially
      let password1 = document.querySelector("#password");
      let password2 = document.querySelector("#password2");
      let errorMessage = document.querySelector("#errorMessage");
  
      if (passwordMatch(password1, password2)) {
        // If passwords match, submit the form
        event.target.form.submit();
      } else {
        // Show the error message
        errorMessage.style.opacity = "100";
      }
    });
  });
  