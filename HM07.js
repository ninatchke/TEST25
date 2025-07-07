// 1. რიცხვების დაბეჭდვა 2-დან 8-მდე
console.log("დავალება 1: რიცხვები 2-დან 8-მდე");
for (let i = 2; i <= 8; i++) {
  console.log(i);
}
console.log(""); 

// 2. 5-დან 35-მდე ყოველი მეოთხე რიცხვი
console.log("დავალება 2: ყოველი მეოთხე რიცხვი 5-დან 35-მდე");
for (let i = 5; i <= 35; i += 4) {
  console.log(i); 
}
console.log("");

// 3. 3-დან 8-მდე რიცხვების ნამრავლი
console.log("დავალება 3: ნამრავლი 3-დან 8-მდე");
let product = 1;
for (let i = 3; i <= 8; i++) {
  product *= i;
}
console.log(product);
console.log("");

// 4. Person ობიექტის შექმნა და სრული სახელი
console.log("დავალება 4: Person-ის სრული სახელი");
const person = {
  firstName: "Nino",
  lastName: "Natchkebia",
  age: 34
};
console.log(person.firstName + " " + person.lastName);
console.log(""); 

// 5. Person-ის ყველა property-ის მნიშვნელობა
console.log("დავალება 5: Person-ის თითოეული property:");

for (let key in person) {
  console.log(person[key]);
  }

  //6. მასივის შექმნა
  console.log("დავალება 6: მასივის შექმნა:");

 const fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
  console.log(fruit);
}

 //7. ხილის დამატება
 console.log("დავალება 7. ხილის დამატება");
fruits.unshift("Grapes");
fruits.push("Pineapples");
{
  console.log(fruits);
  }

//8. დან 34 მდე რიცხვების ჯამი
  console.log ("დავალება 8. 1დან 34 მდე რიცხვების ჯამი")
 let sum = 0;
for (let i = 1; i <= 34; i++) {
  sum += i;  
}
console.log(sum);