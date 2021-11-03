//coded by Christopher Barber with attributions to Ashlyn Knox and Tony Grimes code and classes. 

//main program
const rollDie = function(sizeOfDice) {
  //takes a random result between 0 and 1 and multiplies it by the size of the die entered and rounds it up
  let result = Math.ceil(Math.random() * sizeOfDice);
  console.log(`You rolled a ${sizeOfDice} sided die with a result of ${result}`);
  return result;
}
const rollDice = function(numberOfDice, sizeOfDice) {  
  let totalResult = 0;
  //rolls the die as many times as number of dice
  for(let i = 0; i < numberOfDice; i++) {
    totalResult += rollDie(sizeOfDice);
  }
  console.log(`You rolled a total of ${numberOfDice} ${sizeOfDice} sided dice with a total result of ${totalResult}`);
}
//before anything is done check if there are proper inputs

if(typeof(Number(process.argv[2])) !== typeof(2)) {
  console.log(`1Please enter two numbers in the format (node diceRoller.js [number] [number])`);  
} else if(typeof(Number(process.argv[3])) !== typeof(2)) {
  console.log(`2Please enter two numbers in the format (node diceRoller.js [number] [number])`);
} else {
  //the inputs are numbers now initialize variables and run the program
  const numberOfDice = Number(process.argv[2]);
  const sizeOfDice = Number(process.argv[3]);
  rollDice(numberOfDice, sizeOfDice);
}
