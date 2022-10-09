let guests = ["Mohsin", "Ibrar", "Rafiq"];

guests.forEach((guest) =>
  console.log(`Hello ${guest}! \nI would like to Dinner with you!\n`)
);

console.log(`Guest who Can't Attend Dinner => ${guests[1]}\n`);

guests[1] = "Shahzad";

guests.forEach((guest) =>
  console.log(`Hello ${guest}! \nI would like to Dinner with you!\n`)
);

console.log("you found a bigger dinner table\n");

guests.unshift("Nadir");

guests.splice(2, 0, "Ali");

guests.forEach((guest) =>
  console.log(`Hello ${guest}! \nI would like to Dinner with you!\n`)
);

console.log("you can invite only two people for dinner!\n");

guests.forEach(() => {
  if (guests.length !== 2) {
    console.log(`Hello ${guests.pop()}! I Can't Invite you into dinner \n`);
  }
});

guests.forEach((guest) =>
  console.log(`Hello ${guest}! \nYou're still Invited to Dinner with you!\n`)
);

while (guests?.length !== 0) {
  guests.pop();
}

guests.forEach((guest) => console.log(guest));
