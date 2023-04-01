angular.module('myApp', [])
.controller('CartControler', function ($scope) {
        
    var defaultBooks = [
        {title: 'Absolute Java', qty: 1, price: 114.95},
        {title: 'Pro HTML5',     qty: 2, price: 27.95},
        {title: 'Head First HTML5', qty: 1, price: 27.89}
      ];
      
     

      $scope.removeBook = function(index) {
     


      }
      
      $scope.addBook = function() {
     

      }
      
      $scope.saveBooks = function() {
     

      }
      
      $scope.updateTotal = function() {
          var total = 0;
     



          return total;
      }
        

    }
);
 