function calculateBMI() {
    // Get weight and height input values
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
  
    // Convert height from cm to meters
    var heightInMeters = height / 100;
  
    // Calculate BMI
    var bmi = weight / (heightInMeters * heightInMeters);
  
    // Determine BMI category and display the result with color coding
    var result = document.getElementById("result");
    if (bmi < 16) {
      result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". This falls under Severe Thinness category.";
      result.style.color = "red";
    } else if (bmi >= 16 && bmi < 17) {
      result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". This falls under Moderate Thinness category.";
      result.style.color = "red";
    } else if (bmi >= 17 && bmi < 18.5) {
      result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". This falls under Mild Thinness category.";
      result.style.color = "red";
    } else if (bmi >= 18.5 && bmi < 25) {
      result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". This falls under Normal category.";
      result.style.color = "green";
    } else if (bmi >= 25 && bmi < 30) {
      result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". This falls under Overweight category.";
      result.style.color = "red";
    } else if (bmi >= 30 && bmi < 35) {
      result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". This falls under Obese Class I category.";
      result.style.color = "red";
    } else if (bmi >= 35 && bmi < 40) {
      result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". This falls under Obese Class II category.";
      result.style.color = "red";
    } else if (bmi >= 40) {
      result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". This falls under Obese Class III category. You should seek medical advice.";
      result.style.color = "red";
    }
  }
  