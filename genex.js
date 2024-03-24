//Given an array of objects representing people with a birth and death year, 
//return the oldest person.

/*
const findTheOldest = function (array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

module.exports = findTheOldest;
*/


//TEST THE ABOVE ARRAY
/* 
const findTheOldest = require('./findTheOldest-solution');

describe('findTheOldest', () => {
  test('finds the oldest person!', () => {
    const people = [
      {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];
    expect(findTheOldest(people).name).toBe('Ray');
  });
  test('finds the oldest person if someone is still living', () => {
    const people = [
      {
        name: 'Carly',
        yearOfBirth: 2018,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];
    expect(findTheOldest(people).name).toBe('Ray');
  });
  test('finds the oldest person if the OLDEST is still living', () => {
    const people = [
      {
        name: 'Carly',
        yearOfBirth: 1066,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];
    expect(findTheOldest(people).name).toBe('Carly');
  });
});
*/





//write a function that takes the array and returns an array of titles:

/*
const getTheTitles = function (array) {
  return array.map((book) => book.title);
};

module.exports = getTheTitles;
*/


// TET ABOVE ARRAY

/*
const getTheTitles = require('./getTheTitles-solution');

describe('getTheTitles', () => {
  const books = [
    {
      title: 'Book',
      author: 'Name',
    },
    {
      title: 'Book2',
      author: 'Name2',
    },
  ];

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book', 'Book2']);
  });
});
*/









// Create a function that returns a specific member of the Fibonacci sequence:

/*const fibonacci = function(countArg) {
    // checks argument's type and makes sure we use 
    // a number throughout rest of function.
    let count
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;

};

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];

module.exports = fibonacci;
/*



// TEST THE ABOVE FIBONACCI

/*const fibonacci = require('./fibonacci-solution')

describe('fibonacci', () => {
  test('4th fibonacci number is 3', () => {
    expect(fibonacci(4)).toBe(3);
  });
  test('6th fibonacci number is 8', () => {
    expect(fibonacci(6)).toBe(8);
  });
  test('10th fibonacci number is 55', () => {
    expect(fibonacci(10)).toBe(55);
  });
  test('15th fibonacci number is 610', () => {
    expect(fibonacci(15)).toBe(610);
  });
  test('25th fibonacci number is 75025', () => {
    expect(fibonacci(25)).toBe(75025);
  });
  test('0th fibonacci number is 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  test('doesn\'t accept negatives', () => {
    expect(fibonacci(-25)).toBe("OOPS");
  });
  test('DOES accept strings', () => {
    expect(fibonacci("0")).toBe(0);
  });
  test('DOES accept strings', () => {
    expect(fibonacci("1")).toBe(1);
  });
  test('DOES accept strings', () => {
    expect(fibonacci("2")).toBe(1);
  });
  test('DOES accept strings', () => {
    expect(fibonacci("8")).toBe(21);
  });
});
/*






//Write a function that determines whether or not a given string is a palindrome.
/*
const palindromes = function (string) {
    // Since we only consider letters and numbers, create a variable containing all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
    // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const cleanedString = string
      .toLowerCase()
      .split('')
      .filter((character) => alphanumerical.includes(character))
      .join('');
  
    // Create a new reversed string for comparison
    const reversedString = cleanedString.split('').reverse().join('');
  
    // Return the outcome of the comparison which will either be true or false
    return cleanedString === reversedString;
  };
  
  module.exports = palindromes;
*/


 
// TEST THE ABOVE palindrome
/*
const palindromes = require('./palindromes-solution');

describe('palindromes', () => {
  test('works with single words', () => {
    expect(palindromes('racecar')).toBe(true);
  });
  test('works with punctuation ', () => {
    expect(palindromes('racecar!')).toBe(true);
  });
  test('works with upper-case letters ', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(
      true
    );
  });
  test("doesn't just always return true", () => {
    expect(palindromes('ZZZZ car, a man, a maraca.')).toBe(false);
  });
  test('works with numbers in a string', () => {
    expect(palindromes('rac3e3car')).toBe(true);
  });
  test('works with unevenly spaced numbers in a string', () => {
    expect(palindromes('r3ace3car')).toBe(false);
  });
});
*/




//add, subtract, get the sum, multiply, get the power, and find the factorial


/*

const add = function(a, b) {

    return a + b;
	

};

const subtract = function(a, b) {

    return a - b;
	
};

const sum = function(array) {

    return array.reduce((total, current) => total + current, 0);
	
};

const multiply = function(array) {

    return array.reduce((product, current) => product + current);
};

const power = function(a, b) {
	
    return Math.pow(a, b);
};

const factorial = function(n) {

    if (n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--) {

        product *= 1;
    }
	
};

*/



// TESTING THE ABOVE
/*
const calculator = require('./calculator-solution');

describe('add', () => {
  test('adds 0 and 0', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('adds 2 and 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('adds positive numbers', () => {
    expect(calculator.add(2, 6)).toBe(8);
  });
});

describe('subtract', () => {
  test('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });
});

describe('sum', () => {
  test('computes the sum of an empty array', () => {
    expect(calculator.sum([])).toBe(0);
  });

  test('computes the sum of an array of one number', () => {
    expect(calculator.sum([7])).toBe(7);
  });

  test('computes the sum of an array of two numbers', () => {
    expect(calculator.sum([7, 11])).toBe(18);
  });

  test('computes the sum of an array of many numbers', () => {
    expect(calculator.sum([1, 3, 5, 7, 9])).toBe(25);
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(calculator.multiply([2, 4])).toBe(8);
  });

  test('multiplies several numbers', () => {
    expect(calculator.multiply([2, 4, 6, 8, 10, 12, 14])).toBe(645120);
  });
});

describe('power', () => {
  test('raises one number to the power of another number', () => {
    expect(calculator.power(4, 3)).toBe(64); // 4 to third power is 64
  });
});

describe('factorial', () => {
  test('computes the factorial of 0', () => {
    expect(calculator.factorial(0)).toBe(1); // 0! = 1
  });

  test('computes the factorial of 1', () => {
    expect(calculator.factorial(1)).toBe(1);
  });

  test('computes the factorial of 2', () => {
    expect(calculator.factorial(2)).toBe(2);
  });

  test('computes the factorial of 5', () => {
    expect(calculator.factorial(5)).toBe(120);
  });

  test('computes the factorial of 10', () => {
    expect(calculator.factorial(10)).toBe(3628800);
  });
});

*/





















/*

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];



const fifteen = inventors.filter(function(inventor) {

        if (year => 1500 && year <= 1599) {

            console.log(fifteen);
        }

}

);



*/















/*
function letEveryThird(array) {

    let sum = 0;

    for (let i = o; i <= array.length; i++) {

        if (array[i] % 2 === 0) {

            const triplNumber = array[i] * 3;

            sum += triplNumber;
            
        };
        
    };

    return sum;
    
};



function sumEveryThird(array) {

    .filter(num) => num % 2 === 0;
    .map(num) => num * 3;
    .reduce((acc, curr) => acc + curr);   


}

*/




/*
let salaries = {

    John: 100,
    Ann: 50,
    Pete: 130,
}

alert(salaries.John + salaries.Ann + salaries.Pete);


const person = {};
*/