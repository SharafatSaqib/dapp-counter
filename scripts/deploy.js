const { ethers } = require('hardhat');

async function main() {
  // Load the contract
  const Counter = await ethers.getContractFactory('Counter');

  // Deploy the contract
  const counter = await Counter.deploy('My Counter', 1);

  // Access the deployed contract directly
  console.log('Counter deployed to:', counter.address);

  // Interact with the deployed contract
  const initialCount = await counter.getCount();
  console.log('Initial Count:', initialCount);

  const newName = await counter.setName('New Counter Name');
  console.log('New Name:', newName);

  const updatedCount = await counter.increment();
  console.log('Updated Count:', updatedCount);

  // Note: You may also want to use .toString() if you need a string representation
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
