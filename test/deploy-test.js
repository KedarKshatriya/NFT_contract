const { expect } = require("chai");

describe("NFTbase", function() {
  it("Deploys the contract", async function() {
    const MyNFT = await ethers.getContractFactory("NFTbase");
    const mynft = await MyNFT.deploy();
    await mynft.deployed();
    expect(await mynft.name() === "MyNFT");
  });
});
