/**
 * Created by nikolay on 13.08.2014.
 */
(function(){
    'use strict';

    var ProductController = function(product){
        this.product = product
    };

    ProductController.$inject = ['product'];
    angular.module('auction').controller('ProductController',ProductController);
}());