

// Dictionary of Allah's names with their meanings
// const allahNames = {
//     "Ar-Rahman": "The Most Merciful",
//     "Ar-Raheem": "The Most Compassionate",
//     "Al-Malik": "The King",
//     "Al-Quddus": "The Most Holy",
//     "As-Salam": "The Source of Peace",
//     "Al-Mu'min": "The Inspirer of Faith",
//     "Al-Muhaymin": "The Guardian",
//     "Al-Aziz": "The Victorious",
//     "Al-Jabbar": "The Compeller",
//     "Al-Mutakabbir": "The Supreme",
//     "Al-Khaliq": "The Creator",
//     "Al-Bari": "The Originator",
//     "Al-Musawwir": "The Fashioner",
//     "Al-Ghaffar": "The Forgiving",
//     "Al-Qahhar": "The Subduer",
//     "Al-Wahhab": "The Giver of Gifts",
//     "Ar-Razzaq": "The Provider",
//     "Al-Fattah": "The Opener",
//     "Al-'Aleem": "The All-Knowing",
//     "Al-Qabid": "The Constrictor",
//     "Al-Baasit": "The Extender",
//     "Al-Khafidh": "The Reducer",
//     "Ar-Rafi": "The Exalter",
//     "Al-Mu'izz": "The Honourer/ Bestower",
//     "Al-Mudhil": "The Humiliator",
//     "As-Samee'": "The All-Hearing",
//     "Al-Basir": "The All-Seeing",
//     "Al-Hakam": "The Judge",
//     "Al-`Adl": "The Just",
//     "Al-Latif": "The Subtle One",
//     "Al-Khabeer": "The All-Aware",
//     "Al-Halim": "The Most Forbearing",
//     "Al-Atheem": "The Magnificent",
//     "Al-Ghafur": "The Exceedingly Forgiving",
//     "Ash-Shakur": "The Most Appreciative",
//     "Al-'Alee": "The Exalted",
//     "Al-Kabeer": "The Greatest",
//     "Al-Hafidh": "The Preserver",
//     "Al-Muqeet": "The Sustainer",
//     "Al-Haseeb": "The Reckoner",
//     "Al-Jaleel": "The Majestic",
//     "Al-Kareem": "The Most Generous",
//     "Ar-Raqeeb": "The Watchful",
//     "Al-Mujeeb": "The Responsive One",
//     "Al-Wasi": "The All-Encompassing",
//     "Al-Hakim": "The All Wise",
//     "Al-Wadud": "The Loving One",
//     "Al-Majeed": "The Majestic One",
//     "Al-Ba'ith": "The Resurrector",
//     "Ash-Shaheed": "The All Witnessing",
//     "Al-Haqq": "The Truth",
//     "Al-Wakil": "The Trustee",
//     "Al-Qawiyy": "The Possessor of All Strength",
//     "Al-Maeen": "The Firm",
//     "Al-Waliyy": "The Protecting Associate",
//     "Al-Hameed": "The Praiseworthy",
//     "Al-Muhsee": "The All-Enumerating",
//     "Al-Mubdi'": "The Originator",
//     "Al-Mu'id": "The Restorer",
//     "Al-Muhyee": "The Giver of Life",
//     "Al-Mumeet": "The Taker of Life",
//     "Al-Hayy": "The Ever Living One",
//     "Al-Qayyum": "The Self-Existing One",
//     "Al-Wajid": "The Finder",
//     "Al-Maajid": "The Glorious",
//     "Al-Waahid": "The Unique, The Single",
//     "Al-Ahad": "The Unique",
//     "As-Samad": "The Satisfier of All Needs",
//     "Al-Qadir": "The All Powerful",
//     "Al-Muqtadir": "The Omnipotent",
//     "Al-Muqaddim": "The Expediter",
//     "Al-Mu'akhkhir": "The Delayer",
//     "Al-Awwal": "The First",
//     "Al-Akhir": "The Last",
//     "Az-Dhaahir": "The Manifest One",
//     "Al-Batin": "The Hidden One",
//     "Al-Waali": "The Protecting Friend",
//     "Al-Muta'ali": "The Supreme One",
//     "Al-Barr": "The Source of Goodness",
//     "At-Tawwab": "The Ever-Pardoning",
//     "Al-Muntaqim": "The Avenger",
//     "Al-'Afuww": "The Forgiver",
//     "Ar-Ra'uf": "The Most Kind",
//     "Malik-al-Mulk": "Master of the Kingdom",
//     "Dhu-al-Jalal wa-al-Ikram": "Lord of Majesty and Generosity",
//     "Al-Muqsit": "The Equitable One",
//     "Al-Jaami'": "The Gatherer",
//     "Al-Ghaniyy": "The Self-Sufficient, The Wealthy",
//     "Al-Mughni": "The Enricher",
//     "Al-Mani'": "The Withholder",
//     "Ad-Darr": "The Distresser",
//     "An-Nafi'": "The Benefactor",
//     "An-Nur": "The Light",
//     "Al-Hadi": "The Guide",
//     "Al-Badi": "The Incomparable Originator",
//     "Al-Baqi": "The Everlasting One",
//     "Al-Waarith": "The Inheritor of All",
//     "Ar-Rashid": "The Righteous Teacher",
//     "As-Sabur": "The Patient One",
// };

