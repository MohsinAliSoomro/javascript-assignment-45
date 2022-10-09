let favPlaces = ["New York", "Barcelona", "Florida", "Makka", "Madina"];

console.log("Printing Original State of Array");
favPlaces.forEach((place) => console.log(place));

console.log("\nSorted in Alphabetical Order");
JSON.parse(JSON.stringify(favPlaces))
  .sort()
  .forEach((place) => console.log(place));

console.log("\nPrinting Original Array Order");
favPlaces.forEach((place) => console.log(place));

console.log("\nSorted in reverse Alphabetical Order");
JSON.parse(JSON.stringify(favPlaces))
  .sort()
  .reverse()
  .forEach((place) => console.log(place));

console.log("\nPrinting Original Array Order");
favPlaces.forEach((place) => console.log(place));

console.log("\nReverse the order of your list");
favPlaces.reverse().forEach((place) => console.log(place));

console.log("\nReversed the order of your list again");
favPlaces.reverse().forEach((place) => console.log(place));

console.log("\nSort your array so it’s stored in alphabetical order");
favPlaces.sort().forEach((place) => console.log(place));

console.log(
  "\nSort to change your array so it’s stored in reverse alphabetical order"
);
favPlaces.reverse().forEach((place) => console.log(place));
