const bigHeart = document.getElementById('bigHeart');

function createSmallHearts() {
    for (let i = 0; i < 50; i++) {
        const smallHeart = document.createElement('div');
        smallHeart.classList.add('small-heart');
        
        // Random position within the big heart
        const x = Math.random() * 150; // 150 to fit within the big heart
        const y = Math.random() * 150; // 150 to fit within the big heart
        smallHeart.style.left = `${x}px`;
        smallHeart.style.top = `${y}px`;
        
        bigHeart.appendChild(smallHeart);
    }
}

createSmallHearts();