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