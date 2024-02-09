// Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector(".title");
const spoc = document.querySelector(".spoc img");
const description = document.querySelector(".info h3");

// Moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  // Popout
  title.style.transform = "translateZ(150px)";
  spoc.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  spoc.style.transform = "translateZ(0) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
});
