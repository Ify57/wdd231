
const greeting = document.getElementById('greeting');
const lastVisit = localStorage.getItem('lastVisit');
const now = new Date();

if (!lastVisit) {
    // First-time visit
    greeting.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const previousVisit = new Date(lastVisit);
    const timeDiff = now - previousVisit; // in milliseconds
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert ms to whole days

    if (daysDiff < 1) {
        greeting.textContent = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
        greeting.textContent = "You last visited 1 day ago.";
    } else {
        greeting.textContent = `You last visited ${daysDiff} days ago.`;
    }
}

// Save the current visit time for next time
localStorage.setItem('lastVisit', now);


function showsidebar() {
    const sidebar = document.getElementById('ham');
    sidebar.style.display = 'block';
    const hideham = document.getElementsByClassName('fa-bars');
    // hideham[0].style.display = 'none';
}
function closesidebar() {
    const hide = document.getElementById('ham');
    hide.style.display = 'none';
}


const bronze = document.getElementById('dialog_bronze');
const btn_bronze = document.getElementById('btn_bronze');

const silver = document.getElementById('dialog_silver');
const btn_silver = document.getElementById('silver');


const gold = document.getElementById('dialog_gold');
const btn_gold = document.getElementById('gold');

const non = document.getElementById('dialog_non');
const btn_non = document.getElementById('non');

const cancel1 = document.getElementById('cancel1');
const cancel2 = document.getElementById('cancel2');
const cancel3 = document.getElementById('cancel3');
const cancel4 = document.getElementById('cancel4');


btn_bronze.addEventListener('click', () => bronze.showModal());
btn_silver.addEventListener('click', () => silver.showModal());
btn_gold.addEventListener('click', () => gold.showModal());
btn_non.addEventListener('click', () => non.showModal());

cancel1.addEventListener('click', () => { gold.close(); })
cancel2.addEventListener('click', () => { silver.close(); })
cancel3.addEventListener('click', () => { bronze.close(); })
cancel4.addEventListener('click', () => { non.close(); })


