var lista = [];
var numero = window.document.getElementById('numero');
var sel = window.document.getElementById('seltab');
var res3 = window.document.getElementById('div3');
var maior = 0;
var menor = 100;
var soma = 0;


function notInLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return false;
    }
    else{
        return true;
    }
}



function adicionar() {
    
    if (notInLista(Number(numero.value), lista) || numero.length == 0 || numero.value < 1 || numero.value > 100) {
        window.alert('Inválido');
    }
    else{

        var item = document.createElement('option');   
        item.text = `Valor ${numero.value} adicionado`;
        item.value = `tab${numero.value}`;
        sel.appendChild(item);

        res3.innerHTML = '';

        soma += Number(numero.value);

        lista.push(Number(numero.value));
        
        if (Number(numero.value) >= maior) {
            maior = numero.value;
        }
        if (Number(numero.value) <= menor) {
            menor = numero.value;
        }
        
        numero.value = '';
        numero.focus();
    
    }

}

function finalizar() {
    

    if (lista.length == 0) {
        window.alert('Não é possível finalizar sem valores');
    }
    else{
        res3.innerHTML = '';

        res3.innerHTML += `<p> Ao todo, temos ${lista.length} elementos </p>`;
        res3.innerHTML += `<p> Maior: ${maior} ; Menor: ${menor} </p>`;
        res3.innerHTML += `<p> Valor da soma: ${soma} </p>`;
        res3.innerHTML += `<p> Valor da média: ${soma/lista.length} </p>`;

    }

    
}