// start code

// SNACK 1 ----------------------------

// 1. funzione dichiarativa somma
function sommaDichiarativa(num1, num2) {
  console.log(`${num1} + ${num2} = `, num1 + num2);
}

//2. funzione anonima
const sommaAnonima = function (num1, num2) {
  console.log(`${num1} + ${num2} = `, num1 + num2);
};

// 3. arrow function
const sommaArrow = (num1, num2) => {
  console.log(`${num1} + ${num2} = `, num1 + num2);
};

sommaDichiarativa(2, 4);
sommaAnonima(3, 3);
sommaArrow(1, 5);

// SNACK 2 ----------------------------

// quadrato di un num su una riga
const quadrato = (num) => console.log(`quadrato di ${num}: `, num * num);

quadrato(3);

// SNACK 3 ----------------------------

// esegui operazione
const prodotto = (num1, num2) => num1 * num2;
const sottrazione = (num1, num2) => num1 - num2;

const eseguiOperazione = (n1, n2, operazione) => operazione(n1, n2);

const risProdotto = eseguiOperazione(10, 10, prodotto);
const risSottrazione = eseguiOperazione(10, 10, sottrazione);

console.log('10 * 10 = ', risProdotto);
console.log('10 - 10 = ', risSottrazione);

// SNACK 4 ----------------------------

// generatore di funzioni
// const creaTimer = (time) => {
//   console.log('Timer partito...');

//   return function () {
//     setTimeout(() => {
//       console.log('Tempo Scaduto!');
//     }, time);
//   };
// };

// const timer = creaTimer(3000);
// timer();

// SNACK 5 ----------------------------

// stampa messaggio ad ogni intervallo
// const stampaOgniSecondo = (message) => {
//   let counter = 0;

//   return function () {
//     const interval = setInterval(() => {
//       console.log(message);

//       counter++;
//       counter == 5 && clearInterval(interval);
//     }, 1000);
//   };
// };

// const showMessage = stampaOgniSecondo('Ciao!');
// showMessage();

// SNACK 6 ----------------------------

// const creaContatoreAutomatico = (interval) => {
//   let counter = 1;

//   return function () {
//     const interval = setInterval(() => {
//       console.log(counter);

//       counter++;
//       counter == 6 && clearInterval(interval);
//     }, 1000);
//   };
// };

// const showCounter = creaContatoreAutomatico();
// showCounter();

// SNACK 7 ----------------------------

// const eseguiEFerma = (message, start, stop) => {
//   let counter = 0;

//   return function () {
//     setTimeout(() => {
//       console.log('Corsa Iniziata!');

//       const interval = setInterval(() => {
//         console.log(message);

//         counter++;
//         counter * 1000 == stop && (clearInterval(interval), console.log('Corsa finita!'));
//       }, 1000);
//     }, start);
//   };
// };

// const corsa = eseguiEFerma('sto correndo...', 3000, 6000);
// corsa();

// SNACK 8 ----------------------------

// conto alla rovescia
const contoAllaRovescia = (n) => {
  let counter = n;

  return function () {
    const interval = setInterval(() => {
      console.log(counter);
      counter--;
      counter == 0 && (clearInterval(interval), console.log('Tempo scaduto!'));
    }, 1000);
  };
};

const countdown = contoAllaRovescia(5);
countdown();
