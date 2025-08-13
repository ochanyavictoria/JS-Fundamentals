const firstArgument = process.argv[2];

// Use a conditional to check if an argument exists.
if (firstArgument === undefined) {
  // This block runs if no argument was provided.
  console.log("No argument");
} else {
  // This block runs if an argument was provided.
  console.log(firstArgument);
}
