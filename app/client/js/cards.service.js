(function() {
  'use strict';
  angular.module('game').factory('CardsService', CardsService);

  CardsService.$inject = ['$http', 'UserService', 'UpcService'];


  /**
  * Creates the Card Service
  * @param {Function} $http       Service that allows ajax calls
  * @param {Function} UserService Contains the function to retrieve the auth token
  */
  function CardsService($http, UserService, UpcService) {
    let token = UserService.getToken();

    /**
    * Gets all the cards from the api then gets the last object inside
    * @param  {String} upc  from the UPC data entered
    * @return {Promise}     [description]
    */
    function getOneCard(upc) {
      console.log(upc);
      return $http({
        url: '/api/card_assignments',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        data: {
          upc: upc
        }
      })
      .then(function handleResponse(response) {
        let cards = response.data;
        let card = cards[0];
        return card;
      });
    }

    /**
    * Retrieves the all the cards from the api
    * @param  {String} upc [description]
    * @return {Array}     [description]
    */
    function getAllCards() {
      return $http({
        url: '/api/card_assignments',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
      .then(function handleResponse(response) {
        return response.data;
      });
    }

    return {
      getAllCards: getAllCards,
      getOneCard: getOneCard
    };

  }
}());
