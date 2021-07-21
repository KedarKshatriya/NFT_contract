// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
    // Code here
    const NFTbase = await ethers.getContractFactory("NFTbase");
    const nftbase = await NFTbase.deploy();
    
    console.log("MyNFT deployed to:", nftbase.address);
    let link = "https://rinkeby.etherscan.io/address/"+nftbase.address
    console.log("Can be viewed at:",link)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
