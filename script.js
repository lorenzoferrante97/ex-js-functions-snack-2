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
const creaTimer = (time) => {
  console.log('Timer partito...');

  return function () {
    setTimeout(() => {
      console.log('Tempo Scaduto!');
    }, time);
  };
};

const timer = creaTimer(3000);
timer();

// SNACK 5 ----------------------------

// stampa messaggio ad ogni intervallo
const intervalMessage = (message) => {
  let counter = 0;

  return function () {
    const interval = setInterval(() => {
      console.log(message);

      counter++;
      counter == 5 && clearInterval(interval);
    }, 1000);
  };
};

const showMessage = intervalMessage('Ciao!');
showMessage();
