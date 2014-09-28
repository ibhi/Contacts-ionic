angular.module('contacts.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Contacts',['$cordovaContacts' , function($cordovaContacts) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // var contacts = [
  //   { id: 0, name: 'Scruff McGruff' },
  //   { id: 1, name: 'G.I. Joe' },
  //   { id: 2, name: 'Miss Frizzle' },
  //   { id: 3, name: 'Ash Ketchum' }
  // ];

  // var options= { 
  //   filter: "",
  //   multiple: true,
  // };
  var contacts = [];
  var options = {
    fields: ['*']
  }

  $cordovaContacts.find(options).then(function(result){
    contacts = result;
    console.log(contacts);
  }, function(err){
    console.log("Error fetching contacts " + err);
  });

  return {
    all: function() {
      return contacts;
    },
    get: function(contactId) {
      // Simple index lookup
      return contacts[contactId];
    }
  }
}]);
