class Calculadora {

    constructor() {
        this._num = 0;
        this._num2 = 0;
    }

    introduceN(num, num2) {
        var num = parseInt(prompt('Introduce un número'));
        this._num = num;
        var num2 = parseInt(prompt('Introduce otro número'));
        this._num2 = num2
        return num, num2;
    }
    suma() {
            var resultado = this._num + this._num2;
            document.getElementById("result").innerHTML = resultado;
    }
    resta(){
            var resultado2 = this._num - this._num2;
            document.getElementById("result").innerHTML = resultado2;
        }
}


function sumar() {

    var calc1 = new Calculadora();
    calc1.introduceN();
    calc1.suma();
}
function restar() {

    var calc2 = new Calculadora();
    calc2.introduceN();
    calc2.resta();
}


