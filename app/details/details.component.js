angular.module("swagShop").component("detailsComponent", {
  templateUrl: "app/details/details.template.html",
  controllerAs: "detailsCtrl",
  controller: function(swagSrvc, $stateParams, cartSrvc) {
    this.swag = swagSrvc.swag;

    this.item = this.swag[
      this.swag.findIndex(item => item.id == $stateParams.id)
    ];

    this.addToCart = function(item) {
      cartSrvc.add(item);
    };
  }
});
