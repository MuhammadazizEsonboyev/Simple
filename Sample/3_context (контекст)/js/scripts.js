// ae
window.addEventListener('load', function (e) {
    let div = document.querySelector('.text');
    console.log(div);


    div.onclick = function () {
        div.style.background = 'red'
        alert('msg');
    }
});
// console.log(this);