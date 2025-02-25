const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SingleSwap", function () {
  let singleSwap, accounts, weth, dai, usdc;

  before(async () => {
    accounts = await ethers.getSigners();

    // Convert addresses to checksummed format
    const checksummedWETH9 = ethers.utils.getAddress(WETH9);
    const checksummedDAI = ethers.utils.getAddress(DAI);
    const checksummedUSDC = ethers.utils.getAddress(USDC);

    // Deploy SingleSwap contract
    const SingleSwapFactory = await ethers.getContractFactory("SingleSwap");
    singleSwap = await SingleSwapFactory.deploy();
    await singleSwap.waitForDeployment();

    // Get token contracts
    weth = await ethers.getContractAt("IWETH", checksummedWETH9);
    dai = await ethers.getContractAt("IERC20", checksummedDAI);
    usdc = await ethers.getContractAt("IERC20", checksummedUSDC);
  });

  // Swap Input Function
  it("swapExactInputSingle", async () => {
    const amountIn = ethers.parseUnits("1", 18);

    // Deposit WETH and approve swap contract
    await weth.deposit({ value: amountIn });
    await weth.approve(singleSwap.target, amountIn);

    // Swap WETH for DAI
    await singleSwap.swapExactInputSingle(amountIn, accounts[0].address);

    // Log DAI balance
    console.log("DAI Balance:", (await dai.balanceOf(accounts[0].address)).toString());
  });

  // Swap Output Function
  it("swapExactOutputSingle", async () => {
    const wethAmountInMax = ethers.parseUnits("1", 18);
    const daiAmountOut = ethers.parseUnits("100", 18);

    // Deposit WETH and approve swap contract
    await weth.deposit({ value: wethAmountInMax });
    await weth.approve(singleSwap.target, wethAmountInMax);

    // Swap WETH for exact amount of DAI
    await singleSwap.swapExactOutputSingle(daiAmountOut, wethAmountInMax, accounts[0].address);

    // Log DAI balance
    console.log("DAI Balance:", (await dai.balanceOf(accounts[0].address)).toString());
  });
});
