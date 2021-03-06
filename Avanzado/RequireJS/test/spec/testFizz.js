(function () {
    'use strict';


    require.config({
     	baseUrl:'../app/scripts/',
    	nodeRequire: require
    });


    describe('Test de Fizz', function () {

    	var mod;
    	beforeEach(function(done){
    		require(['Fizz'], function(module){
    			mod = module;
    			done();
    		});
    	});

        describe('test metodo', function () {
            it('isFizz(n) should return false if n%3!=0', function () {
            	assert.isFalse(mod.isFizz(), 'false');
            	assert.isFalse(mod.isFizz(1), 'false');
            	assert.isFalse(mod.isFizz(2), 'false');
            	assert.isFalse(mod.isFizz(4), 'false');
            	assert.isFalse(mod.isFizz(5), 'false');
            	assert.isFalse(mod.isFizz(7), 'false');
            	assert.isFalse(mod.isFizz(8), 'false');
            	assert.isFalse(mod.isFizz(10), 'false');
            	assert.isFalse(mod.isFizz(11), 'false');
            	assert.isFalse(mod.isFizz(13), 'false');
            });
        });

        describe('test metodo', function () {
            it('isFizz(n) should return true if n%3==0', function () {
            	assert.isTrue(mod.isFizz(3), 'true');
            	assert.isTrue(mod.isFizz(6), 'true');
            	assert.isTrue(mod.isFizz(9), 'true');
            	assert.isTrue(mod.isFizz(42), 'true');
            	assert.isTrue(mod.isFizz(45), 'true');
            	assert.isTrue(mod.isFizz(78), 'true');
            	assert.isTrue(mod.isFizz(81), 'true');
            	assert.isTrue(mod.isFizz(141), 'true');
            	assert.isTrue(mod.isFizz(270), 'true');
            });
        });

        describe('test metodo writeFizz', function () {
            it('should return Fizz', function () {
            	assert.equal(mod.writeFizz(), 'Fizz');
            });
        });

    });
})();
