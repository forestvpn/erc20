import { expect } from "chai";
import { ethers } from "hardhat";

describe("ForestVPN", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("ForestVPN");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("ForestVPN");
  });

  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("ForestVPN");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
