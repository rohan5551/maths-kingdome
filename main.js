// Main JavaScript for Math Magic Kingdom

// Load games when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadGames();
    addFloatingAnimation();
});

// Function to load and display all games
function loadGames() {
    const gallery = document.getElementById('gamesGallery');
    
    if (!gallery) return;
    
    // Clear existing content
    gallery.innerHTML = '';
    
    // Create game cards
    GAMES.forEach(game => {
        const gameCard = createGameCard(game);
        gallery.appendChild(gameCard);
    });
}

// Function to create a game card element
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card' + (game.isNew ? ' new-game' : '');
    
    card.innerHTML = `
        ${game.isNew ? '<div class="game-badge">NEW!</div>' : ''}
        <div class="game-card-header">
            <div class="game-icon">${game.icon}</div>
            <h3 class="game-title">${game.title}</h3>
            <p class="game-difficulty">Difficulty: ${game.difficulty}</p>
        </div>
        <div class="game-card-body">
            <p class="game-description">${game.description}</p>
            <p class="game-age">Age: ${game.ageRange}</p>
            <div class="game-skills">
                ${game.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            <button class="play-button" onclick="openGame('${game.file}', '${game.title}')">
                Play Now! 🎮
            </button>
        </div>
    `;
    
    return card;
}

// Function to open a game in modal
function openGame(gameFile, gameTitle) {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    
    if (!modal || !frame) return;
    
    // Set the game source
    frame.src = gameFile;
    
    // Show the modal
    modal.style.display = 'block';
    
    // Add escape key listener
    document.addEventListener('keydown', handleEscapeKey);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close the game modal
function closeGame() {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    
    if (!modal || !frame) return;
    
    // Hide the modal
    modal.style.display = 'none';
    
    // Clear the frame source
    frame.src = '';
    
    // Remove escape key listener
    document.removeEventListener('keydown', handleEscapeKey);
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Handle escape key to close modal
function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        closeGame();
    }
}

// Close modal when clicking outside
document.getElementById('gameModal')?.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closeGame();
    }
});

// Add floating animation to header shapes
function addFloatingAnimation() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        // Randomize animation duration
        const duration = 10 + Math.random() * 10;
        shape.style.animationDuration = `${duration}s`;
        
        // Randomize starting position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        shape.style.left = `${startX}%`;
        shape.style.top = `${startY}%`;
    });
}

// Smooth scroll for anchor links (if added in future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to header on scroll
let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.main-header');
    
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Console welcome message
console.log('%c🏰 Welcome to Math Magic Kingdom! 🏰', 
    'font-size: 20px; color: #764ba2; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
console.log('%cWhere learning math is an adventure!', 
    'font-size: 14px; color: #667eea; font-style: italic;');