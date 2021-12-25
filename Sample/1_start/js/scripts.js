window.onload = function () {
    var div = document.querySelector('.text');

    function click() {
        div.style.background = 'red'
    }
    div.onclick = click
}
