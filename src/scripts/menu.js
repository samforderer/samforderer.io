document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
    document.querySelector('h3').classList.toggle('disappear');
    document.querySelector('.middle').classList.toggle('shift-left');
});
