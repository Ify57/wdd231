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
function gold(){
    alert('gold model content')
}

function silver(){
    alert('silver model content')
}

function bronze(){
    alert('bronze model content')
}

function non(){
    alert('Non Profit model content')
}