

// Dictionary of Allah's names with their meanings
const allahNames = {
    "Ar-Rahman": "The Most Merciful",
    "Ar-Raheem": "The Most Compassionate",
    "Al-Malik": "The King",
    "Al-Quddus": "The Most Holy",
    "As-Salam": "The Source of Peace",
    "Al-Mu'min": "The Inspirer of Faith",
    "Al-Muhaymin": "The Guardian",
    "Al-Aziz": "The Victorious",
    "Al-Jabbar": "The Compeller",
    "Al-Mutakabbir": "The Supreme",
    "Al-Khaliq": "The Creator",
    "Al-Bari": "The Originator",
    "Al-Musawwir": "The Fashioner",
    "Al-Ghaffar": "The Forgiving",
    "Al-Qahhar": "The Subduer",
    "Al-Wahhab": "The Giver of Gifts",
    "Ar-Razzaq": "The Provider",
    "Al-Fattah": "The Opener",
    "Al-'Aleem": "The All-Knowing",
    "Al-Qabid": "The Constrictor",
    "Al-Baasit": "The Extender",
    "Al-Khafidh": "The Reducer",
    "Ar-Rafi": "The Exalter",
    "Al-Mu'izz": "The Honourer/ Bestower",
    "Al-Mudhil": "The Humiliator",
    "As-Samee'": "The All-Hearing",
    "Al-Basir": "The All-Seeing",
    "Al-Hakam": "The Judge",
    "Al-`Adl": "The Just",
    "Al-Latif": "The Subtle One",
    "Al-Khabeer": "The All-Aware",
    "Al-Halim": "The Most Forbearing",
    "Al-Atheem": "The Magnificent",
    "Al-Ghafur": "The Exceedingly Forgiving",
    "Ash-Shakur": "The Most Appreciative",
    "Al-'Alee": "The Exalted",
    "Al-Kabeer": "The Greatest",
    "Al-Hafidh": "The Preserver",
    "Al-Muqeet": "The Sustainer",
    "Al-Haseeb": "The Reckoner",
    "Al-Jaleel": "The Majestic",
    "Al-Kareem": "The Most Generous",
    "Ar-Raqeeb": "The Watchful",
    "Al-Mujeeb": "The Responsive One",
    "Al-Wasi": "The All-Encompassing",
    "Al-Hakim": "The All Wise",
    "Al-Wadud": "The Loving One",
    "Al-Majeed": "The Majestic One",
    "Al-Ba'ith": "The Resurrector",
    "Ash-Shaheed": "The All Witnessing",
    "Al-Haqq": "The Truth",
    "Al-Wakil": "The Trustee",
    "Al-Qawiyy": "The Possessor of All Strength",
    "Al-Maeen": "The Firm",
    "Al-Waliyy": "The Protecting Associate",
    "Al-Hameed": "The Praiseworthy",
    "Al-Muhsee": "The All-Enumerating",
    "Al-Mubdi'": "The Originator",
    "Al-Mu'id": "The Restorer",
    "Al-Muhyee": "The Giver of Life",
    "Al-Mumeet": "The Taker of Life",
    "Al-Hayy": "The Ever Living One",
    "Al-Qayyum": "The Self-Existing One",
    "Al-Wajid": "The Finder",
    "Al-Maajid": "The Glorious",
    "Al-Waahid": "The Unique, The Single",
    "Al-Ahad": "The Unique",
    "As-Samad": "The Satisfier of All Needs",
    "Al-Qadir": "The All Powerful",
    "Al-Muqtadir": "The Omnipotent",
    "Al-Muqaddim": "The Expediter",
    "Al-Mu'akhkhir": "The Delayer",
    "Al-Awwal": "The First",
    "Al-Akhir": "The Last",
    "Az-Dhaahir": "The Manifest One",
    "Al-Batin": "The Hidden One",
    "Al-Waali": "The Protecting Friend",
    "Al-Muta'ali": "The Supreme One",
    "Al-Barr": "The Source of Goodness",
    "At-Tawwab": "The Ever-Pardoning",
    "Al-Muntaqim": "The Avenger",
    "Al-'Afuww": "The Forgiver",
    "Ar-Ra'uf": "The Most Kind",
    "Malik-al-Mulk": "Master of the Kingdom",
    "Dhu-al-Jalal wa-al-Ikram": "Lord of Majesty and Generosity",
    "Al-Muqsit": "The Equitable One",
    "Al-Jaami'": "The Gatherer",
    "Al-Ghaniyy": "The Self-Sufficient, The Wealthy",
    "Al-Mughni": "The Enricher",
    "Al-Mani'": "The Withholder",
    "Ad-Darr": "The Distresser",
    "An-Nafi'": "The Benefactor",
    "An-Nur": "The Light",
    "Al-Hadi": "The Guide",
    "Al-Badi": "The Incomparable Originator",
    "Al-Baqi": "The Everlasting One",
    "Al-Waarith": "The Inheritor of All",
    "Ar-Rashid": "The Righteous Teacher",
    "As-Sabur": "The Patient One",
};



