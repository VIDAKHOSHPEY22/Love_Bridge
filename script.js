document.addEventListener('DOMContentLoaded', () => {
    console.log('Love site is ready to spread joy!');

    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    yesButton.addEventListener('click', () => {
        const loveVideo = document.getElementById('loveVideo');
        loveVideo.play();
        alert('Yay! I love you too! 💖');
    });

    noButton.addEventListener('mouseover', () => {
        const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    });
    
    const notes = document.querySelectorAll('.note');
    notes.forEach(note => {
        note.addEventListener('click', () => {
            alert(note.textContent);
        });
    });
});