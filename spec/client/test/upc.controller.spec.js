(function() {
  'use strict';

  let expect = chai.expect;

  describe ('UpcController', function() {

    let UpcController;
    let mockUpcService = {};



    beforeEach(module('game'));

    beforeEach(module(function($provide) {
      $provide.value('UpcService', mockUpcService);
    }));



    beforeEach(inject(function($controller) {

      mockUpcService.sendUpcData = function sendUpcData() {
        return Promise.resolve();

      };

    UpcController = $controller('UpcController');

    it('should reject an argument that is not a string', function() {
      let result = UpcController.sendUpcData(1);
      expect(result).to.equal('undefined');
    });

    it('should return an object', function() {
      let result = UpcController.sendUpcData({test: 'test string'});
      expect(result).to.be.an('object');
    });

    it('should handle an empty object', function() {
      let result = UpcController.sendUpcData();
      expect(result).to.equal('undefined');
    });



    }));
  });


}());
