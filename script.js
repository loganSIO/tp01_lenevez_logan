// jQuery script that intercepts form submission,
// validates password match, and displays an error alert if needed.
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var isValid = validateForm();

    if (isValid) {
      this.submit();
    } else {
      alert('Please correct the errors in the form.');
    }
  });

  function validateForm() {
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();

    if (password !== confirmPassword) {
      alert('Error: Password and confirmation do not match.');
      return false;
    }
    return true;
  }
});
