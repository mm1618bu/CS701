angular.module("cartApp")
  .component('cartList', {
    templateUrl: 'cart-list/cart-list.template.html',
    controller: function CartListController() {

      var defaultBooks = [
        {title: 'Absolute Java', qty: 1, price: 114.95},
        {title: 'Pro HTML5',     qty: 2, price: 27.95},
        {title: 'Head First HTML5', qty: 1, price: 27.89}
      ];
      
      
      this.removeBook = function(index) {
        

      }
      
      this.addBook = function() {
          

      }
      
      this.saveBooks = function() {
          
      }
      
      this.updateTotal = function() {
          var total = 0;
          


          return total;
      }


    }
  });
  