let guests = ["Mohsin", "Ibrar", "Rafiq"];

guests.forEach((guest) =>
  console.log(`Hello ${guest}! \nI would like to Dinner with you!\n`)
);

console.log(`Guest who Can't Attend Dinner => ${guests[1]}`);

guests[1] = "Shahzad";

guests.forEach((guest) =>
  console.log(`Hello ${guest}! \nI would like to Dinner with you!\n`)
);
