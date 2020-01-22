// Your code goes here

//Event 1: mousedown
//Event 2: mouseup
//Event 3: mousemove
document.body.style.backgroundColor = "#E77200"

let bodyBG = document
bodyBG.addEventListener('mousedown', () => {event.target.style.backgroundColor = '#469496'})
bodyBG.addEventListener('mouseup', () => {event.target.style.backgroundColor = '#733380'})
bodyBG.addEventListener('mousemove', () => {event.target.style.backgroundColor = '#E77200'})

// Event 4: mouseenter
// Event 5: mouseleave

let busIMG = document.querySelector(".intro img");

busIMG.addEventListener('mouseenter', () => {
  busIMG.style.transform = "rotate(540deg)";
  busIMG.style.transition = "all 2s";
})
busIMG.addEventListener('mouseleave', () => {
  busIMG.style.transform = "rotate(0deg)";
  busIMG.style.transition = "all 2s";
})

// Event 6: click

let introP = document.querySelector(".intro p");

introP.addEventListener('click', () => {
  introP.style.color = "#000000";
  introP.style.backgroundColor = "#84DE02";
})

// Event 7: dblclick
let introH2 = document.querySelector(".intro h2");
introH2.addEventListener('dblclick', () => {
  introH2.style.transform = "rotate(360deg)";
  introH2.style.transition = "all 1s";
})


// Event 8: mouseout
let mapIMG = document.querySelector(".img-content img");

mapIMG.addEventListener('mouseout', () => {
  mapIMG.style.transform = "rotate(0deg)";
  mapIMG.style.transition = "all 1s";
})
mapIMG.addEventListener('mouseenter', () => {
 mapIMG.style.transform = "rotate(140deg)";
  mapIMG.style.transition = "all 1s";
})



// Event 9: dragstart
// Event 10: dragend
let boatIMG = document.querySelector(".img-content img.img-fluid.rounded");

boatIMG.addEventListener('dragstart', () => {
  boatIMG.style.transform = "scale(2)";
  boatIMG.style.transition = "all 1s";
})
boatIMG.addEventListener('dragend', () => {
 boatIMG.style.transform = "scale(1)";
  boatIMG.style.transition = "all 1s";
})

//Event 11: drag

let gondalaIMG = document.querySelector(".content-destination img");

gondalaIMG.addEventListener('drag', () => {
  gondalaIMG.style.transform = "scale(.5)";
  gondalaIMG.style.transition = "all 1s";
})
gondalaIMG.addEventListener('dragend', () => {
  gondalaIMG.style.transform = "scale(1)";
  gondalaIMG.style.transition = "all 1s";
})

//Stop Propagation

let buttons = document.querySelector(".btn");
buttons.addEventListener('click', (event) => {
  buttons.style.backgroundColor="#FEFEFE";
  event.stopPropagation();
  console.log("start")})


  //Prevent Default

  let stopLink = document.querySelector(".main-navigatio");
  stopLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('stopped!');
  });