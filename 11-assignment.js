//Declare Names Variable Array.
const names = ["Mohsin", "Ibrar Ahmed", "Shahzad Ali", "Abdul Ali"];

console.log("Iteration of Names Array With For Loop");

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("\nIteration of Names Array with Map");
const names2 = names.map((name) => {
  console.log(name);
  return name;
});
console.log("\nIteration of Names Array with forEach");
names2.forEach((name) => console.log(name));

// Difference B/W For each & Map is that Foreach Doesn't return any value & Map return Value.
