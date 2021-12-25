window.addEventListener('load', function (e) {
    var div = document.querySelectorAll('.block div');
    
    function rgb(){
        var r = Math.floor(Math.random() * 257)
        var g = Math.floor(Math.random() * 257)
        var b = Math.floor(Math.random() * 257)
        var rgb = `rgb(${r},${g},${b})`
        return rgb
    }

    for (var i = 0; i <= div.length - 1; i++) {
        div[i].addEventListener('click', function () {
            this.style.background = rgb()
        })
    }

});