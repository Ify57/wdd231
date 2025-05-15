const year = new Date();
document.getElementById('currentyear').innerHTML = year.getFullYear();

const month = year.getMonth();
const day = year.getDay();
const full_year = year.getFullYear();

const hour = year.getHours();
const min = year.getHours();
const second = year.getHours();

document.getElementById('lastModified').innerHTML=day + "/" + month + "/" + full_year + "  " + hour + ":" +min + ":" + second;