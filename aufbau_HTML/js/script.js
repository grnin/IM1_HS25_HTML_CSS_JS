console.log("Hallo JavaScript");

const button = document.querySelector(".primary-button");
const counterValue = document.querySelector("#counter-value");

let count = 1;

function incrementCounter() {
  count++; // count = count + 1
  if (count > 9) {
    count = 1;
  }
  counterValue.textContent = String(count);
}

button.addEventListener("click", () => {
  incrementCounter();
});
