let canRotate = true;
let canEvolve = true;
let rotationSpeed = getComputedStyle(document.documentElement).getPropertyValue('--carousel-rotation-speed');
let rotationSpeedNumber = Number(rotationSpeed.substring(0, rotationSpeed.length-1));

function rotate(direction) {
  if(!canRotate) {
    return; 
  }
  canRotate = false;
  setTimeout(() => canRotate = true, rotationSpeedNumber*1000);
  
  let main = document.getElementsByClassName("main")[0];
  let left = document.getElementsByClassName("left")[0];
  let right = document.getElementsByClassName("right")[0];
  
  main.classList.remove("main");
  left.classList.remove("left");
  right.classList.remove("right");
  
  switch(direction) {
    case "left":
      rotateLeft(main, left, right);
      break;
    case "right":
      rotateRight(main, left, right);
      break;
    default:
      rotateLeft(main, left, right);
      break;
  }
}

function rotateRight(main, left, right) {
  main.classList.add("left");
  main.style.zIndex = "10";
  
  right.classList.add("main");
  right.style.zIndex = "100";
  
  left.classList.add("right");
  left.style.zIndex = "0";
}

function rotateLeft(main, left, right) {
  main.classList.add("right");
  main.style.zIndex = "10";
  
  left.classList.add("main");
  left.style.zIndex = "100";
  
  right.classList.add("left");
  right.style.zIndex = "0";
}

function evolve() {
  if(!canEvolve) {
    return;
  }
  let main = document.getElementsByClassName("main")[0];
  let left = document.getElementsByClassName("left")[0];
  let right = document.getElementsByClassName("right")[0];
  let nav = document.getElementsByClassName("nav")[0];
  
  let mainCurrentEvolution = main.getElementsByClassName("current")[0];
  let nextStage = mainCurrentEvolution.nextElementSibling;
  
  let leftCurrentEvolution = left.getElementsByClassName("current")[0];
  let rightCurrentEvolution = right.getElementsByClassName("current")[0];
  
  if(!nextStage) {
    console.log("MAX EVOLUTION!");
    return;
  }

  let circles = [...document.getElementsByClassName("circle")];
  let bubbles = [...document.getElementsByClassName("bubble")];
  
  let otherElements = [leftCurrentEvolution, rightCurrentEvolution, nav];
  otherElements.map(el => el.style.visibility = "hidden");
  document.body.style.background = "black";
  
  const animationTime = 12;
  
  canEvolve = false
  canRotate = false;
  setTimeout(() => {
    canRotate = true;
    canEvolve = true;
    
    circles.map(el => el.style.animation = "");
    bubbles.map(el => el.style.animation = "");
    
    otherElements.map(el => el.style.visibility = "visible");
    document.body.style.background = "white";
    
    mainCurrentEvolution.style.animation = "";
    mainCurrentEvolution.classList.remove("current");

    nextStage.style.animation = "";
    nextStage.classList.add("current");
    
  }, 500 + animationTime*1000);
  
  circles.map((el, i) => el.style.animation = `tunnel ${animationTime}s linear ${i*.1}s`);
  
  bubbles.map((el, i) => el.style.animation = `bubble .4s reverse ${(animationTime-2)+i*.05}s`);
  
  mainCurrentEvolution.style.animation = `evolve-out ${animationTime}s forwards`;
  nextStage.style.animation = `evolve-in ${animationTime}s forwards`;
  
}

//scss à mettre en css

:root {
  --carousel-rotation-speed: .5s;
  --img-size: 250px;
}

html {
  overflow-y: scroll;
  overflow-x: hidden;
}

body {
  transition: background .5s;
}

.grid {
  margin-top: .5rem;
  display: grid;
  grid-template: 1fr / 1fr;
  grid-gap: .5rem;
}

//Buttons
.nav {
  z-index: 500;
  margin: 0 auto;
  
  button {
  padding: 0 1rem 0 1rem;
  background-color: white;
  border: 2px solid black;
  transition: .2s background-color;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  user-select: none;
  
  &:hover {
    background-color: black;
    color: white;
  }
}
  
}

