// set up initial count
let count = 0; // count needs to be changed later, so don't declare it as const.
const value = document.querySelector("#value"); // add # when you select an id.
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    // add more fun by changing the color
    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count === 0) {
      value.style.color = "black";
    }
  });
});
