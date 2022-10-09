const roles = ["ADMIN", "CHIEF", "MODERATOR", "USER", "OPERATOR", "DESIGNER"];

if (roles.some((role) => role === "ADMIN")) {
  console.log(`Hello ADMIN!, would you like to see a status report?
`);
} else {
  console.log("Hello Mr User,thank you for logging in again");
}
