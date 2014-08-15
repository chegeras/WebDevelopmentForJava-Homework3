/**
 * Created by gerasimov on 15.08.14.
 */
(function(){
    'use strict'

    var carouselMock = function()
    {
        return{
            scope: false,
            restrict: 'E',
            templateUrl: 'views/partial/CarouselMockDirective.html'
        };
    };

    angular.module('auction').directive('auctionCarouselMock',carouselMock);
})();