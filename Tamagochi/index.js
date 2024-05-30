// Math.floor uitleg heb ik van: https://www.w3schools.com/jsref/jsref_floor.asp (Rond af naar beneden)
function randomNaam(){
    let naamLijst = ['Robin', 'Sam', 'Alex', 'River', 'Kai', 'Riley', 'Noah', 'Bo', 'Jessie', 'Renee', 'Guus']
    let finalName = naamLijst[Math.floor(Math.random() * naamLijst.length)]
    let voorwoord = document.querySelector("h2")
    voorwoord.textContent = "Mijn naam is: " + finalName
}

randomNaam()

let gespaard = 140
let prijs = 20
let budget = document.getElementById('variabelBudget')
let buttonSelector = document.querySelectorAll(".btn")
let geldOp = document.getElementById('beginOpnieuw')
const geldOpKnop = document.getElementById('opnieuwKnop')

function veranderBudget() {
    if (gespaard > 0) {
        gespaard -= prijs
        budget.textContent = gespaard
    }
    // Als ik if else gebruik werkt het niet, maar met if wel
    if (gespaard <= 0) {
        geldOp.textContent = "Je geld is opgemaakt. Wil je opnieuw beginnen?"
        geldOpKnop.style.visibility = 'visible'
    }
    else {
        console.log("Je hebt al je geld opgemaakt!")
    }
}

buttonSelector.forEach(button => {
    button.addEventListener('click', veranderBudget)
})

// informatie over reload van: https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click, zelf gecodeerd.
function refresh() {
    window.location.reload()
}

geldOpKnop.addEventListener('click', refresh)

// getElementById heb ik van W3Schools: https://www.w3schools.com/js/js_events.asp
// style.visibility heb ik aan mijn broer gevraagd hoe te gebruiken
// Om de versie 0.8 kleiner te maken heb ik gebruik gemaakt van ChatGPT: https://chatgpt.com/share/856bdf25-7a23-4baa-8d18-d24a65c0950c
function showElement(ids) {
    if (Array.isArray(ids)) {
        ids.forEach(id => document.getElementById(id).style.visibility = 'visible')
    } else {
        document.getElementById(ids).style.visibility = 'visible'
    }
}

const elements = {
    overhemd: 'overhemd',
    polo: 'polo',
    broek: 'broek',
    langeRok: 'langeRok',
    ballerinas: 'ballerinas',
    geleSneakers: 'geleSneakers',
    bril: 'bril',
    sterrenBril: 'sterrenBril',
    zwartHaar: 'zwartHaar',
    roodHaar: 'roodHaar',
    bruinHaar: ['bruinHaarFront', 'bruinHaarBack'],
    blondHaar: ['blondHaarFront', 'blondHaarBack'],
    ogen1: 'ogen1',
    ogen2: 'ogen2',
    mond1: 'mond1',
    mond2: 'mond2'
}

Object.keys(elements).forEach(key => {
    document.querySelector(`#button${key.charAt(0).toUpperCase() + key.slice(1)}`).addEventListener('click', () => showElement(elements[key]))
})

// Informatie van: https://www.w3schools.com/js/tryit.asp?filename=tryjs_button_disabled
// ChatGPT heeft mij geholpen de versie 1.1 te verkorten: https://chatgpt.com/share/c6a7e932-60d9-4487-b65d-975c76eb5eae
// Groepeert buttons in arrays
const categories = {
    shirt: ['buttonOverhemd', 'buttonPolo'],
    onderkant: ['buttonBroek', 'buttonLangeRok'],
    schoenen: ['buttonBallerinas', 'buttonGeleSneakers'],
    brillen: ['buttonBril', 'buttonSterrenBril'],
    haar: ['buttonZwartHaar', 'buttonRoodHaar', 'buttonBruinHaar', 'buttonBlondHaar'],
    ogen: ['buttonOgen1', 'buttonOgen2'],
    mond: ['buttonMond1', 'buttonMond2']
}

// disable alle buttons in bovengenoemde arrays
function disableCategory(category) {
    category.forEach(id => {
        document.getElementById(id).disabled = true
    })
}

// Linkt alle events listeners aan de knoppen
for (const category in categories) {
    categories[category].forEach(id => {
        document.getElementById(id).addEventListener('click', () => disableCategory(categories[category]))
    })
}