const correctPassword = "0601";
let heartInterval; 

function checkPassword() {
    
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("errorMessage");
  if (input === correctPassword) {
    document.getElementById("passwordScreen").classList.remove("active");
    document.getElementById("menuScreen").classList.add("active");
    document.title = "hola amorcito";
    error.textContent = "";
    stopCustomRain();
    startInfiniteHearts(); 
  } else {
    error.textContent = "Contraseña incorrecta.";
  }
}

function showLetter() {
  stopHearts();
  stopCustomRain();

  document.getElementById("menuScreen").classList.remove("active");
  document.getElementById("letterScreen").classList.add("active");
  document.title = "Te quiero mucho";
}

function showLetter2() {
  stopHearts();
  stopCustomRain();
  document.getElementById("menuScreen").classList.remove("active");
  document.getElementById("letterScreen2").classList.add("active");
  document.title = "AHH TE ADORO MUCHO";
}

function showLetter3() {
  stopHearts();
  document.getElementById("menuScreen").classList.remove("active");
  document.getElementById("letterScreen3").classList.add("active");
  startCustomRain();
  document.title = "MUAK MUAK MUAK";
}

function goBack() {
  document.getElementById("letterScreen").classList.remove("active");
  document.getElementById("menuScreen").classList.add("active");
  startInfiniteHearts();
  stopCustomRain();
  document.title = "Eres muy especial, ¿sabes?";
}

function goBack2() {
  document.getElementById("letterScreen2").classList.remove("active");
  document.getElementById("menuScreen").classList.add("active");
  startInfiniteHearts();
  stopCustomRain();
  document.title = "Tonto tonto";
}

function goBack3() {
  stopCustomRain();
  document.getElementById("letterScreen3").classList.remove("active");
  document.getElementById("menuScreen").classList.add("active");
  startInfiniteHearts();
  document.title = "<3";
  
}

// corazones
function startInfiniteHearts() {
  if (heartInterval) clearInterval(heartInterval);

  heartInterval = setInterval(() => {
    const heart = document.createElement("img");
    heart.src = "img/prueba.png"; 
    heart.classList.add("heart");
    heart.style.left = Math.random() * 90 + "vw";
    heart.style.width = (25 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 450); 
}

function stopHearts() {
  clearInterval(heartInterval);
  document.querySelectorAll(".heart").forEach(h => h.remove());
}

// carruseles
let currentSlide1 = 0;
let currentSlide2 = 0;

function moveSlide1(direction) {
  const track = document.getElementById("carouselTrack1");
  const total = track.children.length;
  currentSlide1 = (currentSlide1 + direction + total) % total;
  track.style.transform = `translateX(-${currentSlide1 * 100}%)`;
}

function moveSlide2(direction) {
  const track = document.getElementById("carouselTrack2");
  const total = track.children.length;
  currentSlide2 = (currentSlide2 + direction + total) % total;
  track.style.transform = `translateX(-${currentSlide2 * 100}%)`;
}

// corazones 2
let customRainInterval; 

function startCustomRain() {
  if (customRainInterval) clearInterval(customRainInterval);

  customRainInterval = setInterval(() => {
    const element = document.createElement("img");
    
    element.src = "img/fiesta.png"; 
    
    element.classList.add("custom-rain-item"); // Usamos una clase nueva
    element.style.left = Math.random() * 90 + "vw";
    element.style.width = (30 + Math.random() * 20) + "px"; // Un poco más grandes si quieres
    element.style.animationDuration = (3 + Math.random() * 3) + "s"; // Velocidad distinta
    
    document.body.appendChild(element);
    
    setTimeout(() => element.remove(), 6000);
  }, 500); 
}

function stopCustomRain() {
  clearInterval(customRainInterval);
  document.querySelectorAll(".custom-rain-item").forEach(el => el.remove());
}