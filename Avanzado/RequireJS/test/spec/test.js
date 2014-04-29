/* global describe, it */

(function () {
    'use strict';


    require.config({
     	baseUrl:'../app/scripts/',
    	nodeRequire: require
    });


    describe('Test de fizzbuzz', function () {

    	var mod;
    	beforeEach(function(done){
    		require(['FizzBuzz'], function(module){
    			mod = module;
    			done();
    		});
    	});

        describe('test metodo', function () {
            it('fizzbuzz(1) should return 1', function () {
            	var resp = mod.fb(1);
            	assert.equal(resp, '1');
            	assert.typeOf(resp, 'string');
            });
        });

        describe('test metodo', function () {
            it('fizzbuzz(2)should return 1 2', function () {
            	var resp = mod.fb(2);
            	assert.equal(resp, '1 2');
            	assert.typeOf(resp, 'string');
            });
        });

        describe('test metodo', function () {
            it('fizzbuzz(2)should return 1 2 Fizz', function () {
            	var resp = mod.fb(3);
            	assert.equal(resp, '1 2 Fizz');
            	assert.typeOf(resp, 'string');
            });
        });

        describe('test metodo', function () {
            it('fizzbuzz(5)should return 1 2 Fizz 4 Buzz', function () {
            	var resp = mod.fb(5);
            	assert.equal(resp, '1 2 Fizz 4 Buzz');
            	assert.typeOf(resp, 'string');
            });
        });

        describe('test metodo', function () {
            it('fizzbuzz(15)should return 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz', function () {
                var resp = mod.fb(15);
                assert.equal(resp, '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz');
                assert.typeOf(resp, 'string');
            });
        });

        describe('test metodo', function () {
            it('fizzbuzz() shoul return \'\'', function () {
            	var resp = mod.fb();
            	assert.equal(resp, '');
            	assert.typeOf(resp, 'string');
                assert.lengthOf(resp,0);
            });
        });

        describe('test metodo', function () {
            it('fizzbuzz("aaaa") shoul return \'\'', function () {
                var resp = mod.fb('aaaa');
                assert.equal(resp, '');
                assert.typeOf(resp, 'string');
                assert.lengthOf(resp,0);
            });
        });
    });
})();
