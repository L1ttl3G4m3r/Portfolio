function naam(naam){
    let voorwoord = document.querySelector("h2")
    console.log(voorwoord + naam)
    voorwoord.textContent = "Mijn naam is: " + naam
}

naam("Kaylee")

//let kapsalon = 20
//let winkel1 = 20
//let winkel2 = 50

function budget(){
    let budget = document.getElementById('variabelBudget')
    budget.textContent = 150
}

budget()

function showElement(ids) {
    if (Array.isArray(ids)) {
        ids.forEach(id => document.getElementById(id).style.visibility = 'visible');
    } else {
        document.getElementById(ids).style.visibility = 'visible';
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
};

Object.keys(elements).forEach(key => {
    document.querySelector(`#button${key.charAt(0).toUpperCase() + key.slice(1)}`).addEventListener('click', () => showElement(elements[key]));
});

//getElementById heb ik van W3Schools: https://www.w3schools.com/js/js_events.asp
//style.visibility heb ik aan mijn broer gevraagd hoe te gebruiken

//Winkel
// function overhemd(){
//     const buttonOverhemd = document.querySelector('#buttonOverhemd')
//     document.getElementById('overhemd').style.visibility = 'visible'
// }

// function polo(){
//     const buttonPolo = document.querySelector('#buttonPolo')
//     document.getElementById('polo').style.visibility = 'visible'
// }

// function broek(){
//     const buttonBroek = document.querySelector('#buttonBroek')
//     document.getElementById('broek').style.visibility = 'visible'
// }

// function langeRok(){
//     const buttonLangeRok = document.querySelector('#buttonLangeRok')
//     document.getElementById('langeRok').style.visibility = 'visible'
// }

// function ballerinas(){
//     const buttonBallerinas = document.querySelector('#buttonBallerinas')
//     document.getElementById('ballerinas').style.visibility = 'visible'
// }

// function geleSneakers(){
//     const buttonGeleSneakers = document.querySelector('#buttonGeleSneakers')
//     document.getElementById('geleSneakers').style.visibility = 'visible'
// }

// function bril(){
//     const buttonBril = document.querySelector('#buttonBril')
//     document.getElementById('bril').style.visibility = 'visible'
// }

// function sterrenBril(){
//     const buttonSterrenbril = document.querySelector('#buttonSterrenbril')
//     document.getElementById('sterrenBril').style.visibility = 'visible'
// }

// buttonOverhemd.addEventListener('click', overhemd)
// buttonPolo.addEventListener('click', polo)
// buttonBroek.addEventListener('click', broek)
// buttonLangeRok.addEventListener('click', langeRok)
// buttonBallerinas.addEventListener('click', ballerinas)
// buttonGeleSneakers.addEventListener('click', geleSneakers)
// buttonBril.addEventListener('click', bril)
// buttonSterrenbril.addEventListener('click', sterrenBril)

//Kapsalon
// function zwartHaar(){
//     const buttonZwartHaar = document.querySelector('#buttonZwartHaar')
//     document.getElementById('zwartHaar').style.visibility = 'visible'
// }

// function roodHaar(){
//     const buttonRoodHaar = document.querySelector('#buttonRoodHaar')
//     document.getElementById('roodHaar').style.visibility = 'visible'
// }

// function bruinHaar(){
//     const buttonBruinHaar = document.querySelector('#buttonBruinHaar')
//     document.getElementById('bruinHaarFront').style.visibility = 'visible'
//     document.getElementById('bruinHaarBack').style.visibility = 'visible'
// }

// function blondHaar(){
//     const buttonBlondHaar = document.querySelector('#buttonBlondHaar')
//     document.getElementById('blondHaarFront').style.visibility = 'visible'
//     document.getElementById('blondHaarBack').style.visibility = 'visible'
// }

// function ogen1(){
//     const buttonOgen1 = document.querySelector('#buttonOgen1')
//     document.getElementById('ogen1').style.visibility = 'visible'
// }

// function ogen2(){
//     const buttonOgen2 = document.querySelector('#buttonOgen2')
//     document.getElementById('ogen2').style.visibility = 'visible'
// }

// function mond1(){
//     const buttonMond1 = document.querySelector('#buttonMond1')
//     document.getElementById('mond1').style.visibility = 'visible'
// }

// function mond2(){
//     const buttonMond2 = document.querySelector('#buttonMond2')
//     document.getElementById('mond2').style.visibility = 'visible'
// }

// buttonZwartHaar.addEventListener('click', zwartHaar)
// buttonRoodHaar.addEventListener('click', roodHaar)
// buttonBruinHaar.addEventListener('click', bruinHaar)
// buttonBlondHaar.addEventListener('click', blondHaar)
// buttonOgen1.addEventListener('click', ogen1)
// buttonOgen2.addEventListener('click', ogen2)
// buttonMond1.addEventListener('click', mond1)
// buttonMond2.addEventListener('click', mond2)