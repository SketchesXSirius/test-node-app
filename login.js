const readline = require("readline");

// Fake user database (for testing)
const users = [
  { username: "admin", password: "1234" },
  { username: "user", password: "password" }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Login System ===");

rl.question("Username: ", (username) => {
  rl.question("Password: ", (password) => {

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      console.log("\nLogin successful! Welcome,", user.username);
    } else {
      console.log("\nLogin failed: Invalid username or password");
    }

    rl.close();
  });
});
