

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
    "Al-Mu'izz": "The Honourer/Bestower",
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
const allahNamesArabic = {
    "ٱلْرَّحْمَـانُ": "The Most or Entirely Merciful",
    "ٱلْرَّحِيْمُ": "The Bestower of Mercy",
    "ٱلْمَلِكُ": "The King and Owner of Dominion",
    "ٱلْقُدُّوسُ": "The Absolutely Pure",
    "ٱلْسَّلَامُ": "The Perfection and Giver of Peace",
    "ٱلْمُؤْمِنُ": "The One Who gives Emaan and Security",
    "ٱلْمُهَيْمِنُ": "The Guardian, The Witness, The Overseer",
    "ٱلْعَزِيزُ": "The All Mighty",
    "ٱلْجَبَّارُ": "The Compeller, The Restorer",
    "ٱلْمُتَكَبِّرُ": "The Supreme, The Majestic",
    "ٱلْخَالِقُ": "The Creator, The Maker",
    "ٱلْبَارِئُ": "The Originator",
    "ٱلْمُصَوِّرُ": "The Fashioner",
    "ٱلْغَفَّارُ": "The All- and Oft-Forgiving",
    "ٱلْقَهَّارُ": "The Subduer, The Ever-Dominating",
    "ٱلْوَهَّابُ": "The Giver of Gifts",
    "ٱلْرَّزَّاقُ": "The Provider",
    "ٱلْفَتَّاحُ": "The Opener, The Judge",
    "ٱلْعَلِيمُ": "The All-Knowing, The Omniscient",
    "ٱلْقَابِضُ": "The Withholder",
    "ٱلْبَاسِطُ": "The Extender",
    "ٱلْخَافِضُ": "The Reducer, The Abaser",
    "ٱلْرَّافِعُ": "The Exalter, The Elevator",
    "ٱلْمُعِزُّ": "The Honourer, The Bestower",
    "ٱلْمُذِلُّ": "The Dishonourer, The Humiliator",
    "ٱلْسَّمِيعُ": "The All-Hearing",
    "ٱلْبَصِيرُ": "The All-Seeing",
"ٱلْحَكَمُ": "The Judge, The Giver of Justice",
"ٱلْعَدْلُ": "The Utterly Just",
"ٱلْلَّطِيفُ": "The Subtle One, The Most Gentle",
"ٱلْخَبِيرُ": "The Acquainted, the All-Aware",
"ٱلْحَلِيمُ": "The Most Forbearing",
"ٱلْعَظِيمُ": "The Magnificent, The Supreme",
"ٱلْغَفُورُ": "The Forgiving, The Exceedingly Forgiving",
"ٱلْشَّكُورُ": "The Most Appreciative",
"ٱلْعَلِيُّ": "The Most High, The Exalted",
"ٱلْكَبِيرُ": "The Greatest, The Most Grand",
"ٱلْحَفِيظُ": "The Preserver, The All-Heedful and All-Protecting",
"ٱلْمُقِيتُ": "The Sustainer",
"ٱلْحَسِيبُ": "The Reckoner, The Sufficient",
"ٱلْجَلِيلُ": "The Majestic",
"ٱلْكَرِيمُ": "The Most Generous, The Most Esteemed",
"ٱلْرَّقِيبُ": "The Watchful",
"ٱلْمُجِيبُ": "The Responsive One",
"ٱلْوَاسِعُ": "The All-Encompassing, the Boundless",
"ٱلْحَكِيمُ": "The All-Wise",
"ٱلْوَدُودُ": "The Most Loving",
"ٱلْمَجِيدُ": "The Glorious, The Most Honorable",
"ٱلْبَاعِثُ": "The Resurrector, The Raiser of the Dead",
"ٱلْشَّهِيدُ": "The All- and Ever Witnessing",
"ٱلْحَقُّ": "The Absolute Truth",
"ٱلْوَكِيلُ": "The Trustee, The Disposer of Affairs",
"ٱلْقَوِيُّ": "The All-Strong",
"ٱلْمَتِينُ": "The Firm, The Steadfast",
"ٱلْوَلِيُّ": "The Protecting Associate",
"ٱلْحَمِيدُ": "The Praiseworthy",
"ٱلْمُحْصِيُ": "The All-Enumerating, The Counter",
"ٱلْمُبْدِئُ": "The Originator, The Initiator",
"ٱلْمُعِيدُ": "The Restorer, The Reinstater",
"ٱلْمُحْيِى": "The Giver of Life",
"ٱلْمُمِيتُ": "The Bringer of Death, the Destroyer",
"ٱلْحَىُّ": "The Ever-Living",
"ٱلْقَيُّومُ": "The Sustainer, The Self-Subsisting",
"ٱلْوَاجِدُ": "The Perceiver",
"ٱلْمَاجِدُ": "The Illustrious, the Magnificent",
"ٱلْوَاحِدُ": "The One",
"ٱلْأَحَد": "The Unique, The Only One",
"ٱلْصَّمَدُ": "The Eternal, Satisfier of Needs",
"ٱلْقَادِرُ": "The Capable, The Powerful",
"ٱلْمُقْتَدِرُ": "The Omnipotent",
"ٱلْمُقَدِّمُ": "The Expediter, The Promoter",
"ٱلْمُؤَخِّرُ": "The Delayer, the Retarder",
"ٱلأَوَّلُ": "The First",
"ٱلْآخِرُ": "The Last",
"ٱلْظَّاهِرُ": "The Manifest",
"ٱلْبَاطِنُ": "The Hidden One, Knower of the Hidden",
"ٱلْوَالِي": "The Governor, The Patron",
"ٱلْمُتَعَالِي": "The Self Exalted",
"ٱلْبَرُّ": "The Source of Goodness, the Kind Benefactor",
"ٱلْتَّوَّابُ": "The Ever-Pardoning, The Relenting",
"ٱلْمُنْتَقِمُ": "The Avenger",
"ٱلْعَفُوُّ": "The Pardoner",
"ٱلْرَّؤُفُ": "The Most Kind",
"مَالِكُ ٱلْمُلْكُ": "Master of the Kingdom, Owner of the Dominion",
"ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ": "Possessor of Glory and Honour, Lord of Majesty and Generosity",
"ٱلْمُقْسِطُ": "The Equitable, the Requiter",
"ٱلْجَامِعُ": "The Gatherer, the Uniter",
"ٱلْغَنيُّ": "The Self-Sufficient, The Wealthy",
"ٱلْمُغْنِيُّ": "The Enricher",
"ٱلْمَانِعُ": "The Withholder",
"ٱلْضَّارُ": "The Distresser",
"ٱلْنَّافِعُ": "The Propitious, the Benefactor",
"ٱلْنُّورُ": "The Light, The Illuminator",
"ٱلْهَادِي": "The Guide",
"ٱلْبَدِيعُ": "The Incomparable Originator",
"ٱلْبَاقِي": "The Ever-Surviving, The Everlasting",
"ٱلْوَارِثُ": "The Inheritor, The Heir",
"ٱلْرَّشِيدُ": "The Guide, Infallible Teacher",
"ٱلْصَّبُورُ": "The Forbearing, The Patient"
};

