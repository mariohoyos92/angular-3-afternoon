angular.module("swagShop").component("cart", {
  templateUrl: "app/cart/cart.template.html",
  controllerAs: "cartCtrl",
  controller: function(cartSrvc) {
    this.cart = cartSrvc.currentCart();

    this.total = function() {
      let total = 0;

      this.cart.forEach(item => (total += item.price));
      return total;
    };

    this.checkout = function() {
      this.cart = cartSrvc.checkout();
    };

    this.removeItem = function(index) {
      cartSrvc.remove(index);
    };
  }
});
