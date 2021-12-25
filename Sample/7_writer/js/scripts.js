window.addEventListener('load', function (e) {
    var text = document.querySelector('.text');
    var words = text.innerHTML
    text.innerHTML = '';
    
    var i = 0;
    function fetch() {
        text.innerHTML = text.innerHTML + words.charAt(i);
        i++
    }
    setInterval(fetch , 1000)

});

