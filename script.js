const sidebar = document.getElementById('sidebar');
const close = document.getElementById('close');

window.addEventListener('load',()=>{
    if (window.innerWidth <= 768) {
        sidebar.classList.add("collapse");
    }
    else {
        sidebar.classList.remove("collapse");
    }
})
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.add("collapse");
    }
    else {
        sidebar.classList.remove("collapse");
    }
});

close.addEventListener('click', () => {
    sidebar.classList.remove("show");
});