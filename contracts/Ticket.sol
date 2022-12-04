pragma solidity ^0.5.0;

contract Ticket {

    // Array containing each ticket's buyer's Ethereum Address.
    // Index to array is 0 to 15 (16 tickets)
    address[16] public buyers;

    // Buy ticket
    function buyTicket(uint _ticketID) public returns (uint) {

        // Make sure that the _ticketID is between 0 and 15 
        require(_ticketID >= 0 && _ticketID <= 16);

        // Write the buyer's Address into the array
        buyers[_ticketID] = msg.sender;

        // Return the _ticketID for confirmation
        return _ticketID;
    }

    // Get all the buyers
    function getBuyers() public view returns (address[16] memory) {

        // Return the array of buyers
        return buyers;
    }


}