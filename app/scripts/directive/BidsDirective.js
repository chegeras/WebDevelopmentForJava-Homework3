/**
 * Created by gerasimov on 15.08.14.
 */
(function(){
    'use strict'

    var bidsDirective = function()
    {
        return{
            scope: false,
            restrict: 'E',
            templateUrl: 'views/partial/BidsDirective.html'
        };
    };
    angular.module('auction').directive('auctionBids',bidsDirective);
})();