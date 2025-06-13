// const API_KEY = '69fc43aded5234537ff036a9f4fc41cd'; // Replace with your OpenWeatherMap API key

// const city = 'london'
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// try {
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error('City not found');
//     }

//     const data = await response.json();
//     const weatherHTML = `
//         <h2>Weather in ${data.name}</h2>
//         <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
//     `;
//     document.getElementById('break').innerHTML = weatherHTML;
//     alert('weatherHTML');
// } catch (error) {
//     document.getElementById('break').innerHTML = `<p>Error: ${error.message}</p>`;
// }

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


btn_bronze.addEventListener('click',() => bronze.showModal());
btn_silver.addEventListener('click',() => silver.showModal());
btn_gold.addEventListener('click',() => gold.showModal());
btn_non.addEventListener('click',() => non.showModal());

cancel1.addEventListener('click', () => {gold.close();})
cancel2.addEventListener('click', () => {silver.close();})
cancel3.addEventListener('click', () => {bronze.close();})
cancel4.addEventListener('click', () => {non.close();})





// function gold(){
//     alert('gold model content')
// }M

// function silver(){
//     alert('silver model content')
// }

// function bronze(){
//     alert('bronze model content')
// }

// function non(){
//     alert('Non Profit model content')
// // }
// const date = new Date();
// // alert(date.get);
// const infor = document.getElementById('infor')
// let needed = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+',  '+'  '+date.toLocaleTimeString('en-US', { hour12: true });
// infor.innerHTML = needed;
// const needed = date.

