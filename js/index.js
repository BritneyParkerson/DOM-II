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
  introH2.style.color = "#84DE02";
  introH2.style.backgroundColor = "#000000";
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

// let contentP = document.querySelector(".content-section p");
// contentP.addEventListener('wheel', () => {
//   contentP.style.color = "#84DE02";
//   contentP.style.backgroundColor = "#000000";
// })

// Event 6: scroll

// Event 7: drag / drop

// Event 8: keydown (keydown/keypress/keyup)

// Event 9: 

// Event 10: 

// Possible Extra Events
//mouseover
//mouseout
//mousemove 
// load
// focus
// select