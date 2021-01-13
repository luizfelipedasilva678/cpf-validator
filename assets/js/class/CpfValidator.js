export default class cpfValidator {
    constructor(cpf) {
        this.cpf = cpf;
    }

    validateFirstNumber() {
        if(this.cpf.join('') === String(this.cpf[0]).repeat(this.cpf.length)) return false;

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

        firstNumberIsCorrect = (result * 10 % 11) > 9 ? 0 : (result * 10 % 11);
        return firstNumberIsCorrect === arrayCpf[9];
    }

    validateSecondNumber() {
        if(this.cpf.join("") === String(this.cpf[0]).repeat(this.cpf.length)) return false;

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

        secondNumberIsCorrect = (result* 10 % 11) > 9 ? 0 : (result* 10 % 11);
        return secondNumberIsCorrect === arrayCpf[10];
    }
}