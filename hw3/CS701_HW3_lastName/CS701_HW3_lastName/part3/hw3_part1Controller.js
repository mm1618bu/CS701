angular.module('myApp', [])
.controller('CartControler', function ($scope) {
        
    var defaultBooks = [
        {title: 'Absolute Java', qty: 1, price: 114.95},
        {title: 'Pro HTML5',     qty: 2, price: 27.95},
        {title: 'Head First HTML5', qty: 1, price: 27.89},
    ];
      
    $scope.books = defaultBooks;
    $scope.undoStack = [];
    $scope.redoStack = [];

    $scope.removeBook = function(index) {
        $scope.undoStack.push($scope.books.slice(0));
        $scope.books.splice(index, 1);
        $scope.saveBooks();
    };
      
    $scope.addBook = function(){
        if ($scope.newBookTitle && $scope.newBookQty && $scope.newBookPrice) {
            $scope.undoStack.push($scope.books.slice(0));
            $scope.books.push({
                title: $scope.newBookTitle,
                qty: $scope.newBookQty,
                price: $scope.newBookPrice
            });
            $scope.newBookTitle = '';
            $scope.newBookQty = '';
            $scope.newBookPrice = '';
            $scope.saveBooks();
        }
    };

    $scope.saveBooks = function() {
        localStorage.setItem('books', JSON.stringify($scope.books));
        $scope.redoStack = [];
        $scope.updateTotal();
    };
    
      
    $scope.updateTotal = function() {
        var total = 0;
        for (var i = 0; i < $scope.books.length; i++) {
            total += $scope.books[i].qty * $scope.books[i].price;
        }
        return total;
    }

    $scope.showAddBookRowFn = function() {
        $scope.showAddBookRow = true;
    };

    $scope.redo = function() {
        if ($scope.redoStack.length > 0) {
          var action = $scope.redoStack.pop();
          if (action.type === 'remove') {
            $scope.books.splice(action.index, 0, action.book);
            $scope.undoStack.push({ type: 'add', book: action.book });
          } else if (action.type === 'add') {
            var index = $scope.books.indexOf(action.book);
            $scope.books.splice(index, 1);
            $scope.undoStack.push({ type: 'remove', book: action.book, index: index });
          }
          $scope.updateTotal();
          $scope.undoStack.push(action);
        }
      };
      
    

  
    $scope.undo = function() {
    if ($scope.undoStack.length > 0) {
        $scope.redoStack.push($scope.books.slice(0));
        $scope.books = $scope.undoStack.pop();
        $scope.saveBooks();
    }
    };
});
