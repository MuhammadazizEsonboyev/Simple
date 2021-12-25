window.addEventListener('load', function (e) {
    var img = document.querySelectorAll('img');

    for (var i = 0; i <= img.length - 1; i++) {
        img[i].addEventListener('contextmenu', function (e) {
            e.preventDefault()
        })

        img[i].addEventListener('mousedown', function (e) {
            e.preventDefault()
        })
    }


    var link = document.querySelectorAll('a');

    for (var i = 0; i <= link.length - 1; i++) {
        link[i].addEventListener('click', function (e) {
            var conf =  confirm('salom ushbu saytga kirishni hohlaysanmi')
            if(conf == true){
                console.log("true");
            }
            else{
                e.preventDefault()
                console.log('false');
            }
        })
    }


var text = document.querySelector('p');

text.addEventListener('copy', function(e){
    e.preventDefault()
    // alert('Ko'chitr');
})



});