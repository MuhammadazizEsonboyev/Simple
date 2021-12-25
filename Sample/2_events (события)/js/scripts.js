window.onload = function () {
    var text = document.querySelector('.text');


    text.onclick = function () {
        text.style.background = 'red'
    }

    text.addEventListener('click', function(){
        text.style.color = 'yellow'

    })
}


