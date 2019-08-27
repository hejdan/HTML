let buttons = document.querySelectorAll("#btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    var randomNumber = Math.floor(Math.random(10));
    console.log(button.classList.value);
    button.innerHTML = Math.floor(Math.random() * 10);
  });
});
