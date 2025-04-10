const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color"); // select class=color should add . to the class name!

btn.addEventListener("click", () => {
  // generate random number of color
  const index = getRandomNum();
  console.log(index);
  // change text

  color.textContent = colors[index];
  // change backgound color
  document.body.style.backgroundColor = colors[index]; // backgroundColor is not a function.
});

function getRandomNum() {
  // [0, 1) * 4 = [0, 4)
  // floor([0, 4)) = 0, 1, 2, 3
  return Math.floor(Math.random() * colors.length);
}
