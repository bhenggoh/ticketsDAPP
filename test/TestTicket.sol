// This Solidity script is used to test the Tickets.sol contract. 

pragma solidity ^0.5.0;

// The Assert helper allows us to use various Asserts (eg Equality, inequality etc) to 
// conduct our tests.
import "truffle/Assert.sol";

// When running tests, Truffle will deploy a fresh instance of the contract being tested 
// to the blockchain. This smart contract gets the address of the deployed contract.
import "truffle/DeployedAddresses.sol";

import "../contracts/Ticket.sol";

contract TestTicket {

    // Get the address of the contract to be tested
    Ticket ticket = Ticket(DeployedAddresses.Ticket());

    // We will use this as the ticket ID to test the contract
    uint expectedTicketID = 5;

    // We will use this as the buyer of the ticket (ID = 5)
    address expectedBuyer = address(this);

    // Function to test the buyTicket() function in Tickets.sol
    function testBuyTicket() public {

        // Call the buyTicket() function with the ticket ID of 5
        uint returnedId = ticket.buyTicket(expectedTicketID);

        // Assert the returned value to be equal to 5.
        // If test fail, the print the message.
        Assert.equal(returnedId, expectedTicketID, 
            "Purchased Ticket ID should match what is returned.");

    }

    // Function to test the retrieval of a buyer information
    function testGetBuyerAddressByTicketID() public {
        
        // We get the Address of the buyer by supplying the ticket ID = 5
        // NOTE -- The "buyers" array is declared as a "public" array in Tickets.sol. 
        // So, it is possible to just call ticket.buyers to access the array directly.
        address buyer = ticket.buyers(expectedTicketID);

        // Assert the returned value to be equal to buyer.
        // If test fail, the print the message.
        Assert.equal(buyer, expectedBuyer, 
            "Buyer of the ticket does not match");
    }


    // Function to test the getBuyers() function in Tickets.sol 
    function testGetBuyerAddressByTicketIDInArray() public {

        // Store buyers in memory rather than contract's storage
        address[16] memory buyers = ticket.getBuyers();

        // Assert the returned array to be equal to buyer.
        // If test fail, the print the message.
        Assert.equal(buyers[expectedTicketID], expectedBuyer, 
            "Buyer of the ticket does not match");
    }

}



