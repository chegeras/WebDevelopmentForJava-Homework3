/**
 * Created by gerasimov on 15.08.14.
 */
(function(){
    'use strict'

    var titleDirectiveFactory = function()
    {
        return {
            scope: false,
            restrict: 'E',
            templateUrl: 'views/partial/TitleDirective.html'
        };
    };
    angular.module('auction').directive('auctionProductTitle', titleDirectiveFactory);

})();