window.addEventListener('load', function (e) {
    var div = document.querySelectorAll('.text');

    // div[0].addEventListener("click", function () {
    //     div[0].style.background = "red";
    // })
    // div[1].addEventListener("click", function () {
    //     div[1].style.background = "grey";
    // })
    // div[2].addEventListener("click", function () {
    //     div[2].style.background = "yellow";
    // })
    // div[3].addEventListener("click", function () {
    //     div[3].style.background = "green";
    // })

    for (var i = 0; i <= div.length - 1; i++) {
        div[i].addEventListener('click', function () {
            this.style.background = "green";
        })
    }





});