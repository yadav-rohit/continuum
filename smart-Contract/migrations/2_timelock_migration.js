const timelock = artifacts.require("timelock");

module.exports = function (deployer) {
  deployer.deploy(timelock,"0x90DcB0dD70Ac1454003D7b7A2af9c5c797f29e78");
};