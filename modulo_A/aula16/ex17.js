function parimpar(n) {
    if (n%2==0) {
        return 'Par!';
    }
    else{
        return 'Ímpar!';
    }
}

let res = parimpar(4);
console.log(res);

function soma(n1=0, n2=0) {//se o n1 ou n2 não forem passados, será considerado zero
    return n1+n2;
}

console.log(soma(2, 4));

