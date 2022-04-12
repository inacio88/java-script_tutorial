function contar(){
    var inicio = window.document.getElementById('inicio').value;
    var fim = window.document.getElementById('fim').value;
    var passo = window.document.getElementById('passo').value;
    var res = window.document.getElementById('res');
    var string = '';

    if (Number(inicio) > Number(fim) || Number(inicio) <= 0 || Number(passo) <= 0 || Number(fim) <= 0) {
        window.alert('Campo errado');
    }

    for (let i = Number(inicio); i <= Number(fim); i += Number(passo)){
        string += i+'\u{1F449}'; 
    }
    string += '\u{1F3C1}';

    res.innerHTML = string;

}