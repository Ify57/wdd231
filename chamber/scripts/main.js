function showsidebar(){
    const sidebar = document.getElementById('ham');
    sidebar.style.display = 'block';
    const hideham = document.getElementsByClassName('fa-bars');
    // hideham[0].style.display = 'none';
}
function closesidebar(){
    const hide = document.getElementById('ham');
    hide.style.display='none';
}

const api_key = '69fc43aded5234537ff036a9f4fc41cd';
const location = 'Onitsha';