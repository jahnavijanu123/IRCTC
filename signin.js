// Sign-In JavaScript

// Function to generate a random CAPTCHA
function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }
  
  // Setting up CAPTCHA on page load
  const captchaCodeElement = document.getElementById("captcha-code");
  const refreshCaptchaButton = document.getElementById("refresh-captcha");
  
  function refreshCaptcha() {
    captchaCodeElement.textContent = generateCaptcha();
  }
  
  refreshCaptcha(); // Initial CAPTCHA
  refreshCaptchaButton.addEventListener("click", refreshCaptcha);
  
  // Sign-In Form Submission
  document.getElementById("signin-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const enteredCaptcha = document.getElementById("captcha-input").value;
    if (enteredCaptcha !== captchaCodeElement.textContent) {
      alert("Invalid CAPTCHA. Please try again.");
    } else {
      alert("Sign-In Successful!");
    }
  });
  