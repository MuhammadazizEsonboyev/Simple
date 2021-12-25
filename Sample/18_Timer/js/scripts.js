window.addEventListener('load', function (e) {
    let btn1 = document.querySelector('.btn1');
    let btn2 = document.querySelector('.btn2');
    let stop1 = document.querySelector('.stop1');
    // let stop2 = document.querySelector('.stop2');
    let reset = document.querySelector('.reset1');
    let span = document.querySelector('.item-1 span');



    btn1.addEventListener('click', function (e) {
        time.innerHTML = time
        console.log(span);
        
    })
    
    stop1.addEventListener('click', function (e) { 
        console.log(stop1);
    })
    

    var i = 1;
    var time = this.setInterval(() => {
        span.innerHTML = i++
    }, 1000);






});