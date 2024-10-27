function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });

    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});
