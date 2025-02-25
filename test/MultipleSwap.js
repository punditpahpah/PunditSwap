const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultipleSwap", function () {
  let multipleSwap, accounts, weth, dai, usdc;

  before(async () => {
    accounts = await ethers.getSigners();

    // Use correct ethers method
    const checksummedWETH9 = ethers.getAddress(WETH9);
    const checksummedDAI = ethers.getAddress(DAI);
    const checksummedUSDC = ethers.getAddress(USDC);

    // Deploy the MultipleSwap contract
    const MultipleSwapFactory = await ethers.getContractFactory("MultipleSwap");
    multipleSwap = await MultipleSwapFactory.deploy();
    await multipleSwap.waitForDeployment();

    // Get contract instances
    weth = await ethers.getContractAt("IWETH", checksummedWETH9);
    dai = await ethers.getContractAt("IERC20", checksummedDAI);
    usdc = await ethers.getContractAt("IERC20", checksummedUSDC);
  });

  it("swapExactInputSingle", async () => {
    const amountIn = ethers.parseUnits("1", 18);

    // Deposit WETH and approve
    await weth.deposit({ value: amountIn });
    await weth.approve(multipleSwap.target, amountIn);

    // Call swap function
    await multipleSwap.swapExactInputSingle(amountIn, accounts[0].address);

    // Print balance
    console.log("DAI Balance:", (await dai.balanceOf(accounts[0].address)).toString());
  });

  it("swapExactOutputSingle", async () => {
    const wethAmountInMax = ethers.parseUnits("1", 18);
    const daiAmountOut = ethers.parseUnits("100", 18);

    // Deposit WETH and approve
    await weth.deposit({ value: wethAmountInMax });
    await weth.approve(multipleSwap.target, wethAmountInMax);

    // Call swap function
    await multipleSwap.swapExactOutputSingle(daiAmountOut, wethAmountInMax, accounts[0].address);

    // Print balance
    console.log("DAI Balance:", (await dai.balanceOf(accounts[0].address)).toString());
  });
});