const allahNames = {
    "Ar-Rahman": { arabic: "ٱلرَّحْمَـٰنُ", meaning: "The Most Merciful" },
    "Ar-Raheem": { arabic: "ٱلرَّحِيمُ", meaning: "The Most Compassionate" },
    "Al-Malik": { arabic: "ٱلْمَلِكُ", meaning: "The King" },
    "Al-Quddus": { arabic: "ٱلْقُدُّوسُ", meaning: "The Most Holy" },
    "As-Salam": { arabic: "ٱلسَّلَامُ", meaning: "The Source of Peace" },
    "Al-Mu'min": { arabic: "ٱلْمُؤْمِنُ", meaning: "The Inspirer of Faith" },
    "Al-Muhaymin": { arabic: "ٱلْمُهَيْمِنُ", meaning: "The Guardian" },
    "Al-Aziz": { arabic: "ٱلْعَزِيزُ", meaning: "The Victorious" },
    "Al-Jabbar": { arabic: "ٱلْجَبَّارُ", meaning: "The Compeller" },
    "Al-Mutakabbir": { arabic: "ٱلْمُتَكَبِّرُ", meaning: "The Supreme" },
    "Al-Khaliq": { arabic: "ٱلْخَالِقُ", meaning: "The Creator" },
    "Al-Bari": { arabic: "ٱلْبَارِئُ", meaning: "The Originator" },
    "Al-Musawwir": { arabic: "ٱلْمُصَوِّرُ", meaning: "The Fashioner" },
    "Al-Ghaffar": { arabic: "ٱلْغَفَّارُ", meaning: "The Forgiving" },
    "Al-Qahhar": { arabic: "ٱلْقَهَّارُ", meaning: "The Subduer" },
    "Al-Wahhab": { arabic: "ٱلْوَهَّابُ", meaning: "The Giver of Gifts" },
    "Ar-Razzaq": { arabic: "ٱلرَّزَّاقُ", meaning: "The Provider" },
    "Al-Fattah": { arabic: "ٱلْفَتَّاحُ", meaning: "The Opener" },
    "Al-'Aleem": { arabic: "ٱلْعَلِيمُ", meaning: "The All-Knowing" },
    "Al-Qabid": { arabic: "ٱلْقَابِضُ", meaning: "The Constrictor" },
    "Al-Baasit": { arabic: "ٱلْبَاسِطُ", meaning: "The Extender" },
    "Al-Khafidh": { arabic: "ٱلْخَافِضُ", meaning: "The Reducer" },
    "Ar-Rafi": { arabic: "ٱلرَّافِعُ", meaning: "The Exalter" },
    "Al-Mu'izz": { arabic: "ٱلْمُعِزُّ", meaning: "The Honourer/ Bestower" },
    "Al-Mudhil": { arabic: "ٱلْمُذِلُّ", meaning: "The Humiliator" },
    "As-Samee'": { arabic: "ٱلسَّمِيعُ", meaning: "The All-Hearing" },
    "Al-Basir": { arabic: "ٱلْبَصِيرُ", meaning: "The All-Seeing" },
    "Al-Hakam": { arabic: "ٱلْحَكَمُ", meaning: "The Judge" },
    "Al-`Adl": { arabic: "ٱلْعَدْلُ", meaning: "The Just" },
    "Al-Latif": { arabic: "ٱللَّطِيفُ", meaning: "The Subtle One" },
    "Al-Khabeer": { arabic: "ٱلْخَبِيرُ", meaning: "The All-Aware" },
    "Al-Halim": { arabic: "ٱلْحَلِيمُ", meaning: "The Most Forbearing" },
    "Al-Atheem": { arabic: "ٱلْعَظِيمُ", meaning: "The Magnificent" },
    "Al-Ghafur": { arabic: "ٱلْغَفُورُ", meaning: "The Exceedingly Forgiving" },
    "Ash-Shakur": { arabic: "ٱلشَّكُورُ", meaning: "The Most Appreciative" },
    "Al-'Alee": { arabic: "ٱلْعَلِيُّ", meaning: "The Exalted" },
    "Al-Kabeer": { arabic: "ٱلْكَبِيرُ", meaning: "The Greatest" },
    "Al-Hafidh": { arabic: "ٱلْحَفِيظُ", meaning: "The Preserver" },
    "Al-Muqeet": { arabic: "ٱلْمُقِيتُ", meaning: "The Sustainer" },
    "Al-Haseeb": { arabic: "ٱلْحَسِيبُ", meaning: "The Reckoner" },
    "Al-Jaleel": { arabic: "ٱلْجَلِيلُ", meaning: "The Majestic" },
    "Al-Kareem": { arabic: "ٱلْكَرِيمُ", meaning: "The Most Generous" },
    "Ar-Raqeeb": { arabic: "ٱلرَّقِيبُ", meaning: "The Watchful" },
    "Al-Mujeeb": { arabic: "ٱلْمُجِيبُ", meaning: "The Responsive One" },
    "Al-Wasi": { arabic: "ٱلْوَاسِعُ", meaning: "The All-Encompassing" },
    "Al-Hakim": { arabic: "ٱلْحَكِيمُ", meaning: "The All Wise" },
    "Al-Wadud": { arabic: "ٱلْوَدُودُ", meaning: "The Loving One" },
    "Al-Majeed": { arabic: "ٱلْمَجِيدُ", meaning: "The Majestic One" },
    "Al-Ba'ith": { arabic: "ٱلْبَاعِثُ", meaning: "The Resurrector" },
    "Ash-Shaheed": { arabic: "ٱلشَّهِيدُ", meaning: "The All Witnessing" },
    "Al-Haqq": { arabic: "ٱلْحَقُّ", meaning: "The Truth" },
    "Al-Wakil": { arabic: "ٱلْوَكِيلُ", meaning: "The Trustee" },
    "Al-Qawiyy": { arabic: "ٱلْقَوِيُّ", meaning: "The Possessor of All Strength" },
    "Al-Mateen": { arabic: "ٱلْمَتِينُ", meaning: "The Firm" },
    "Al-Waliyy": { arabic: "ٱلْوَلِيُّ", meaning: "The Protecting Associate" },
    "Al-Hameed": { arabic: "ٱلْحَمِيدُ", meaning: "The Praiseworthy" },
    "Al-Muhsee": { arabic: "ٱلْمُحْصِي", meaning: "The All-Enumerating" },
    "Al-Mubdi'": { arabic: "ٱلْمُبْدِئُ", meaning: "The Originator" },
    "Al-Mu'id": { arabic: "ٱلْمُعِيدُ", meaning: "The Restorer" },
    "Al-Muhyee": { arabic: "ٱلْمُحْيِي", meaning: "The Giver of Life" },
    "Al-Mumeet": { arabic: "ٱلْمُمِيتُ", meaning: "The Taker of Life" },
    "Al-Hayy": { arabic: "ٱلْحَيُّ", meaning: "The Ever Living One" },
    "Al-Qayyum": { arabic: "ٱلْقَيُّومُ", meaning: "The Self-Existing One" },
    "Al-Waajid": { arabic: "ٱلْوَاجِدُ", meaning: "The Percieve" },
    "Al-Maajid": { arabic: "ٱلْمَاجِدُ", meaning: "The Glorious" },
    "Al-Waahid": { arabic: "ٱلْوَاحِدُ", meaning: "The Unique, The Single" },
    "Al-Ahad": { arabic: "ٱلْأَحَدُ", meaning: "The Unique" },
    "As-Samad": { arabic: "ٱلصَّمَدُ", meaning: "The Satisfier of All Needs" },
    "Al-Qadir": { arabic: "ٱلْقَادِرُ", meaning: "The All Powerful" },
    "Al-Muqtadir": { arabic: "ٱلْمُقْتَدِرُ", meaning: "The Omnipotent" },
    "Al-Muqaddim": { arabic: "ٱلْمُقَدِّمُ", meaning: "The Expediter" },
    "Al-Mu'akhkhir": { arabic: "ٱلْمُؤَخِّرُ", meaning: "The Delayer" },
    "Al-Awwal": { arabic: "ٱلْأَوَّلُ", meaning: "The First" },
    "Al-Akhir": { arabic: "ٱلْآخِرُ", meaning: "The Last" },
    "Az-Dhaahir": { arabic: "ٱلظَّاهِرُ", meaning: "The Manifest One" },
    "Al-Batin": { arabic: "ٱلْبَاطِنُ", meaning: "The Hidden One" },
    "Al-Waali": { arabic: "ٱلْوَالِي", meaning: "The Protecting Friend" },
    "Al-Muta'ali": { arabic: "ٱلْمُتَعَالِي", meaning: "The Supreme One" },
    "Al-Barr": { arabic: "ٱلْبَرُّ", meaning: "The Source of Goodness" },
    "At-Tawwab": { arabic: "ٱلتَّوَّابُ", meaning: "The Ever-Pardoning" },
    "Al-Muntaqim": { arabic: "ٱلْمُنْتَقِمُ", meaning: "The Avenger" },
    "Al-'Afuww": { arabic: "ٱلْعَفُوُّ", meaning: "The Forgiver" },
    "Ar-Ra'uf": { arabic: "ٱلرَّؤُوفُ", meaning: "The Most Kind" },
    "Malik-al-Mulk": { arabic: "مَالِكُ ٱلْمُلْكُ", meaning: "Master of the Kingdom" },
    "Dhu-al-Jalal wa-al-Ikram": { arabic: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ", meaning: "Lord of Majesty and Generosity" },
    "Al-Muqsit": { arabic: "ٱلْمُقْسِطُ", meaning: "The Equitable One" },
    "Al-Jaami'": { arabic: "ٱلْجَامِعُ", meaning: "The Gatherer" },
    "Al-Ghaniyy": { arabic: "ٱلْغَنِيُّ", meaning: "The Self-Sufficient, The Wealthy" },
    "Al-Mughni": { arabic: "ٱلْمُغْنِي", meaning: "The Enricher" },
    "Al-Mani'": { arabic: "ٱلْمَانِعُ", meaning: "The Withholder" },
    "Ad-Darr": { arabic: "ٱلضَّارُّ", meaning: "The Distresser" },
    "An-Nafi'": { arabic: "ٱلنَّافِعُ", meaning: "The Benefactor" },
    "An-Nur": { arabic: "ٱلنُّورُ", meaning: "The Light" },
    "Al-Hadi": { arabic: "ٱلْهَادِي", meaning: "The Guide" },
    "Al-Badi": { arabic: "ٱلْبَدِيعُ", meaning: "The Incomparable Originator" },
    "Al-Baqi": { arabic: "ٱلْبَاقِي", meaning: "The Everlasting One" },
    "Al-Waarith": { arabic: "ٱلْوَارِثُ", meaning: "The Inheritor of All" },
    "Ar-Rashid": { arabic: "ٱلرَّشِيدُ", meaning: "The Righteous Teacher" },
    "As-Sabur": { arabic: "ٱلصَّبُورُ", meaning: "The Patient One" }
};
let usedPairs = new Set();
let currentPairs = [];
let flippedCards = [];
let matches = 0;

function generateGamePairs() {
    // Filter out already used pairs
    const availablePairs = Object.entries(allahNames).filter(pair => 
        !usedPairs.has(pair[0]));
    
    // Randomly select pairs
    const selectedPairs = [];
    for(let i = 0; i < 6 && i < availablePairs.length; i++) {
        const randomIndex = Math.floor(Math.random() * availablePairs.length);
        selectedPairs.push(availablePairs.splice(randomIndex, 1)[0]);
    }
    
    // Create array with both names and meanings
    currentPairs = [];
    selectedPairs.forEach(([name, data]) => {
        currentPairs.push(
            { text: name, type: 'name', pair: name },
            { text: data.meaning, type: 'meaning', pair: name }
        );
    });
    
    // Shuffle the array
    return currentPairs.sort(() => Math.random() - 0.5);
}


function createCard(cardData, index) {
    let cardContent;
    if (cardData.type === 'name') {
        cardContent = `
            <div class="name-container">
                <h3 class="transliterated-name">${cardData.text}</h3>
                <h4 class="arabic-text">${allahNames[cardData.pair].arabic}</h4>
            </div>`;
    } else {
        cardContent = `<h3 class="meaning-text">${cardData.text}</h3>`;
    }

    return `
        <div class="col-3">
            <div class="flip-card" data-index="${index}" data-pair="${cardData.pair}">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img class="front-face" src="image/logo.jpg" alt="Card">
                    </div>
                    <div class="flip-card-back">
                        ${cardContent}
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

function toggleDropdown() {
    document.getElementById("studyLinks").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.study-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', initializeGame);
