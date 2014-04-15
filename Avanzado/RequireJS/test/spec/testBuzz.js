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
            	assert.isFalse(mod.isBuzz(11), 'false');
            	assert.isFalse(mod.isBuzz(17), 'false');
            	assert.isFalse(mod.isBuzz(42), 'false');

            });
        });

        describe('test metodo isBuzz', function () {
            it('isBuzz(n) should return true if n%5==0', function () {
            	assert.isTrue(mod.isBuzz(5), 'true');
            	assert.isTrue(mod.isBuzz(10), 'true');
            	assert.isTrue(mod.isBuzz(15), 'true');
            	assert.isTrue(mod.isBuzz(20), 'true');
            	assert.isTrue(mod.isBuzz(25), 'true');
            	assert.isTrue(mod.isBuzz(30), 'true');
            	assert.isTrue(mod.isBuzz(35), 'true');
            	assert.isTrue(mod.isBuzz(40), 'true');
            	assert.isTrue(mod.isBuzz(125), 'true');
            });
        });


        describe('test metodo writeBuzz', function () {
            it('should return Buzz', function () {
            	assert.equal(mod.writeBuzz(), 'Buzz');
            });
        });

    });
})();