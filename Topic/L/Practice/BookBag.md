---
---
# BookBag

The BookBag class represents a simple "shopping cart" for a book consignment store. Books are sold on consignment, and customers can add or remove books from their BookBag as well as search their BookBag for books by ISBN. Customers can also see the total price of the items in their BookBag. Code the following methods to complete the BookBag class.

* GetTotal() – Loop through the array of books and total the price of all the books. Ensure that the amount is rounded to two decimal places (for dollars and cents).
* FindBook() – Look through the array of books to find a book with the specified ISBN number. Throw an exception if the supplied ISBN is null.
* RemoveBook() – Remove the book with a matching ISBN from the array of book consignments.
