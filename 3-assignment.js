const person = "aLi SooMro";

// UDF function to Convert String to TitleCase
const toTitleCase = (text) => {
  return text
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.substring(1).toLowerCase())
    .join(" ");
};

console.log(`Lower Case : ${person.toLowerCase()}`);

console.log(`Upper Case : ${person.toUpperCase()}`);

console.log(`Title Case : ${toTitleCase(person)}`);
