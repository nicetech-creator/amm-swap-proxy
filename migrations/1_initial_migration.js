require('dotenv').config()

const UniswapV2Router02 = artifacts.require("UniswapV2Router02");

module.exports = async function (deployer) {
  await deployer.deploy(UniswapV2Router02, process.env.FACTORY_ADDR, process.env.WETH_ADDR);
};
