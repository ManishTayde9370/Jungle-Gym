document.getElementById('joinUsForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Perform form validation
    const name = document.getElementById('name').value;
    // Add validation for other form fields here
  
    // Perform validation for each form field
    if (name === '') {
      alert('Please enter your name.');
      return;
    }
  
    // Add validation for other form fields here
  
    // If all fields are valid, you can proceed with form submission
    const formData = new FormData(this);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  
    // You can also add code here to send the form data to the server for storage in the MongoDB database
  
    // Display an alert for successful form submission
    alert('Form submitted successfully!');
  
    // You can also redirect the user to a different page after form submission if needed
    window.location.href = 'success.html';
  });
  