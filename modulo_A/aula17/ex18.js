let amigo = {nome: 'jose',
sexo:'M',
peso:42.4,
engordar(p=0){
    console.log('Engordou');
    this.peso += p;
}}

amigo.engordar(10);
console.log(`${amigo.nome} pesa ${amigo.peso}`)