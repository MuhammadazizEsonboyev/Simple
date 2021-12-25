window.addEventListener('load', function (e) {
    var cart = document.querySelectorAll('.cart');
    var res = document.querySelector('b');
    var sum = 0

    for (var i = 0; i <= cart.length - 1; i++) {
        cart[i].addEventListener('click', function () {
            this.classList.toggle('cart-active') /* bo'sa oladi yo'q bo'sa qo'shadi */
            var price = this.getAttribute('data-price')
            if (this.classList.contains('cart-active')) {
                sum = sum + +price
            } else {
                sum = sum - +price
            }
            res.innerHTML = sum
        })
    }

});