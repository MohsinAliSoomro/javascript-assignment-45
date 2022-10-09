const animals = ["Parriot", "Horse", "Dog"];

animals.forEach((animal) => {
  console.log(animal);
});

console.log("\n");
animals.forEach((animal) => {
  console.log(
    animal === "dog"
      ? "dog is good pet. dog is most sincere animal with humans."
      : animal === "cat"
      ? "cat is great pet cat eat rats of whole house."
      : "Horse is Good Animal. Horseis good for riding."
  );
});
