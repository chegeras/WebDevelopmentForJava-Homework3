!function () {
    "use strict";
    angular.module("auction", ["ngRoute"]).config(["$routeProvider", function (a) {
        var b = function (a) {
            return a + " | Auction"
        };
        a.when("/", {templateUrl: "views/home.html", controller: "HomeController", controllerAs: "ctrl", title: b("Home")}).when("/search", {templateUrl: "views/search.html", controller: "SearchController", controllerAs: "ctrl", title: b("Search")}).when("/product/:productId", {templateUrl: "views/product.html", controller: "ProductController", title: b("Product Details"), controllerAs: "ctrl", resolve: {product: ["$route", "ProductService", function (a, b) {
            var c = parseInt(a.current.params.productId);
            return b.getProductById(c)
        }]}}).otherwise({redirectTo: "/"})
    }]).run(["$rootScope", function (a) {
        a.$on("$routeChangeStart", function (b, c) {
            a.pageTitle = c.$$route.title
        })
    }])
}(), function () {
    "use strict";
    var a = function (a) {
        var b = this;
        b.products = [], a.getProducts().then(function (a) {
            b.products = a
        })
    };
    a.$inject = ["ProductService"], angular.module("auction").controller("HomeController", a)
}(), function () {
    "use strict";
    var a = function (a) {
        var b = this;
        b.products = [], a.find().then(function (a) {
            b.products = a
        })
    };
    a.$inject = ["ProductService"], angular.module("auction").controller("SearchController", a)
}(), function () {
    "use strict";
    var a = function (a) {
        this.product = a, this.date = "Today " + (new Date).toLocaleTimeString().slice(0, 5)
    };
    a.$inject = ["product"], angular.module("auction").controller("ProductController", a)
}(), function () {
    "use strict";
    var a = function () {
        return{scope: !1, restrict: "E", templateUrl: "views/partial/FooterDirective.html"}
    };
    angular.module("auction").directive("auctionFooter", a)
}(), function () {
    "use strict";
    var a = function () {
        return{scope: !1, restrict: "E", templateUrl: "views/partial/NavbarDirective.html"}
    };
    angular.module("auction").directive("auctionNavbar", a)
}(), function () {
    "use strict";
    var a = function () {
        return{scope: !1, restrict: "E", templateUrl: "views/partial/TitleDirective.html"}
    };
    angular.module("auction").directive("auctionProductTitle", a)
}(), function () {
    "use strict";
    var a = function () {
        return{scope: !1, restrict: "E", templateUrl: "views/partial/CarouselMockDirective.html"}
    };
    angular.module("auction").directive("auctionCarouselMock", a)
}(), function () {
    "use strict";
    var a = function () {
        return{scope: !1, restrict: "E", templateUrl: "views/partial/BidsDirective.html"}
    };
    angular.module("auction").directive("auctionBids", a)
}(), function () {
    "use strict";
    var a = function (a) {
        this.$http = a
    };
    a.$inject = ["$http"], a.prototype = {getProducts: function () {
        return this.$http.get("data/products-featured.json").then(function (a) {
            return a.data
        })
    }, find: function () {
        return this.$http.get("data/products-search.json").then(function (a) {
            return a.data
        })
    }, getProductById: function (a) {
        return this.getProducts().then(function (b) {
            return _.find(b, function (b) {
                return b.id == a
            })
        })
    }}, angular.module("auction").service("ProductService", a)
}();