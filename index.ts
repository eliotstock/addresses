import { ethers } from "ethers";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your seed phrase: ", (seedPhrase) => {
  rl.close();

  const wallet = ethers.Wallet.fromPhrase(seedPhrase);

  console.log("Addresses:");

  // Broken, Bard-generated code. This only gets the first address.
  for (let i = 0; i < 5; i++) {
    const address = wallet.address;

    console.log(address);
  }
});
