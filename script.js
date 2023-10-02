const submitButton = document.querySelector("button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const input = document.querySelector("input");
  const errors = document.querySelectorAll(".error");

  if (!input.value) {
    errors.forEach((error) => {
      error.style.display = "block";
    });
  } else if (input.id === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(input.value);
    if (!isEmailValid) {
      errors.forEach((error) => {
        error.style.display = "block";
      });
    } else {
      errors.forEach((error) => {
        error.style.display = "none";
      });
    }
  } else {
    errors.forEach((error) => {
      errors.style.display = "none";
    });
  }
});
