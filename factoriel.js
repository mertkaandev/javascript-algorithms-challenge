// Factoriel

// Write a function that finds the factorial of the number entered as a parameter.

const numberFactoriel = (number) => {
      
      let factoriel = 1;

      for (let i = 2; i<=number; i++){
          factoriel *= i
      }

      return factoriel;

};

console.log(numberFactoriel(5))