// async function fetchPNRStatus() {
//     const url = 'https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/8319961705';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': 'ab144d8c42msh94230bea9b027f8p1ed802jsna0914313ab88',
//             'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Call the async function
// fetchPNRStatus();

// Function to generate a random 4-character alphanumeric captcha
function generateCaptcha() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Alphanumeric characters
  let captcha = "";
  for (let i = 0; i < 4; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById("captcha-code").innerText = captcha; // Display captcha
}

// Call generateCaptcha on page load
window.onload = function () {
  generateCaptcha();

  // Add event listener to refresh captcha button
  document
    .querySelector(".refresh-captcha")
    .addEventListener("click", generateCaptcha);

  // Handle login button click
  document.getElementById("login-btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username-input").value.trim(); // User's username
    const password = document.getElementById("password-input").value.trim(); // User's password
    const captchaCode = document.getElementById("captcha-code").innerText; // Generated captcha
    const userInput = document.getElementById("captcha-input").value.trim(); // Captcha entered by the user

    // Validate username and password
    if (!username) {
      alert("Please enter your username.");
      return;
    }
    if (!password) {
      alert("Please enter your password.");
      return;
    }

    // Validate captcha
    if (!userInput) {
      alert("Please enter the captcha.");
      return;
    }

    if (userInput !== captchaCode) {
      alert("The entered captcha does not match. Please try again.");
      return;
    }

    // If all validations pass
    alert("Login successful! Form submitted.");
    document.getElementById("username-input").value = "";
    document.getElementById("password-input").value = "";
    document.getElementById("captcha-input").value = "";
    generateCaptcha();
    // Perform additional form submission logic here if needed
  });
};
