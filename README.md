# ShoppingApp
A real-life shopping cart application.  Using React.js, Redux, Router. 
The shopping cart application has two pages: the home page and my cart page.

#Let's quickly know about Home page-> 
Fetch a list of products from an API and display them in the UI. The API link is: https://dummyjson.com/products
The API returns a list of 30 products with an id, title, price and image. Display all of these in the UI and create an "add to cart" button.
On click of the "add to cart" button, add the product to the cart Redux state. Make sure that an item cannot be added again if it is already added.

#Let's quickly know about My cart page->
Get the products from the cart Redux state and display them in the UI.
On click of the "remove from cart" button, update the cart Redux state.
On the right side, create a sidebar to show the final checkout list and the total price.
On click of the "checkout" button, clear the entire cart and reset the cart Redux state. Display a success message saying that the items have been checked out.
