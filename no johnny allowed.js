var shoppingcart = (function() {
    cart= [];
    function Item(name,price,amount){
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    function savecart(){
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    function loadCart(){
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") !=null) {
        loadCart();
    }
})