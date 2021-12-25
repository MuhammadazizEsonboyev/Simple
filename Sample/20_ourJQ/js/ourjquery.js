function OurJquery(elemnts) {
    this.elemnts = elemnts;

    this.click = function (callBack) {
        for (var i = 0; i < this.elemnts.length; i++) {
            this.elemnts[i].addEventListener('click', callBack);
        }
    }
    this.html = function (text) {
        for (var i = 0; i < this.elemnts.length; i++) {
            this.elemnts[i].innerHTML = text;
        }
    }
    this.hide = function (text) {
        for (var i = 0; i < this.elemnts.length; i++) {
            this.elemnts[i].style.display = 'none';
        }
    }
    this.add = function (add) {
        for (var i = 0; i < this.elemnts.length; i++) {
            this.elemnts[i].classList.add(add);
        }
    }
    this.remove = function (remove) {
        for (var i = 0; i < this.elemnts.length; i++) {
            this.elemnts[i].classList.remove(remove);
        }
    }
    this.on = function (Event, callBack){
        for (var i = 0; i < this.elemnts.length; i++) {
            this.elemnts[i].addEventListener(Event, callBack);
        }
    }

}





function $(selector) {
    var elements;

    if (selector instanceof HTMLElement) {
        elements = [selector];
    }
    else if (selector instanceof Array || selector instanceof NodeList) {
        elements = selector;
    }
    else {
        elements = document.querySelectorAll(selector);
    }

    return new OurJquery(elements);
}
