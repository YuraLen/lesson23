const btnCounter = document.createElement("button");
btnCounter.innerText = "click me";
document.body.append(btnCounter);
const P = document.createElement("p");
document.body.append(P);
let counter = localStorage.getItem("counter")
  ? localStorage.getItem("counter")
  : 0;
P.innerText = counter;

btnCounter.addEventListener("click", () => {
  counter++;
  localStorage.setItem("counter", counter);
  P.innerText = counter;
});