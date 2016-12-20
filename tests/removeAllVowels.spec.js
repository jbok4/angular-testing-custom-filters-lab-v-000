describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));
    it('should remove all vowels from a string', function () {

    var results = $filter('removeAllVowels')("Ahoy maties, I'm a string of letters.");

    expect(results).toEqual("hy mts, 'm  strng f lttrs.");
  });

});