window.addEventListener('load', function (e) {
    var nav = document.querySelector('.navbar');
    var btn = document.querySelectorAll('.btn');

    for (var i = 0; i <= btn.length - 1; i++) {
        btn[i].addEventListener("click", function () {

            var color = this.getAttribute('data-color')
            
            nav.style.background = color
        })
    }

});