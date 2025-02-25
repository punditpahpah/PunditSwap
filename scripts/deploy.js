const hre = require("hardhat");

async function main() {
  // Compile the contracts
  await hre.run("compile");

  // Deploy BooToken
  const BooToken = await hre.ethers.getContractFactory("BooToken");
  const booToken = await BooToken.deploy();
  await booToken.waitForDeployment();
  console.log(`BooToken deployed to: ${await booToken.getAddress()}`);

  // Deploy LifeToken
  const LifeToken = await hre.ethers.getContractFactory("LifeToken");
  const lifeToken = await LifeToken.deploy();
  await lifeToken.waitForDeployment();
  console.log(`LifeToken deployed to: ${await lifeToken.getAddress()}`);

  // Deploy SingleSwap
  const SingleSwap = await hre.ethers.getContractFactory("SingleSwap");
  const singleSwap = await SingleSwap.deploy();
  await singleSwap.waitForDeployment();
  console.log(`SingleSwap deployed to: ${await singleSwap.getAddress()}`);

  // Deploy MultiSwap
  const MultipleSwap = await hre.ethers.getContractFactory("MultipleSwap");
  const multipleSwap = await MultipleSwap.deploy();
  await multipleSwap.waitForDeployment();
  console.log(`MultipleSwap deployed to: ${await multipleSwap.getAddress()}`);
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
