describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter favorite foods of users', function () {
        var faker = [{
          name: 'Jaclyn',
          favoriteFood: 'Olives'
        }, {
          name: 'Ore',
          favoriteFood: 'Black Beans'
        }, {
          name: 'Joseph',
          favoriteFood: 'French Toast Bagels'
        }];

    var results = $filter('favoriteFood')(faker, 'French Toast Bagels');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Joseph');
  });
	
});
