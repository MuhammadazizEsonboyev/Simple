window.addEventListener('load', function (e) {
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var btn = document.querySelector('.btn');
    var res = document.querySelector('.res');
    var select = document.querySelector('select');

    function sub() {
        return +inp1.value + +inp2.value
    }

    // change // keyup

    var arr = [inp1, inp2, select]
    for (var i = 0; i <= arr.length - 1; i++) {
        arr[i].addEventListener('input', function () {
            btn.disabled = false
        })
    }

    // inp1.addEventListener('input', function () {
    //     btn.disabled = false
    // })
    // inp2.addEventListener('input', function () {
    //     btn.disabled = false
    // })
    // select.addEventListener('input', function () {
    //     btn.disabled = false
    // })

    btn.addEventListener('click', function () {
        switch (select.value) {
            case "sum":
                res.innerHTML = sub()
                break
            case 'sub':
                res.innerHTML = +inp1.value - +inp2.value
                break
            case 'mul':
                res.innerHTML = +inp1.value * +inp2.value
                break
            case 'div':
                res.innerHTML = +inp1.value / +inp2.value
                break
            default:
                alert('Bunaqa amal yo`q')
        }
        this.disabled = true
    })

});