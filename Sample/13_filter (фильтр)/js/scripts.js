window.addEventListener('load', function (e) {
    var inp = document.querySelector('.form-control');
    var link = document.querySelectorAll('.list-group-item');



    inp.addEventListener('input', function () {
        var filter = this.value.toLowerCase()
        for (var i = 0; i <= link.length - 1; i++) {
            var city = link[i].innerHTML.toLowerCase()
            if (city.indexOf(filter) < 0) {
                link[i].classList.add('hide');
            }
            else {
                link[i].classList.remove('hide');
            }
        }
    })

})  
