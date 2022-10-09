const current_users = ["soomro", "mohsin", "ali"];

const new_users = ["ALI", "farhan", "umar", "aasim", "mohsin"];

new_users.forEach((user) => {
  current_users.some((usr) => usr.toLowerCase() === user.toLowerCase())
    ? console.log(`${user} person will need to enter a new username`)
    : console.log(`${user} username is available.`);
});
