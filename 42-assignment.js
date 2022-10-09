let magiciansList = ["john", "smith", "lorem"];

function makeGreat(magicians) {
  magicians.forEach((magician, i) => {
    magiciansList[i] = `great ${magician}`;
  });
}

makeGreat(magiciansList);

function showMagicians(magicians = []) {
  magicians?.forEach((magician) => console.log(magician));
}

showMagicians(magiciansList);
