const numberOfArguments = process.argv.length - 2;

if (numberOfArguments === 0) {
  console.log("No argument");
} else if (numberOfArguments === 1) {
  console.log("Argument found");
} else {
  // This case handles any number of arguments greater than 1.
  console.log("Arguments found");
}
