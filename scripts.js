document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('#btn-select-previous');
    const siteLogo = document.querySelector('.banner-content');
    const cards = document.querySelectorAll('.card');
    
    let currentHighlightedIndex = 0;
    
    highlightCard(currentHighlightedIndex);
    const petButtons = document.querySelectorAll('.btn-full');
    petButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-regular');
            icon.classList.toggle('fa-solid');
        });
    });
    
    const petAllBtn = document.querySelector('#btn-select-all');
    petAllBtn.addEventListener('click', function() {
        petButtons.forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        });
    });
    
    const unpetAllBtn = document.querySelector('#btn-unselect-all');
    unpetAllBtn.addEventListener('click', function() {
        petButtons.forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        });
    });
    
    const lastBtn = document.querySelector('#btn-select-last');
    lastBtn.addEventListener('click', function() {
        currentHighlightedIndex = cards.length - 1;
        highlightCard(currentHighlightedIndex);
    });
    
    const firstBtn = document.querySelector('#btn-select-first');
    firstBtn.addEventListener('click', function() {
        currentHighlightedIndex = 0;
        highlightCard(currentHighlightedIndex);
    });
    
    const nextBtn = document.querySelector('#btn-select-next');
    nextBtn.addEventListener('click', function() {
        currentHighlightedIndex = (currentHighlightedIndex + 1) % cards.length;
        highlightCard(currentHighlightedIndex);
    });

});