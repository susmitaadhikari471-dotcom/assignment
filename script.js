// Part 1: Time-based Greeting (Week 10)
let userName = prompt("Please enter your name:", "Susmita");
let currentHour = new Date().getHours();
let greeting = "";

if (currentHour < 12) {
    greeting = "Good morning";
} else if (currentHour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

console.log(`${greeting}, ${userName}!`);


// Part 2: Age and Days Lived Verification (Week 10)
let birthYear = prompt("Please enter your birth year:", "2006");
let age = 2026 - birthYear;
let daysLived = age * 365;

console.log(`You have lived for approximately ${daysLived} days!`);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// Part 3: Dark Mode Toggle Event (Week 11 Addition)
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    
    // Change button text dynamically based on theme mode
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});


// Part 4: Array and For Loop Hobby List Rendering (Week 12 Lab Assignment)
const hobbies = ['Photography', 'Trekking', 'Piano', 'Cooking'];
const listContainer = document.getElementById('hobby-list');
const ul = document.createElement('ul');

for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement('li');
    li.textContent = hobbies[i];
    ul.appendChild(li);
}

listContainer.appendChild(ul);


// Part 5: Two-Array Parallel Sync Gallery (Week 13 Addition)
const galleryImages = [
    "snapchat-1099579794.jpg",
    "snapchat-1099579794.jpg",
    "snapchat-1099579794.jpg"
];

const galleryDescriptions = [
    "Photography — Capturing everyday moments and travels.",
    "Trekking & Hiking — Exploring trails and new places.",
    "Coding & Web Dev — Building responsive pages in VS Code."
];

let currentIndex = 0;
const galleryImg = document.getElementById("gallery-img");
const galleryDesc = document.getElementById("gallery-desc");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateGallery() {
    if (galleryImg && galleryDesc) {
        galleryImg.src = galleryImages[currentIndex];
        galleryDesc.textContent = galleryDescriptions[currentIndex];
    }
}

if (nextBtn) {
    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateGallery();
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGallery();
    });
}

updateGallery();
