function clickCounter(){
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
}

clickCounter()

function calculator() {
  const calc = (a, b = 5, callback) => {
    return callback(a, b);
  };

  const add = (a, b) => a + b;
  const subtr = (a, b) => a - b;
  const muptip = (a, b) => a * b;
  const div = (a, b) => a / b;
  const mod = (a, b) => a % b;

  console.log(calc(4, 2, div));
}

calculator()