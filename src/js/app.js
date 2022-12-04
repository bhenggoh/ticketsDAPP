// This JS file ties in the Front End, web3 and Smart Contract together.

App = {

  // Initialize some variables first
  web3Provider: null,
  contracts: {},

  // init function to get tickets information from the JSON file and write to the HTML (ID = ticketTemplate)
  init: async function() {
    // Get from JSON file
    $.getJSON('../tickets.json', function(data) {
      var ticketsRow = $('#ticketsRow');
      var ticketTemplate = $('#ticketTemplate');

      for (i = 0; i < data.length; i ++) {
        ticketTemplate.find('.panel-title').text(data[i].name);
        ticketTemplate.find('img').attr('src', data[i].picture);
        ticketTemplate.find('.price').text(data[i].price);
        ticketTemplate.find('.date').text(data[i].date);
        ticketTemplate.find('.location').text(data[i].location);
        ticketTemplate.find('.btn-buy').attr('data-id', data[i].id);

        ticketsRow.append(ticketTemplate.html());
      }
    });

    // Once done, call initWeb3()
    return await App.initWeb3();
  },

  // initweb3 function to initialize the web3 module accordingly.
  initWeb3: async function() {
    // If it is a modern dApp browser
    // or more recent versions of MetaMask where an Ethereum provider is injected into the window object.
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request access to the account
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Else if it is a legacy dApp browsers
    // ie an older dapp browser (like Mist or an older version of MetaMask)
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // Else if no injected web3 instance is detected, fall back to Ganache
    // This fallback is fine for development environments, but insecure and not suitable for production.
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    
    // Create instance of web3 object here
    web3 = new Web3(App.web3Provider);

    // Now call initContract() to instantiate the contract
    return App.initContract();
  },

  // initContract function to instantiate our smart contract so web3 knows where to find it and how it works.
  initContract: function() {

    // Get the contract JSON file data
    $.getJSON('Ticket.json', function(data) {
      // We first retrieve the artifact file for our smart contract. 
      // Artifacts are information about our contract such as its deployed address and 
      // Application Binary Interface (ABI). 
      // The ABI is a JavaScript object defining how to interact with the contract including 
      // its variables, functions and their parameters.
      var TicketArtifact = data;
      // Once we have the artifacts in our callback, we pass them to TruffleContract(). 
      // This creates an instance of the contract we can interact with.
      App.contracts.Ticket = TruffleContract(TicketArtifact);
    
      // Set the provider for our contract
      App.contracts.Ticket.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the relevant tickets as bought
      return App.markBought();
    });
    
    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-buy', App.handleBuy);
  },

  // markBought function to mark tickets that were already bought previously.
  // We've encapsulated this in a separate function since we'll need to update the UI 
  // any time we make a change to the smart contract's data.
  markBought: function() {
    
    // We first declare the variable ticketInstance outside of the smart contract calls so we can 
    // access the instance after initially retrieving it.
    var ticketInstance;

    // We access the deployed Tickets contract, then call getBuyers() on that instance.
    // Using call() allows us to read data from the blockchain without having to send a full 
    // transaction, meaning we won't have to spend any ether.
    App.contracts.Ticket.deployed().then(function(instance) {
      ticketInstance = instance;
    
      return ticketInstance.getBuyers.call();

    }).then(function(buyers) {

      // After calling getBuyers(), we then loop through all of them, checking to see if an address is 
      // stored for each ticket. 
      // Since the array contains address types, Ethereum initializes the array with 16 empty addresses. 
      // This is why we check for an empty address string rather than null or other false value.
      // If the ticket is NOT 0x0000000..... it means it has been bought.
      for (i = 0; i < buyers.length; i++) {
        if (buyers[i] !== '0x0000000000000000000000000000000000000000') {
          // We disable its BUY button and change the button text to "BOUGHT", so the user gets some feedback.
          $('.panel-ticket').eq(i).find('button').text('BOUGHT').attr({'disabled':true,'background-color':'#808080'});
        }
      }

    }).catch(function(err) {
      console.log(err.message);
    });
    
  },

  // handleBuy function handles the ticket purchase operation
  handleBuy: function(event) {

    event.preventDefault();

    var ticketID = parseInt($(event.target).data('id'));

    var ticketInstance;

    // We use web3 to get the user's accounts. In the callback after an error check, 
    // we then select the first account.
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }   
      var account = accounts[0];
    
      // We get the deployed contract as we did above and store the instance in ticketInstance. 
      App.contracts.Ticket.deployed().then(function(instance) {
        ticketInstance = instance;
    
        // This time we will send a transaction instead of a call. 
        // Transactions require a "from" address and have an associated cost. 
        // This cost, paid in ether, is called gas. 
        // The gas cost is the fee for performing computation and or storing data in a smart contract. 
        // We send the transaction by executing the buyTicket() function with both the ticket ID and 
        // an object containing the account address, which we stored earlier in account.
        return ticketInstance.buyTicket(ticketID, {from: account});
      }).then(function(result) {
        // The result of sending a transaction is the transaction object. 
        // If there are no errors, we proceed to call our markBought() function to sync the UI with 
        // our newly stored data.
        return App.markBought();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
    
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
