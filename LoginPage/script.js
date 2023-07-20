function passwordMatch(password1, password2) {
  if (password1.value === password2.value) {
    // Set border color to green when passwords match
    password2.style.borderColor = 'green';
    password2.setCustomValidity(''); // Clear custom validity when passwords match
    return true;
  } else {
    // Set border color to red when passwords don't match
    password2.style.borderColor = 'red';
    password2.setCustomValidity('Passwords do not match'); // Set custom validity message
    return false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector("#errorMessage").style.opacity = "0"; // Hide the error message initially

  let confirmbtn = document.querySelector('input[type="submit"]');
  confirmbtn.addEventListener('click', () => {
    let password1 = document.querySelector("#password");
    let password2 = document.querySelector("#password2");
    let errorMessage = document.querySelector("#errorMessage");

    // Check the password match
    if (passwordMatch(password1, password2)) {
      // If passwords match, let the form submit naturally
      password2.setCustomValidity(''); // Clear custom validity for successful submission
    } else {
      // Stop form submission
      errorMessage.style.opacity = "100";
    }
  });
});
