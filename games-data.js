// Games Database
// To add a new game, simply add a new object to this array
const GAMES = [
    {
        id: 'subtraction-missing',
        title: 'Subtraction Magic',
        icon: '🧮',
        difficulty: 'Easy-Medium',
        ageRange: '7-10 years',
        description: 'Fill in the missing numbers to complete subtraction problems. Perfect for practicing mental math!',
        skills: ['Subtraction', 'Problem Solving', 'Number Sense'],
        file: 'games/subtraction-game.html',
        isNew: false
    },
    {
        id: 'roman-numerals',
        title: 'Roman Empire Numbers',
        icon: '🏛️',
        difficulty: 'Easy-Hard',
        ageRange: '8-12 years',
        description: 'Learn to convert numbers into Roman numerals like the ancient Romans! Features three difficulty levels.',
        skills: ['Roman Numerals', 'Number Systems', 'Pattern Recognition'],
        file: 'games/roman-numerals-game.html',
        isNew: false
    },
    {
        id: 'addition-carry',
        title: 'Addition Master',
        icon: '➕',
        difficulty: 'Medium-Hard',
        ageRange: '7-9 years',
        description: 'Master addition of three 5-6 digit numbers with carry-over tracking. Perfect for advanced addition practice!',
        skills: ['Addition', 'Carry-over', 'Mental Math', 'Place Value'],
        file: 'games/addition-carry-game.html',
        isNew: true
    }
    // Add more games here in the future
    // Example:
    // {
    //     id: 'multiplication-tables',
    //     title: 'Times Table Adventure',
    //     icon: '✖️',
    //     difficulty: 'Medium',
    //     ageRange: '8-12 years',
    //     description: 'Master multiplication tables through fun challenges!',
    //     skills: ['Multiplication', 'Memory', 'Speed Math'],
    //     file: 'games/multiplication-game.html',
    //     isNew: false
    // }
];