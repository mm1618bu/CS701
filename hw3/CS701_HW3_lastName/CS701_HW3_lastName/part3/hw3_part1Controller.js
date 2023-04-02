angular.module('myApp', [])
.controller('CartControler', function ($scope) {
        
    var defaultBooks = [
        {title: 'Absolute Java', qty: 1, price: 114.95},
        {title: 'Pro HTML5',     qty: 2, price: 27.95},
        {title: 'Head First HTML5', qty: 1, price: 27.89},
    ];
      
    $scope.books = defaultBooks;

    $scope.removeBook = function(index) {
        $scope.books.splice(index, 1);
    }
      
    $scope.addBook = function(){
        if ($scope.newBookTitle && $scope.newBookQty && $scope.newBookPrice) {
            $scope.books.push({
                title: $scope.newBookTitle,
                qty: $scope.newBookQty,
                price: $scope.newBookPrice
            });
            $scope.newBookTitle = '';
            $scope.newBookQty = '';
            $scope.newBookPrice = '';
        }
    };

    $scope.saveBooks = function() {
        // Step 1: Retrieve saved books from localStorage
        var savedBooks = JSON.parse(localStorage.getItem('books'));
        if (savedBooks && savedBooks.length) {
            $scope.books = savedBooks;
        }
    
        // Step 2: Add new book to the books array
        if ($scope.bookTitle && $scope.bookQty && $scope.bookPrice) {
            $scope.books.push({
                title: $scope.bookTitle,
                qty: $scope.bookQty,
                price: $scope.bookPrice
            });
            $scope.bookTitle = '';
            $scope.bookQty = '';
            $scope.bookPrice = '';
        }
    
        // Step 3: Save updated books to localStorage
        localStorage.setItem('books', JSON.stringify($scope.books));
    
        // Step 4: Recalculate total and update view
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
});