//Pokémon
img.pokemon {
  width: var(--img-size);
  height: var(--img-size);
  display: block;
  margin: auto;
  user-select: none;
}

//Pokémon
.evolve {
  position: relative;
  min-width: var(--img-size);
  min-height: var(--img-size);
  
  .pokemon {
    position: absolute;
    opacity: 1;
    visibility: visible;
    
    &:not(.current) {
      opacity: 0;
      visibility: hidden;
    }
  }
}

//Carousel
.carousel {
  position: relative;
  min-height: var(--img-size);
  margin-top: calc(50vh);
  transform: translateY(-100%);
}
.carousel-item {
  position: absolute;
  transform-origin: left center;
  transition: transform var(--carousel-rotation-speed) ease-in-out,
              filter var(--carousel-rotation-speed) ease-out,
              left var(--carousel-rotation-speed) ease-out;

  &.left {
    left: 0;
    transform: scale(0.8);
    filter: blur(1.5px) grayscale(50%);
  }
  &.right {
    left: 100%;
    transform: scale(0.8) translate(-100%, 0);
    filter: blur(1.5px) grayscale(50%);
  }
  &.main {
    left: 50%;
    transform: scale(1.1) translate(-50%, 0);
    filter: blur(0);
  }
}
//Circle elements
.circle {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: calc(-1 * (var(--img-size)/2)) 0 0 calc(-1 * (var(--img-size)/2));
  width: var(--img-size);
  height: var(--img-size);
  border-radius: 45%;
  opacity: 0;
  
  &.c1 {
    box-shadow: 0 0 8px 65px rgba(128, 206, 255, .5);
  }  
  &.c2 {
    box-shadow: 0 0 8px 65px rgba(117, 202, 255, .65);
  }  
  &.c3 {
    box-shadow: 0 0 8px 65px rgba(87, 190, 255, .8);
  }  
  &.c4 {
    box-shadow: 0 0 8px 65px rgba(117, 202, 255, .65);
  }  
  &.c5 {
    box-shadow: 0 0 8px 65px rgba(128, 206, 255, .5);
  }
}

//Bubbles
.bubble-wrap {
}
.bubble {
  position: absolute;
  left: 47.5%;
  opacity: 0;
  border-radius: 50%;
}

@for $i from 1 through 20 {
  .bubble:nth-child(#{$i}){
     $size: random(30)+px;
     height: $size;
     width: $size;
     margin: calc(-1 * ($size/2)) 0 0 calc(-1 * ($size/2));
     transform: translate(random(300) - 150px, random(100)-200px);
     animation-delay: $i * 0.05s;
     background: hsl(0, 0, 100%);
  }
 
}



//Animations
//---------------------------
//12s = 100% | 1s = 8.3% | 10s = 83.3% (repeating of course)
@keyframes evolve-out {
  0% {
    visibility: visible;
    filter: brightness(100%);
    transform: scale(1);
  }
  16.6%, 33.2%, 41.5%, 49.8%, 53.95%, 58.1%, 62.25%, 66.4%, 68.475%, 70.55%, 72.625%, 74.7%, 76.775%, 78.85%, 80.925% {
    filter: brightness(0%) invert(100%);
    opacity: 1;
    transform: scale(1);
  }
  24.9%, 37.35%, 45.65%, 51.875%, 56.025%, 60.175%, 64.325%, 67.4375%, 69.5125%, 71.5875%, 73.6625%, 75.7375%, 77.8125%, 79.8875%, 81.9625% {
    filter: brightness(0%) invert(100%);
    opacity: 0;
    transform: scale(0.25);
  }
  83.3%, 100% {
    visibility: hidden;
    filter: brightness(0%) invert(100%);
    opacity: 0;
    transform: scale(0.25);    
  }
}
@keyframes evolve-in {
  0%, 16.6%, 33.2%, 41.5%, 49.8%, 53.95%, 58.1%, 62.25%, 66.4%, 68.475%, 70.55%, 72.625%, 74.7%, 76.775%, 78.85%, 80.925% {
    visibility: visible;
    filter: brightness(0%) invert(100%);
    opacity: 0;
    transform: scale(0.25);
  }
  24.9%, 37.35%, 45.65%, 51.875%, 56.025%, 60.175%, 64.325%, 67.4375%, 69.5125%, 71.5875%, 73.6625%, 75.7375%, 77.8125%, 79.8875%, 81.9625%, 96% {
    filter: brightness(0%) invert(100%);
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    filter: brightness(100%);
    transform: scale(1);
    visibility: visible;
  }
}

