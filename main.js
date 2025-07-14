// Main JavaScript for Math Magic Kingdom
console.log('Main.js loaded!');

// Handle escape key to close modal
function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        window.closeGame();
    }
}

// Define global functions first
window.openGame = function(gameFile, gameTitle) {
    console.log('Opening game:', gameFile);
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    
    if (!modal || !frame) {
        console.error('Modal or frame not found');
        return;
    }
    
    // Set the game source
    console.log('Setting frame src to:', gameFile);
    frame.src = gameFile;
    
    // Log when iframe loads
    frame.onload = function() {
        console.log('Game loaded successfully:', gameFile);
    };
    
    frame.onerror = function() {
        console.error('Error loading game:', gameFile);
    };
    
    // Show the modal
    modal.style.display = 'block';
    console.log('Modal displayed');
    
    // Add escape key listener
    document.addEventListener('keydown', handleEscapeKey);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

window.closeGame = function() {
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

// Load games when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, loading games...');
    loadGames();
    addFloatingAnimation();
});

// Function to load and display all games
function loadGames() {
    console.log('LoadGames called');
    const gallery = document.getElementById('gamesGallery');
    
    if (!gallery) {
        console.error('Gallery not found!');
        return;
    }
    
    console.log('GAMES:', typeof GAMES, GAMES);
    
    // Clear existing content
    gallery.innerHTML = '';
    
    // Create game cards
    if (typeof GAMES !== 'undefined') {
        GAMES.forEach(game => {
            const gameCard = createGameCard(game);
            gallery.appendChild(gameCard);
        });
    } else {
        console.error('GAMES is not defined!');
    }
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
            <button class="play-button" onclick="window.openGame('${game.file}', '${game.title}')">
                Play Now! 🎮
            </button>
        </div>
    `;
    
    return card;
}



// Close modal when clicking outside
document.getElementById('gameModal')?.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        window.closeGame();
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

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing games...');
    loadGames();
    addFloatingAnimation();
});