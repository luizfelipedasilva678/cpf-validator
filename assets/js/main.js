(function() {
    function replacer(match){
        let vet = match.split("");
        vet.splice(3,0,".");
        vet.splice(7,0,".");
        vet.splice(11,0,"-");
        return vet.join("");
    }

    document.addEventListener('keypress', function(e){
        let target = e.target;

        if(target.id === 'cpf') {
            if(target.value.length === 11) {
                target.disabled = true;
                target.value = target.value.replace(/[0-9]{11}/g, replacer);
            }
        }
    })
})();