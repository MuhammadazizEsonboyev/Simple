window.addEventListener('load', function (e) {
    var input = document.querySelector('.pass');
    var btn = document.querySelector('.btn');


    console.log(input);


    btn.addEventListener('click', function () {
        var elem = input.getAttribute('type')
        if (elem == 'password') {
            input.setAttribute('type', 'text');
            this.innerHTML = 'parolni yashir'
        }
        else {
            input.setAttribute('type', 'password');
            this.innerHTML = "parolni ko'rsat"
        }

    })
});