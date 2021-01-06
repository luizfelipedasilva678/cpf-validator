export default function cpfValidator(cpf) {
    this.cpf = cpf;
}
cpfValidator.prototype.validateFirstNumber = function() {
    let arrayCpf = this.cpf;
    let count = 10;
    let result = 0;
    let firstNumberIsCorrect;

    arrayCpf.forEach(function(value, index) {
        if(index !== 9 && index !== 10) {
            result += value * count;
            count--;
        }
    })

    firstNumberIsCorrect = result*10 % 11 === arrayCpf[9];
    return firstNumberIsCorrect;
}
cpfValidator.prototype.validateSecondNumber = function() {
    let arrayCpf = this.cpf;
    let count = 11;
    let result = 0;
    let secondNumberIsCorrect;

    arrayCpf.forEach(function(value, index) {
        if(index !== 10) {
            result += value * count;
            count--;
        }
    })

    secondNumberIsCorrect = result*10%11 === arrayCpf[10];
    return secondNumberIsCorrect;
}