let usedPairs = new Set();
let currentPairs = [];
let flippedCards = [];
let matches = 0;

function generateGamePairs() {
    // Filter out already used pairs
    const savedLanguage = getSavedLanguagePreference();
    const namesDict = savedLanguage === 'arabic' ? allahNamesArabic : allahNames;
    const availablePairs = Object.entries(namesDict).filter(pair => 
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
function handleLanguageChange(newLanguage) {
    // Save the new language preference
    saveLanguagePreference(newLanguage);
    
    // Update button text
    document.getElementById('languageDropdown').textContent = 
        newLanguage === 'arabic' ? 'Arabic' : 'Transliterated';
    
    // Reset game state
    usedPairs = new Set();
    currentPairs = [];
    flippedCards = [];
    matches = 0;
    
    // Reset score display
    document.getElementById('matches').textContent = '0';
    
    // Clear and reinitialize the game board
    gameBoard.innerHTML = '';
    initializeGame();
}
// function saveLanguagePreference(language) {
//     localStorage.setItem('preferredLanguage', language);
// }

// // Function to get saved language preference
// function getSavedLanguagePreference() {
//     return localStorage.getItem('preferredLanguage') || 'transliterated'; // default to transliterated if none saved
// }

// // Update your DOMContentLoaded event listener
// document.addEventListener('DOMContentLoaded', () => {
//     // Load saved preference and initialize game
//     const savedLanguage = getSavedLanguagePreference();
//     currentLanguage = savedLanguage;
    
//     // Update dropdown button text to show saved preference
//     document.getElementById('languageDropdown').textContent = 
//         savedLanguage === 'arabic' ? 'Arabic' : 'Transliterated';
    
//     initializeGame(savedLanguage);
    
//     // Add click handlers for language selection
//     const dropdownItems = document.querySelectorAll('.dropdown-item');
//     dropdownItems.forEach(item => {
//         item.addEventListener('click', function(e) {
//             e.preventDefault();
//             const selectedLanguage = this.getAttribute('data-language');
            
//             // Save the selected language
//             saveLanguagePreference(selectedLanguage);
            
//             // Update button text
//             document.getElementById('languageDropdown').textContent = 
//                 selectedLanguage === 'arabic' ? 'Arabic' : 'Transliterated';
            
//             // Update current language and restart game
//             currentLanguage = selectedLanguage;
//             resetAndRestartGame();
//         });
//     });
// });
// document.addEventListener('DOMContentLoaded', () => {
//     // Load saved preference and initialize game
//     const savedLanguage = getSavedLanguagePreference();
    
//     // Set initial button text
//     document.getElementById('languageDropdown').textContent = 
//         savedLanguage === 'arabic' ? 'Arabic' : 'Transliterated';
    
//     // Initialize game with saved language
//     initializeGame();
    
//     // Add click handlers for language selection
//     const dropdownItems = document.querySelectorAll('.dropdown-item');
//     dropdownItems.forEach(item => {
//         item.addEventListener('click', function(e) {
//             e.preventDefault();
//             const newLanguage = this.getAttribute('data-language');
            
//             // Only restart if language actually changed
//             if (newLanguage !== getSavedLanguagePreference()) {
//                 handleLanguageChange(newLanguage);
//             }
//         });
//     });
// });
// Initialize game when page loads
document.addEventListener('DOMContentLoaded', initializeGame);
