(function() {
    function cpfFormatter(array,pos,signal) {
        return array.splice(pos,0,signal);
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
})();