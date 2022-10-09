let magiciansList = ["john", "smith", "lorem"];

function makeGreat(magicians) {
  const newArr = [];
  magicians.forEach((magician, i) => {
    newArr.push(`great ${magician}`);
  });
  return newArr;
}

const new_Array = makeGreat(magiciansList);

function showMagicians(magicians = []) {
  magicians?.forEach((magician) => console.log(magician));
}
console.log("Old Array");
showMagicians(magiciansList);
console.log("\nNew Array");
showMagicians(new_Array);
