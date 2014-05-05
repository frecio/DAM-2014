(function () {
    'use strict';


    require.config({
     	baseUrl:'../app/scripts/',
    	nodeRequire: require
    });


    describe('Test de Buzz', function () {

    	var mod;
    	beforeEach(function(done){
    		require(['Buzz'], function(module){
    			mod = module;
    			done();
    		});
    	});

        describe('test metodo isBuzz', function () {
            it('isBuzz(n) should return false if n%5!=0', function () {
            	assert.isFalse(mod.isBuzz(), 'false');
            	assert.isFalse(mod.isBuzz(1), 'false');
            	assert.isFalse(mod.isBuzz(2), 'false');
            	assert.isFalse(mod.isBuzz(3), 'false');
            	assert.isFalse(mod.isBuzz(4), 'false');
            	assert.isFalse(mod.isBuzz(6), 'false');
            	assert.isFalse(mod.isBuzz(7), 'false');
            	assert.isFalse(mod.isBuzz(8), 'false');
            	assert.isFalse(mod.isBuzz(9), 'false');
            	assert.isFalse(mod.isBuzz(11121212), 'false');
            	assert.isFalse(mod.isBuzz(1734343434), 'false');
            	assert.isFalse(mod.isBuzz(42111111111111), 'false');

            });
        });

        describe('test metodo isBuzz', function () {
            it('isBuzz(n) should return true if n%5==0', function () {
            	assert.isTrue(mod.isBuzz(5), 'true');
            	assert.isTrue(mod.isBuzz(10), 'true');
            	assert.isTrue(mod.isBuzz(55), 'true');
            	assert.isTrue(mod.isBuzz(80), 'true');
            	assert.isTrue(mod.isBuzz(25), 'true');
            	assert.isTrue(mod.isBuzz(12345), 'true');
            	assert.isTrue(mod.isBuzz(16766760), 'true');
            	assert.isTrue(mod.isBuzz(44444443330), 'true');
            	assert.isTrue(mod.isBuzz(125000000005), 'true');
            });
        });


        describe('test metodo writeBuzz', function () {
            it('should return Buzz', function () {
            	assert.equal(mod.writeBuzz(), 'Buzz');
            });
        });

    });
})();