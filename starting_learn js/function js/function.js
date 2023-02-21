function home() {

    function add() {
        let a = 4;
        let b = 5;
        let sum = a + b;
        let multiplication = a * b;
        let devsion = a / b;
        let exponentiation = a ** b;
        var opreators = [sum, multiplication, devsion, exponentiation]
        return opreators;
    }
    return add;
}
let c = home();
console.log(c());