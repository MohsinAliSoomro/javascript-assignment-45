const roles = ["ADMIN", "CHIEF", "MODERATOR", "USER", "OPERATOR", "DESIGNER"];

if (roles.some((role) => role === "ADMIN")) {
  console.log(`Hello admin!, would you like to see a status report?
`);
} else {
  console.log("Hello Mr User,thank you for logging in again");
}

//Remove all of the usernames from your array, and make sure the correct message is printed.

while (roles.length != 0) {
  roles.pop();
}

// If the list is empty, print the message We need to find some users!

if (roles.length === 0) {
  console.error("we need to find some users!");
}
