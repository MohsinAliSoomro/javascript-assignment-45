console.log(
  "---------------------------\nProgram 1 \n---------------------------"
);
const person = "moHsIn aLI";

const toTitleCase = (text) => {
  return text
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.substring(1).toLowerCase())
    .join(" ");
};

console.log(`Lower Case : ${person.toLowerCase()}`);

console.log(`Upper Case : ${person.toUpperCase()}`);

console.log(`Title Case : ${toTitleCase(person)}`);

console.log(
  "---------------------------\nProgram 2 \n---------------------------"
);

console.log(`Addition of 4+4 = ${4 + 4}`);

console.log(`Subtraction of 12-4 = ${12 - 4}`);

console.log(`Multiplication of 2*4 = ${2 * 4}`);

console.log(`Division of 16/4 = ${16 / 2}`);
