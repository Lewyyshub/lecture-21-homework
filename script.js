// ex 1 //
for (let index = 1; index <= 15; index++) {
  console.log(index);
  if (index > 5) {
    console.log("დიდია 5-ზე");
  }
}
// ex 2 //
let numbers = [3, 6, 9, 12, 15];
let evenNumbers = [];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
    evenNumbers.push(numbers[index]);
  }
}
console.log(evenNumbers);

// ex 3 //
let text = "I Want To Be A Hacker xD";
for (let index = 0; index < text.length; index++) {
  console.log(text[index]);
  if (text[index] === "a") {
    console.log("ეს არის ასობგერა ა");
  }
}

// ex 4 //
let words = ["red", "green", "blue", "yellow"];
let longWords = [];
for (let index = 0; index < words.length; index++) {
  if (words[index].length > 5) {
    longWords.push(words[index]);
  }
}
console.log(longWords);

// ex 5 //
for (let index = 1; index < 50; index++) {
  if (index % 7 === 0) {
    console.log(index + "გაყოფადია 7-ზე");
  }
}

// ex 6 //
let nums = [4, 8, 12, 16, 20];
for (let index = 0; index < nums.length; index++) {
  let results = nums[index] * 2;
  console.log(results);
}

// ex 7 //
let javaScript = "javaScript";
for (let index = 0; index < javaScript.length; index++) {
  console.log(javaScript[index]);
  if (javaScript[index] === "j") {
    break;
  }
}

// ex 8 //
// ყველა რატო არ გამოაქვს? :დ //
let numss = [5, 10, 15, 20, 25];
for (let index = 0; index < numss.length; index++) {
  if (nums[index] % 5 === 0) {
    console.log(numss[index]);
  }
}
// ყველა რატო არ გამოაქვს? :დ //

// ex 9 //
let sentance = "hello wordl";
for (let index = 0; index < sentance.length; index++) {
  if (sentance[index] !== "o") {
    console.log(sentance[index]);
  }
}

// ex 10 //
let Evens = [1, 2, 3, 4, 5, 6];
let EvenResults = 0;

for (let index = 0; index < Evens.length; index++) {
  if (Evens[index] % 2 === 0) {
    EvenResults += Evens[index];
  }
}
console.log(EvenResults);

// ex 11 //
let multiyply = 10;
for (let index = 1; index <= 10; index++) {
  console.log(multiyply + " x " + index + " = " + multiyply * index);
}

// ex 12 //
let addunoWhatToCreate = [2, 7, 4, 9, 5];
let resu = [];
for (let index = 0; index < addunoWhatToCreate.length; index++) {
  if (addunoWhatToCreate[index] > 4) {
    resu.push(addunoWhatToCreate[index] * 3);
  }
}
console.log(resu);

// ex 13 //

for (let index = 1; index <= 30; index++) {
  console.log(index);
  if (index > 10) {
    console.log("დამატებითი ტექსტი");
  }
}

// ex 14 //

let word = "frontend";

for (let index = 0; index < word.length; index++) {
  if (word[index] === "e") {
    console.log("ნაპოვნია E", word[index]);
  } else {
    console.log("E ვერ მოიძებნა", word[index]);
  }
}

// ex 15 //

let masive = [100, 200, 300, 400, 500];
let returnedMasive = [];
for (let index = 0; index < masive.length; index++) {
  if (masive[index] < 250) {
    returnedMasive.push(masive[index]);
  }
}
console.log(returnedMasive);
