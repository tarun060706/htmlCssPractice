const student = {
    fullname: "tarun",
    age: 25,
    roll_no: 3,
    mark: 500,
};

//student ["age"] = student ["age"] +1;
//console.log (student.age)

const product = {
    title: "ball pen",
    rating: 4,
    offer: 5,
    price: 270, 
};

//console.log (product);

//arithmetic operators

//let a = 5;
//let b = 2;

//console.log ("a =", a , "& b=",b,);
//console.log ("a + b = ", a + b);
//console.log ("a - b = ", a - b);
//console.log ("a * b = ", a * b);
//console.log ("a / b = ", a / b);
//console.log ("a % b = ", a % b);
//console.log ("a ** b = ", a ** b);

//unary opretors

//let a = 5;
//let b = 2;

//console.log ("a =", a , "& b=",b,);
//console.log ("a++=", a++);
//console.log ("a=",a);
//console.log ("++a=",++a);

//assignment operators 

//let a = 5;
//let b = 2;

//a += 4; //a= a+4
//console.log ("a=", a);
//a -= 4 ; //a= a-4 
//console.log ("a=", a);
//a *= 4; //a= a*4
//console.log ("a=", a);
//a %= 4; //a= a%4
//console.log ("a=", a);
//a **= 4; //a= a**4
//console.log ("a=", a);

//comparison operator
//let a = 5;
//let b = 2; 

//console.log ("5==2", a==b);
//console.log ("5 != 2", a != b);
//console.log ("5 === 2", a === b);
//console.log ("5 !== 2", a !== b);
//console.log ("5 > 2", a > b);
//console.log ("5 >= 2", a >= b);
//console.log ("5 < 2", a < b);
///onsole.log ("5 <= 2", a <= b);

//logical operator (logical AND)

//let a = 5;
//let b = 6;

//let cond1 = a < b; //true
//let cond2 = a === b; //false
//console.log ("cond1 && cond2 = ", cond1 && cond2);

//let c = 5;
//let d = 6;

//let cond3 = a < b; //true 
//let cond4 = a !== b; //true
//console.log ("cond3 && cond4 =", cond3 && cond4);

//logical operator (logical OR)

//let a = 5;
//let b = 6; 

//let cond1 = a < b; //true
//let cond2 = a === b; //false
//console.log ("cond1 || cond2 =", cond1 || cond2);

//logical operator (logical NOT)

//let a = 6;
//let b = 5;

//console.log ("!(6<5) =", !(a<b));
//console.log ("!(6>5) =", !(a>b));

//conditional statement(if)

//let age = 16;

/*if (age >= 18) {
    console.log ("you can vote");
}

if (age < 18) {
    console.log ("you CANNOT vote");
};*/

//let mode = "dark";
//let color;

/*if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";
}

console.log (color);*/

//conditional statement(if-else)

//let mode = "blue";
//let color;

/*if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}

console.log (color);*/

//let num = 10;

/*if (num % 2 === 0) {
    console.log (num, "is even");
} else {
    console.log (num, "is odd");
}*/

//conditional statement(else-if)

//let mode = "blue";
//let color;

/*if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "pink";
} else if (mode === "light") {
    color = "green";
} else {
    color = "white";
}

console.log (color);*/

//ternary operators

//let age = 15;

//let result = age >= 18 ? "adult" : "not adult";
//console.log(result);

//alert("hello");// one time pupup
//prompt("hello!!");//one time pupup
//let name = prompt("hello!!");
//console.log(name);

/*pratices js1*/
//let num =prompt("enter a number");
 /*if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
 } else {
    console.log(num, "is not a multiple of 5");
 }*/

//let score = 30;
//let grade;
/* if (score >= 90 && score <= 100) {
    grade = "A";
 } else if (score >= 70 && score <= 89) {
    grade = "B";
 } else if (score >= 60 && score <= 69) {
    grade = "c";
 } else if (score >= 50 && score <= 59) {
    grade = "D";
 } else {
    grade = "F";
 }
console.log ("according to your source,your grade was:", grade);*/

/*const scor =prompt ("enter your score (0-100):");
let grad;
 if (score >= 90 && score <= 100) {
    grade = "A";
 } else if (score >= 70 && score <= 89) {
    grade = "B";
 } else if (score >= 60 && score <= 69) {
    grade = "c";
 } else if (score >= 50 && score <= 59) {
    grade = "D";
 } else {
    grade = "F";
 }
console.log ("according to your source,your grade was:", grade);*/

