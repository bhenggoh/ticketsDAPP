// This is the script to deploy the Ticket.sol contract.

// Get the contract information from Ticket.json
var Ticket = artifacts.require("Ticket");

// Deploy the contract.
module.exports = function(deployer) {
  deployer.deploy(Ticket);
};