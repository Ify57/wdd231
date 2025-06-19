function toggleMenu() {
    document.getElementById('nav-list').classList.toggle('active');
}


document.getElementById('year').textContent = new Date().getFullYear();



// sspecs page
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