//chapter 3(loops & strings)

//loops(for)

/*for (let count = 1; count <=5 ; count++) {
    console.log("welcome to web");
}*/
/*let sum = 0;
let n = 15;
for (let i = 1; i<= n; i++) {
    sum = sum + i;
}  
console.log ("sum=", sum);*/

//loops (while)

/*let count = 1;
while (count <= 6) {
    console.log("welcome to web");
    count++
}*/

//loops (do-while)

/*let i = 20;
do {
    console.log("hello!!!");
    i++
} while (i <= 10);*/

//loops (for-of)

/*let str = "tarunchetry";
let size = 0;
for (let name of str) {
    console.log ("name=", name);
    size++
}
console.log("name size=", size);*/


//loops (for-in)

/*let student2 = {
    fullname: "tarun",
    age: 25,
    roll_no: 3,
    mark: 500,
};

for (let information in student2) {
    console.log("information=", information, "value=",student2 [information]);
}*/

/*practice js 2*/

/*for (let num_e = 1; num_e <=100; num_e++) {
    if (num_e%2===0) {
        console.log("num_e=",num_e);
    }
}

for (let num_o = 1; num_o <=100; num_o++) {
    if (num_o % 2 !==0) {
        console.log("num_o=",num_o);
    }
}*/

/*for (let i = 1; i<=10; i++) {
    console.log ("i=",i);
}*/

//let gamenum = 25;
//let usernum = prompt ("Guest the game number : ");

/*while (usernum != gamenum) {
    usernum = prompt ("you entered the wrong number,Guest the number again : ");
}
console.log ("congratulation you entered the right number");*/

//strings 

//let str = "tarun";
 
let obj = {
    item: "pen",
    price:10,
};

console.log ("the cost of", obj.item, "is",obj.price, "rupees");
let output = `the cost of ${obj.item} is ${obj.price} rupeea`;
console.log (output);

console.log("tarun/nchetry");
console.log("tarun/tchetry");

//string method 

/*let str = "apnacollege";
str = str.toUpperCase()
console.log(str);

let str2 = "TARUNCHETRY";
str2 = str2.toLowerCase()
console.log(str2);

let str3 = "tarun chetry";
console.log (str3.slice(2,6));

let str4 = "tarun";
let str5 = "chetry";

console.log(str4.concat (str5));//or
console.log  (str4 + str5);

let str6 = "hello";
console.log (str6.replace("h","y"));

let str66 = "hello";
console.log (str66.replace("lo","p"));*/

//let fullname = prompt("enter your fullname without spaces");
//let usernume = "@" + fullname + fullname.length;
//console.log (usernume);


//chapter 4 (arrays)

//let heroes = ["ironman","hulk","thor","tarun"];
//console.log (heroes);
//let marks =[30,33,75,76,80,85,90,95];
//console.log (marks);

//looping over an array
/*let heroes = ["tarun","ironman","thor","tarun"];

for (let i = 0; i<heroes.length;i++) {
    console.log (heroes[i]);
}
//for of

let heroes1 = ["tarun","ironman","thor","tarun"];

for (let el of heroes1) {
    console.log(el);
}
let heroes2 = ["tarun","ironman","thor","tarun"];

for (let el of heroes2) {
    console.log(el.toUpperCase());
}*/
//practice 3

//let mark = [85,97,44,37,76,60];
//let sum = 0;
/*for (let val of mark) {
   sum = sum + val;
}
let avg = sum/mark.length;
console.log(`average marks of entire class = ${avg}`);*/

//let items = [250,645,300,900,50];

/*for (let i = 0; i < items; i++) {
    let offer = items[i] / 10;
    items[i]= items[i] - offer;
}
console.log (items);*/
//let i =0;
/*for (let val of items) {
    let offer = items[i] / 10;
     items[i]= items[i] - offer;
     console.log(`value after offer = ${items[i]}`);
     i++;
}*/

//arrays method (push)

//let FoodItems = ["tomato", "potato", "apple", "mango"];
//console.log(FoodItems);
//FoodItems.push ("chips", "burger", "panner");
//console.log(FoodItems);

//arrays method (pop)

//let FoodItems = ["tomato", "potato", "apple", "mango"];
//console.log(FoodItems);
//FoodItems.pop ();
//console.log(FoodItems);

