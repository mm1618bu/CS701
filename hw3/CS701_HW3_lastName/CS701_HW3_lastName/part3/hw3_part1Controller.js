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
        // Save the current state of the books array to the undo stack
        $scope.undoStack.push($scope.books.slice(0));
        // Remove the book from the books array
        $scope.books.splice(index, 1);
        // Save the updated state of the books array to localStorage
        $scope.saveBooks();
    };
      
    $scope.addBook = function(){
        if ($scope.newBookTitle && $scope.newBookQty && $scope.newBookPrice) {
            // Save the current state of the books array to the undo stack
            $scope.undoStack.push($scope.books.slice(0));
            // Add the new book to the books array
            $scope.books.push({
                title: $scope.newBookTitle,
                qty: $scope.newBookQty,
                price: $scope.newBookPrice
            });
            // Clear the form
            $scope.newBookTitle = '';
            $scope.newBookQty = '';
            $scope.newBookPrice = '';
            // Save the updated state of the books array to localStorage
            $scope.saveBooks();
        }
    };

    $scope.saveBooks = function() {
        // Save the current state of the books array to localStorage
        localStorage.setItem('books', JSON.stringify($scope.books));
        // Clear the redo stack
        $scope.redoStack = [];
        // Recalculate total and update view
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
        var action = $scope.redoStack.pop();
        if (action) {
          if (action.type === 'remove') {
            $scope.books.splice(action.index, 0, action.book);
            $scope.undoStack.push({type: 'add', book: action.book});
          } else if (action.type === 'add') {
            var index = $scope.books.indexOf(action.book);
            $scope.books.splice(index, 1);
            $scope.undoStack.push({type: 'remove', book: action.book, index: index});
          }
          $scope.updateTotal();
        }
    };
  
    $scope.undo = function() {
    if ($scope.undoStack.length > 0) {
        // Save the current state of the books array to the redo stack
        $scope.redoStack.push($scope.books.slice(0));
        // Restore the previous state of the books array from the undo stack
        $scope.books = $scope.undoStack.pop();
        // Save the updated state of the books array to localStorage
        $scope.saveBooks();
    }
    };
});
