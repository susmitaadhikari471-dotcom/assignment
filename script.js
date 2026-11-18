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