//arrays method (tostrings)

//let FoodItems = ["tomato", "potato", "apple", "mango"];
//console.log(FoodItems);
//console.log(FoodItems.toString());

//arrays method (concat)

//let hdHeroes = ["thor","hulk","ironman"];
//let bdHeroes = ["superman","batman"];
//let indianHeroes = ["saktiman","krish"];

//let Heroes = hdHeroes.concat(bdHeroes, indianHeroes);
//console.log (Heroes);

//arrays method (unshift)

//let FoodItems = ["tomato", "potato", "apple", "mango"];
//console.log(FoodItems);
//FoodItems.unshift ("chips", "burger", "panner");
//console.log(FoodItems);

//arrays method (shift)

//let FoodItems = ["tomato", "potato", "apple", "mango"];
//console.log(FoodItems);
//FoodItems.shift ();
//console.log(FoodItems);

//arrays method (slice)

//let FoodItems = ["tomato", "potato", "apple", "mango"];
//console.log(FoodItems);
//console.log(FoodItems.slice(1,3));

//arrays method (splice)

//let arr = [1,2,3,4,5,6,7];
//arr.splice(2,2,101,102);
//console.log(arr);

//practice js 4 

//let companies = ["bloomberg", "microsoft", "uber", "google", "IBM", "netflix"];
//console.log(companies);
//companies.shift();
//console.log(companies);

//let companies1 = ["bloomberg", "microsoft", "uber", "google", "IBM", "netflix"];
//companies1.splice(2,1,"ola");
//console.log(companies1);

//let companies2 = ["bloomberg", "microsoft", "uber", "google", "IBM", "netflix"];
//console.log(companies2);
//companies2.push("amazon");
//console.log(companies2);

//function 

/*function Myfunction() {
    console.log("welcome to my web");
    console.log ("I love js");
}
Myfunction();*/

/*function Myfunction(msg) {
    console.log(msg);
}
Myfunction("I love js");*/

/*function sum (x,y) {
    console.log (x+y);
}*/

//arrow function

/*const ArrowSum = (a,b) => {
    return a+b;
};

const arrowMul = (a,b) => {
    return a * b;
};*/

//practice js 5

/*function countvow(str) {
    let count = 0;
    for (const char of str) {
      if (char === "a" || char === "e" || char ==="i" || char === "o" || char === "u") {
        count ++
      }
    }
   //console.log (count); or
   return count;
}*/

/*const countvow = (str) => {
    let count = 0;
    for (const char of str) {
      if (char === "a" || char === "e" || char ==="i" || char === "o" || char === "u") {
        count ++
      }
    }
   //console.log (count); or
   return count;
}*/

//foreach loop in arrays 

/*let arr = ["delhi", "pune", "mumbai"];

arr.forEach((val,idx,arr) => {
    console.log (val.toUpperCase(), idx, arr);
});*/

//practice js 6 

/*let num = [2,3,4,5,6,7,8,9];

num.forEach((num) => {
    console.log(num*num);
});*/

//some imp arrays 

/*let arr = [1,2,3,4,5,6,7,8,9];

arr.map((val) => {
    console.log(val);
});//or

let arr1 =  [1,2,3,4,5,6,7,8,9];

let newArr = arr.map((val) => {
    return val;
})

console.log(newArr);*/

//fliter method

/*let arr = [1,2,3,4,5,6,7,8,9];

let evenArr = arr.filter((val) => {
    return val % 2 ===0;
});

console.log(evenArr);*/

//reduce method  
 
/*let arr = [1,2,3,4,5,6,7,8,9];

const output = arr.reduce((ret , curr) => {
    return ret+curr;
})

console.log(output);*/

/*let arr = [1,2,3,4,5,6,7,8,9];

const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(output);*/

//practice 7 

/*let mark = [30,50,75,76,80,85,90,95];

let newMark = mark.filter((val) => {
    return val > 80;
});

console.log(newMark);

let n = prompt("enter your number");

let arr = []

for(let i=1; i<=n; i++) {
    arr[i-1] = i;
}
console.log(arr);

let arr1 = [1,2,3,4,5,6,7,8,9];

const output = arr1.reduce((ret , curr) => {
    return ret+curr;
});

console.log(output);

let arr11 = [1,2,3,4,5,6,7,8,9];

const output11 = arr11.reduce((ret , curr) => {
    return ret*curr;
});

console.log(output11);*/


//my new code...