let usedPairs = new Set();
let currentPairs = [];
let flippedCards = [];
let matches = 0;

function generateGamePairs() {
    // Filter out already used pairs
    const availablePairs = Object.entries(allahNames).filter(pair => 
        !usedPairs.has(pair[0]));
    
    // Randomly select 8 pairs
    const selectedPairs = [];
    for(let i = 0; i < 6 && i < availablePairs.length; i++) {
        const randomIndex = Math.floor(Math.random() * availablePairs.length);
        selectedPairs.push(availablePairs.splice(randomIndex, 1)[0]);
    }
    
    // Create array with both names and meanings
    currentPairs = [];
    selectedPairs.forEach(([name, meaning]) => {
        currentPairs.push(
            { text: name, type: 'name', pair: name },
            { text: meaning, type: 'meaning', pair: name }
        );
    });
    
    // Shuffle the array
    return currentPairs.sort(() => Math.random() - 0.5);
}

function createCard(cardData, index) {
    return `
        <div class="col-3">
            <div class="flip-card" data-index="${index}" data-pair="${cardData.pair}">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img class="front-face" src="image/logo.jpg" alt="Card">
                    </div>
                    <div class="flip-card-back">
                        <h3>${cardData.text}</h3>
                    </div>
                </div>
            </div>
        </div>
    `;
}
function updateProgressDisplay() {
    const progressElement = document.getElementById('progress-display');
    progressElement.innerHTML = `
        <span>Total Progress: ${totalMatches}/${TOTAL_NAMES}</span>
    `;
}

function initializeGame() {
    const gameBoard = document.querySelector('.game-board');
    const cards = generateGamePairs();
    
    // Create HTML for all cards
    gameBoard.innerHTML = `
        <div class="row">
            ${cards.map((card, index) => createCard(card, index)).join('')}
        </div>
    `;
    
    // Add click listeners
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', handleCardClick);
    });

    // Initialize progress display
    updateProgressDisplay(); // Add this line to show initial progress
}
// ... existing code ...

// Add these variables at the top with other global variables
let totalMatches = 0;
const TOTAL_NAMES = Object.keys(allahNames).length; // Will be 99

function handleCardClick(event) {
    const card = event.currentTarget;
    
    if (card.classList.contains('flipped') || flippedCards.length >= 2) return;
    
    card.classList.add('flipped');
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        const pair1 = flippedCards[0].dataset.pair;
        const pair2 = flippedCards[1].dataset.pair;
        
        if (pair1 === pair2) {
            matches++;
            totalMatches++; // Increment total matches
            document.getElementById('matches').textContent = totalMatches; 
            updateProgressDisplay()// Show total matches
            usedPairs.add(pair1);
            flippedCards = [];
            
            if (matches === 6) {
                setTimeout(() => {
                    if (totalMatches < TOTAL_NAMES) {
                        // Start new round but keep totalMatches
                        matches = 0; // Reset round matches
                        initializeGame();
                    } else {
                        alert('Congratulations! You have matched all 99 names of Allah!');
                        // Reset everything for a new game
                        totalMatches = 0;
                        matches = 0;
                        usedPairs.clear();
                        document.getElementById('matches').textContent = '0';
                        initializeGame();
                    }
                }, 1000);
            }
        } else {
            setTimeout(() => {
                flippedCards.forEach(card => card.classList.remove('flipped'));
                flippedCards = [];
            }, 1000);
        }
    }
}


// Initialize game when page loads
document.addEventListener('DOMContentLoaded', initializeGame);
