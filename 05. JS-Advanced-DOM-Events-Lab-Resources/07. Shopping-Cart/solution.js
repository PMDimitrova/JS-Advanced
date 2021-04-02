function solve() {
                     //attach event listener to every 'add' button; on click -> function
    let addButtons = document.querySelectorAll('.add-product');
    Array.from(addButtons).forEach(button =>{
        button.addEventListener('click', buyProduct);
    })
    let totalPrice = 0;
    let listOfBoughtProducts = new Set();
    let usersOutput = document.getElementsByTagName('textarea')[0].textContent;

    document.getElementsByClassName('checkout')[0].addEventListener('click', checkoutFunc);

    function buyProduct(event){
                              // 0) get the parent node, and than get the a) product price & b) product name
        let parent = event.target.parentNode.parentNode;

        let productDetails =parent.getElementsByClassName('product-details')[0];
        let productName = productDetails.getElementsByClassName('product-title')[0].textContent;
        let productPrice = Number(parent.getElementsByClassName('product-line-price')[0].textContent);
                            // 1) add the price to the total amount
        totalPrice += productPrice;
                             // 2) add the product name to an assoc-obj, so that it doesn't repeat
        listOfBoughtProducts.add(productName);
                              // 3) make the text for the purchase appear in the 'textarea'
        usersOutput += (`Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`);
    }
                             // create check-out function->
    function checkoutFunc (event){
                            // print the total list of products & the total price of the purchase
        usersOutput += (`You bought ${Array.from(listOfBoughtProducts).join(', ')} for ${totalPrice.toFixed(2)}.`)
        document.querySelectorAll('button').forEach(button =>{
            button.disabled = true;
        })
    }
}