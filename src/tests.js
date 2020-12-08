const intervalId = setInterval(() => {
  console.log(Math.random(1, 50));
}, 10);

setTimeout(() => {
  const promise = new Promise((resolve) => {
    console.log('Richard');
    resolve('Robert');
  });

  promise
      .then((value) => {
        console.log(value);

        setTimeout(() => {
          console.log('Michael');

         
        }, 10);
      });

  console.log('John');
  clearInterval(intervalId);
}, 10);

function Person(age) {
  this.age = age;

  setInterval(function() {
      this.age++;
  }, 1000);
}

const vasya = new Person(13);

setTimeout(function() {
  console.log(vasya.age); // ???
}, 5000);


function Person(name) {
  this.name = name;
}

const juan = new Person('Juan');

Person.prototype = {
  getName: function () {
      return this.name;
  }
};

const pedro = new Person('Pedro');

console.log(pedro.getName());
console.log(juan.getName());


// Make this syntax possible:

function sum(a){
 return function(b){
    return function(c){
      return a + b + c
    }
  }
}

Number.prototype.add = function(n){ 
  return this + n; 
}
//Add method named minus in Number object prototype
Number.prototype.minus = function(n){ 
  return this - n; 
}
//Output

function add(n) {
 return function(a) {
    if(a === undefined){
      return n;
    } else {
      return add(n+a);
    }
  }
}

console.log(sum(1)(2)(3)); 
console.log(4..add(3));  
console.log(add(12)(5)(3)(3)(3)(3)())

// Sort array of objects by number of object properties

let employees=[
{name:"George", age:32, retiredate:"March 12, 2014",retire: 32, reti: 23},
{name:"Edward", age:17, retiredate:"June 2, 2023", retire: 32},
{name:"Jhon", age:58, retiredate:"December 20, 2036"},
{name:"Emily", age:62, retiredate:"April 30, 2020",retire: 32,retirdse: 32,retirdsade: 32}]

employees.sort(function(a, b){
  return Object.keys(a).length - Object.keys(b).length
})

employees.sort(function(a, b){
  let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
  if (nameA < nameB) //sort string ascending
      return -1 
  if (nameA > nameB)
      return 1
  // return 0 //default return value (no sorting)
})
console.log(employees);

// Write a function which will return you first two times 1, then 2, then 3, then 5 and so on (Fibonacci numbers). Don’t use any global variables.

function listFibonacci(n) {
    for (var fibonacci = [1, 1], i = 1; i < n; i++)  
      fibonacci.push(fibonacci[i] + fibonacci[i - 1])
  
    return fibonacci.join(' ')
  }
  
  console.log(listFibonacci(10))
  

let fibonacci = function () {
  var arr = [0, 1];
  return function () {
      var num = arr[arr.length - 1],
          len = arr.length;
      arr.push(arr[len - 1] + arr[len - 2]);
      return num;
  };
}()

//test

for (let i = 0; i < 10; i++) {
  console.log(fibonacci());
}


// Find the biggest element in the array of numbers. Use function Math.max for this

var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];
imGreater = Math.max.apply(null, numberArray);
console.log(imGreater);//10

var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];
    //i just want the output
    var i,
        len = numberArray.length,
        imGreater = numberArray[0];//let set the greater as the first element
    for (i = 0; i < len; i++) {
        if (imGreater < numberArray[i]) {
            imGreater =  numberArray[i];
        }
    }
    console.log(imGreater);//10


// Transform array of numbers to array of functions that will alert that digits

var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];
numberArray = numberArray.map(function (val) {
    return function () {
        console.log(val);
    };
});
numberArray[1](); //2
numberArray[4](); //10 

for (i = 0; i < numberArray.length; i++) {
  (function (num) {
      numberArray[i] = function () {
          console.log(num);
      };
  }
  (numberArray[i])
  );
}
numberArray[1]();//2
numberArray[4]();//10

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  return Array.from(new Set(arr))
}

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era" 

//Bind 

let person = {
  name: 'Roman'
} 

function info(age, email) {
  console.log(`name: ${this.name}, age:${age}, email:${email}`)
}
//#1 with bind 
function bind(fn, context, ...rest) {
  return fn.bind( context, ...rest) 
}
bind(info, person, 14, 'gmail@.com')()

// #2 without mhetods 
function bind(fn, context, ...rest) {
  return function(...args) {
    const uniqId = Date.now().toString()
    
    context[uniqId] = fn
    const result = context[uniqId](...rest.concat(args))
    
    delete context[uniqId]

    return result
  } 
}

bind(info, person)(14, 'gmail@.com')
bind(info, person, 14 )('gmail@.com')
bind(info, person, 14,'gmail@.com' )()

