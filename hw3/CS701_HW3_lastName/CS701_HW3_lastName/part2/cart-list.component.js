angular.module("cartApp")
  .component('cartList', {
    templateUrl: 'cart-list/cart-list.template.html',
    controller: function CartListController() {

      this.defaultBooks = [
        {title: 'Absolute Java', qty: 1, price: 114.95},
        {title: 'Pro HTML5',     qty: 2, price: 27.95},
        {title: 'Head First HTML5', qty: 1, price: 27.89}
      ];
      
      this.books = this.defaultBooks;

      
      this.removeBook = function(index) {
        this.books.splice(index, 1);
      }
    
      
      this.addBook = function() {
        if (this.newBookTitle && this.newBookQty && this.newBookPrice) {
          var title = this.newBookTitle.trim();
          var qty = parseInt(this.newBookQty);
          var price = parseFloat(this.newBookPrice);
    
            this.books.push({
                title: title,
                qty: qty,
                price: price
            });
            this.newBookTitle = '';
            this.newBookQty = '';
            this.newBookPrice = '';
        }
      };
    
      this.saveBooks = function() {
        var savedBooks = JSON.parse(localStorage.getItem('books'));
        if (savedBooks && savedBooks.length) {
            this.books = savedBooks;
        }
    
        if (this.bookTitle && this.bookQty && this.bookPrice) {
            this.books.push({
                title: this.bookTitle,
                qty: parseInt(this.bookQty),
                price: parseFloat(this.bookPrice)
            });
            this.bookTitle = '';
            this.bookQty = '';
            this.bookPrice = '';
        }
      };
    
      this.updateTotal = function() {
        var total = 0;
        for (var i = 0; i < this.books.length; i++) {
            total += this.books[i].qty * this.books[i].price;
        }
        return total;
      };
  
    }
  });
