function gerar() {
var numero = window.document.getElementById('numero');
var res = window.document.querySelector('div#res');
let tab = window.document.getElementById('seltab');


if (numero.value.length == 0) {
    window.alert('Escolha um número');
}
else{
    tab.innerHTML = '';
    for (let index = 0; index <= 10; index++) {

        let item = document.createElement('option');
        item.text = `${index}X${numero.value} = ${index*numero.value}`;
        item.value = `tab${index}`;
        tab.appendChild(item);
    }

}


}