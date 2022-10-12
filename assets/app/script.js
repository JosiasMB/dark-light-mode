const toggleSwich = document.querySelector('input[type=checkbox]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');



// Dark or light image
function imageMode(color) {
    image1.src = `assets/img/undraw_proud_coder_${color}.svg`;
    image2.src = `assets/img/undraw_feeling_proud_${color}.svg`;
    image3.src = `assets/img/undraw_conceptual_idea_${color}.svg`
}
// Dark function 
function darckMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}
// light function 
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 60%)';
    textBox.style.backgroundColor = 'rgb(0 0 0  / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}
// Switch Theme Dynamically
function switchTheme(Event){
    if (Event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darckMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}
// Event listener
toggleSwich.addEventListener('change', switchTheme);

// Check local storage for a theme 
const currenTheme = localStorage.getItem('theme');

if (currenTheme){
    document.documentElement.setAttribute('data-theme', currenTheme);

    if (currenTheme === 'dark') {
        toggleSwich.checked = true;
        darckMode();
    }

}