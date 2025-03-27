document.addEventListener('DOMContentLoaded', function() {
    const petButtons = document.querySelectorAll('.btn-full');
    const petAllBtn = document.querySelector('#btn-select-all');
    const unpetAllBtn = document.querySelector('#btn-unselect-all');
    const lastBtn = document.querySelector('#btn-select-last');
    const firstBtn = document.querySelector('#btn-select-first');
    const nextBtn = document.querySelector('#btn-select-next');
    const prevBtn = document.querySelector('#btn-select-previous');
    const siteLogo = document.querySelector('.banner-content');
    const cards = document.querySelectorAll('.card');
    
    let currentHighlightedIndex = 0;
    
    highlightCard(currentHighlightedIndex);
    
    petButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-regular');
            icon.classList.toggle('fa-solid');
        });
    });
    
});