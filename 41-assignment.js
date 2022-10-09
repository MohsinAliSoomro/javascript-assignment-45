const magiciansList = ["john", "smith", "lorem"];

function showMagicians(magicians) {
  console.log("\nPrinting Magician List\n");
  magicians.forEach((magician) => console.log(magician));
}

showMagicians(magiciansList);
