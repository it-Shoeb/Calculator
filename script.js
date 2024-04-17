const toggleContainer = document.getElementById("toggle-container");
const toggle = document.getElementById("toggle");

const btns = document.querySelectorAll(".btn");

let toggleStatus = true;

const container = document.querySelector(".container");
const calculator = document.querySelector(".calculator");

toggleContainer.addEventListener("click", () => {
  if (toggleStatus) {
    toggleStatus = false;
    toggle.style.left = 50 + "%";
    //light mode
    // document.body.style.backgroundColor = 'rgb(63, 96, 126);'
    container.style.backgroundColor = "white";
    btns.forEach((btn) => {
      btn.style.backgroundColor = "white";
      btn.style.color = "#202d44";
      btn.style.boxShadow = "0.5px 0.5px 2px #000";
    });

    toggle.style.background = "white"
    toggle.style.borderColor = "#202d44"
    toggleContainer.style.background = "#202d44"
    
  } else {
    toggle.style.left = 0 + "%";
    toggleStatus = true;
    
    //dark mode
    // document.body.style.backgroundColor = 'aliceblue'
    container.style.backgroundColor = "#161f2f";
    btns.forEach((btn) => {
      btn.style.backgroundColor = "#202d44";
      btn.style.color = "white";

      toggle.style.background = "#202d44"
      toggle.style.borderColor = "white"
      toggleContainer.style.background = "white"
    });
  }
});

const sum = document.querySelector(".sum");
const addends = document.querySelector(".addends");
let store = "";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    
    if (btn.textContent != "Equal" && btn.textContent != "Clear") {
      store = store + btn.textContent;
      console.log(store);
      addends.textContent = store;
    } 

    sum.textContent = eval(store);

    if (btn.textContent == "Equal") {
      // console.log(eval(store));
      sum.textContent = eval(store);
    }

    if (btn.textContent == "Clear") {
      sum.textContent = "";
      addends.textContent = "";
      store = "";
    }
  });
});

window.addEventListener("keydown", (e) => {
  // console.log(e);
  btns.forEach((btn) => {
    if (btn.textContent == e.key) {
      store = store + btn.textContent;
      // console.log("keypress", store);
      addends.textContent = store;
    }

    if (e.key == "Enter") {
      sum.textContent = eval(store);
    }

    if (e.key == "Delete" || e.key == "Backspace") {
      store = "";
      addends.textContent = "";
      sum.textContent = "";
    }

    // else if(e.key == 'Enter'){

    // }
  });
});
