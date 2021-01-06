import cpfValidator from './class/CpfValidator.js'

(function() {
    let cpf, validate, cpfNumbers, resultFunctionOne, resultFunctionTwo;

    function cpfFormatter(array,pos,signal) {
        return array.splice(pos,0,signal);
    }

    function separateNumbers(cpf) {
        let cpfWithoutDots = cpf.split("");
        
        cpfWithoutDots.forEach(function(value, index){
            if(value === '-' || value === '.') {
                cpfWithoutDots.splice(index,1)
            }
        })

        return transformsNumbers(cpfWithoutDots);;
    }

    function transformsNumbers(array) {
        let newArray = [];
        array.forEach(function(value){
            newArray.push(Number(value));
        })

        return newArray;
    }

    function replacer(match){
        let vet = match.split("");
        cpfFormatter(vet,3,".");
        cpfFormatter(vet,7,".");
        cpfFormatter(vet,11,"-");
        return vet.join("");
    }

    document.addEventListener('keypress', function(e){
        let target = e.target;

        if(target.id === 'cpf') {
            if(target.value.length === 11) {
                target.value = target.value.replace(/[0-9]{11}/g, replacer);
            }
        }
    })

    document.addEventListener('submit', function(e){
        e.preventDefault();
        
        cpf = document.querySelector("#cpf").value;
        cpfNumbers = separateNumbers(cpf);
        validate = new cpfValidator(cpfNumbers);
        resultFunctionOne = validate.validateFirstNumber();
        resultFunctionTwo = validate.validateSecondNumber();

        if (resultFunctionOne && resultFunctionTwo) {
            document.querySelector('.valid').classList.remove('hide');
            document.querySelector('.invalid').classList.add('hide');
        } else {
            document.querySelector('.valid').classList.add('hide');
            document.querySelector('.invalid').classList.remove('hide');
        }
        
    })
})();