const hre = require("hardhat");

async function main() {
  // Compile the contracts
  await hre.run('compile');

  // Deploy the contract
  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const contract = await MyContract.deploy();

  await contract.deployed();

  console.log(`Contract deployed to: ${contract.address}`);
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
