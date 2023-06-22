// const moendaEl_one = document.querySelector("#moneda-uno");
// const moendaEl_two = document.querySelector("#moneda-dos");
// const cantidadEl_one = document.querySelector("#cantidad-uno");
// const cantidadEl_two = document.querySelector("#cantidad-dos");
// const cambioEl = document.querySelector("#cambio");
// const taza = document.querySelector("#taza");


// // fetch exchange and update the DOM
// function calculate(){
//     // console.log("funciono")

//     const moneda_one = moendaEl_one.value;
//     const moneda_two = moendaEl_two.value;
// }

// // eventos
// moendaEl_one.addEventListener('change',calculate);
// cantidadEl_one.addEventListener('input',calculate);
// moendaEl_two.addEventListener('change',calculate);
// cantidadEl_two.addEventListener('input',calculate);

// calculate();

const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');


// Fetch Exchange Rate and Update the DOM
function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

    } );
    
}

//Event listeners
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );


calculate();