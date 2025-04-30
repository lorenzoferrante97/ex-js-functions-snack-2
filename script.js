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
