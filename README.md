# Math Magic Kingdom 🏰

A colorful and engaging math games website for kids aged 7-12. Built with vanilla HTML, CSS, and JavaScript for easy deployment and extension.

## 🎮 Current Games

1. **Subtraction Magic** - Fill in missing numbers in subtraction problems (5-6 digit numbers)

## 🚀 Getting Started

1. Open `index.html` in any modern web browser
2. Click on any game card to start playing
3. Games open in a modal window for focused gameplay

## 📁 Project Structure

```
fill_missing_number/
├── index.html          # Main website homepage
├── styles.css          # Website styling
├── main.js            # Website functionality
├── games-data.js      # Games database
├── games/             # Individual game files
│   └── subtraction-game.html
└── README.md          # This file
```

## 🎨 Adding New Games

To add a new game to the website:

1. Create your game as a standalone HTML file
2. Place it in the `games/` folder
3. Add an entry to the `GAMES` array in `games-data.js`:

```javascript
{
    id: 'your-game-id',
    title: 'Your Game Title',
    icon: '🎯',
    difficulty: 'Easy/Medium/Hard',
    ageRange: '8-10 years',
    description: 'Brief description of your game',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    file: 'games/your-game.html',
    isNew: true  // Set to true to show "NEW!" badge
}
```

## 🌟 Features

- Responsive design works on all devices
- Beautiful animations and colorful UI
- Modal system for distraction-free gameplay
- Easy to extend with new games
- No external dependencies - pure HTML/CSS/JS

## 🛠️ Customization

- Modify `styles.css` to change colors, fonts, or layout
- Edit `index.html` to update site content
- Adjust animations in `main.js`

## 📱 Browser Support

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## 🎯 Future Ideas

- Add more math games (multiplication, division, fractions)
- Implement user profiles and score tracking
- Add sound effects and background music
- Create difficulty levels within games
- Add achievements and rewards system