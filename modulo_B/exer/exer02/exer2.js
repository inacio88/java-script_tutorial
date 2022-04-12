function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique se o ano está correto');

    }
    else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            genero = 'Maculino';
            if (idade>=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bm.png');
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jm.png');
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/am.png');
            }
            else{
                //idoso
                img.setAttribute('src', 'img/im.png');
            }
        }
        else if (fsex[1].checked) {
            genero = 'Feminino';
            if (idade>=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bf.png');
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jf.png');
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/af.png');
            }
            else{
                //idoso
                img.setAttribute('src', 'img/if.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Sexo: ${genero} e idade: ${idade}`;
        res.appendChild(img);
    }

}