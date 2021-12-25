window.addEventListener('load', function (e) {
    var form = document.querySelector('form');
    var inp = document.querySelectorAll('.check');


    form.addEventListener('click', function (e) {
        for (var i = 0; i <= inp.length - 1; i++) {
            if (inp[i].value == '') {
                inp[i].classList.add('error')
                e.preventDefault()
            }
            else {
                inp[i].classList.remove('error')
            }
        }
    });



    console.log(inp);
});