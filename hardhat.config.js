require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
      defaultNetwork: "rinkeby",

      networks: {

      rinkeby: {
        url: "",
        accounts: [""]
        }
      },

    solidity: {
      version: "0.8.0"
    },
};

