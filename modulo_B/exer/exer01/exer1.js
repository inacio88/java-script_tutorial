function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');        
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    //hora = 22;
    msg.innerHTML = `Agora são ${hora}:${minutos} horas`;
    if (hora >= 0 && hora < 12) {
        //bom dia #F2CFB5
        img.src = 'img/m1.png';
        document.body.style.background = '#F2CFB5';
    }
    else if (hora >= 12 && hora < 18) {
        //boa tarde #FD9C0F
        img.src = 'img/t1.png';
        document.body.style.background = '#FA6812';
    }
    else{
        //boa noite #383530
        img.src = 'img/n1.png';
        document.body.style.background = '#383530';
    }
}



