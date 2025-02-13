// Image changer by click. 
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo.png") {
    myImage.setAttribute("src", "images/nologo.png");
  } else {
    myImage.setAttribute("src", "images/logo.png");
  }
});

//Personalized welcome message.
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `I smell, you are ${myName}`;   
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `I smell you, you are ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});