@keyframes tunnel {
  0%, 16.517%, 33.283%, 41.583%, 49.883%, 58.183%, 66.483%, 83.083% {
    transform: scale(0.6);
    opacity: 0;
  }
  16.6%, 33.366%, 41.666%, 49.966%, 58.266%, 66.566%, 83.166% {
    transform: scale(0.6);
    opacity: 1;
  }
  20.75%, 37.35%, 45.65%, 53.95%, 62.25%, 70.55%, 87.15% {
    transform: scale(3.5);
    opacity: 1;
  }
  24.9%, 41.5%, 49.8%, 58.1%, 66.4%, 74.7%, 91.3% {
    transform: scale(7);
    opacity: 0;
  }
}

@keyframes bubble {
  100% {
    transform: translate(0, 140px);
    opacity: 0;
  }
  90%, 10% {
    opacity: 1;
  }
  5%, 0% {
    opacity: 0;
  }

}


//html à ne pas garder

<div class="grid">
  <div class="nav">
    <button onclick="rotate('left')">&lt;-</button>
    <button onclick="evolve()">Evolve pokémon!</button>
    <button onclick="rotate('right')">-&gt;</button>
  </div>
  <div class="carousel">
    <div class="circle c1"></div>
    <div class="circle c2"></div>
    <div class="circle c3"></div>
    <div class="circle c4"></div>
    <div class="circle c5"></div>
    <div class="bubble-wrap">
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
    </div>
    <div class="carousel-item left">
      <div class="evolve">
        <img class="pokemon stage-1 current" src="https://raw.githubusercontent.com/PokeAPI/sprites/52427d467f3e3b22af3c9cefc807a7452196ccd7/sprites/pokemon/1.png" />
        <img class="pokemon stage-2" src="https://raw.githubusercontent.com/PokeAPI/sprites/52427d467f3e3b22af3c9cefc807a7452196ccd7/sprites/pokemon/2.png" />
        <img class="pokemon stage-3" src="https://raw.githubusercontent.com/PokeAPI/sprites/52427d467f3e3b22af3c9cefc807a7452196ccd7/sprites/pokemon/3.png" />
      </div>

    </div>
    <div class="carousel-item main">
      <div class="evolve">
        <img class="pokemon stage-1 current" src="https://raw.githubusercontent.com/PokeAPI/sprites/52427d467f3e3b22af3c9cefc807a7452196ccd7/sprites/pokemon/4.png" />
        <img class="pokemon stage-2" src="https://raw.githubusercontent.com/PokeAPI/sprites/52427d467f3e3b22af3c9cefc807a7452196ccd7/sprites/pokemon/5.png" />
        <img class="pokemon stage-3" src="https://raw.githubusercontent.com/PokeAPI/sprites/52427d467f3e3b22af3c9cefc807a7452196ccd7/sprites/pokemon/6.png" />
      </div>

    </div>
    <div class="carousel-item right">
      <div class="evolve">
        <img class="pokemon stage-1 current" src="https://raw.githubusercontent.com/PokeAPI/sprites/52427d467f3e3b22af3c9cefc807a7452196ccd7/sprites/pokemon/7.png" />
        <img class="pokemon stage-2" src="https://raw.githubusercontent.com/PokeAPI/sprites/52427d467f3e3b22af3c9cefc807a7452196ccd7/sprites/pokemon/8.png" />
        <img class="pokemon stage-3" src="https://raw.githubusercontent.com/PokeAPI/sprites/52427d467f3e3b22af3c9cefc807a7452196ccd7/sprites/pokemon/9.png" />
      </div>

    </div>
  </div>
</div>