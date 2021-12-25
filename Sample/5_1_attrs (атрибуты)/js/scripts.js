window.addEventListener('load', function (e) {
    var div = document.querySelectorAll('.text');
    
    for (var i = 0; i <= div.length - 1; i++) {

        var atrebut = div[i].getAttribute('data-color');

        div[i].addEventListener('click', function () {
            var random = Math.floor(Math.random() * 256);

            atrebut = random;

            this.style.background = `#b${atrebut}`;

            console.log(atrebut, random);
        })

    }



});