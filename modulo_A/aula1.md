# Aula 1

## Cliente x Server
Tecnológias para clientes e servidores
Nesse curso o javascript será para o lado do cliente, mesmo que js também sirva para o lado do servidor

# Aula 2

## Evolução do js

ECMAScript
* 1.0
* 2.0
* 3.0
* ES5
* ES6
* ES2016
* ES2017
* ES2018

Jquery
Angular
React
Vue
Electron
Ionic

# Aula 3 - Módulo B
bibliografia

JavaScript o guia definitivo

JavaScript Guia do programador

Guia de referência da mozila

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

Guia de referência da ecma

https://www.ecma-international.org/publications-and-standards/standards/ecma-262/


Requisitos:
google chrome
Vs code
nodejs


# Aula 4

codigo ex01.html

# Aula 5

Tipos de dados e variáveis em js

poder começar com letra, $, ou _

Não podem começar com números
é possível ter acentos
não pode ter espaços
nem palavras reservadas

é casesensitve

tipos:
* number
    - infinity
    - NaN
* String
* Boolean
* null
* undefinded
* object
    - Array
* function


Comentarios em js:
//
/*    */


## node js

typeof n


# Aula 6

# Aula 7 e 8

- Operadores

    * Aritméticos
        potência: 5**2
        
        Demais operção são padrão

    * Atribuição
    * Relacionais
        5 == 5  true
        
        5 == '5' true
        
        Esse operador não testa o tipo

        Operador de identidade restrita

        5 === '5' false

        Desigual restrito !==


    * Lógicos

        ! negação

        && conjunção

        || disjunção

        Ordem de precedência: 
        1. ! 
        2. && 
        3. ||

    * Ternário

        teste ? true : false

        media >= 7 ? "Aprovado" : "Reprovado"

        var x = 8
        
        var res = x % 2 == 0 ? 5 : 9 
        
        Se o resto de x % 2 == 0, res = 5, senão res = 9

# Aula 9 DOM

ex05.html

Extensão: 
* live server no vs code
* Node exec

DOM

Document object model

Um conjunto de objetos dentro do navegar que dá acesso aos componentes internos do site.
DOM está presente quando está rodando js no navegador


Árvore DOM exemplo
* window
    - location
    - document
        * html
            - head
                * meta
                * title
            - body
                * h1
                * p
                * div
    - history


Várias maneiras para navegar entre esse elementos:
* Por marca
    - getElementsByTagName();
* Por ID
    - getElementById();
* Por nome
    - getElementsByName();
* Por classe
    - getElementsByClassName();
* Por seletor
    forma nova
    - querySelector();
    - querySelectorAll();

    div#nomeDadiv
    id é com #

    class.nomeClass

# Aula 10

### Eventos DOM
Podem ser configurados tanto no html ou no js
Evento é tudo que pode acontecer com um elemento:
* evento de mouse
    * mouseenter
    * mousemove
    * mousedown
    * mouseup
    * click
    * mouseout


#### Funções em js

function ação(param) {

}

# Aula 11

### Condições
Arquivos na pasta aula11

# Aula 12
### Condições parte 2

Arquivos da pasta da aula 12

# Aula 13

#### Laços

* Teste no início: While
* Teste no final: do while

# Aula 14

* for

# Aula 15

### Array

* var num = [4, 5, 6, 7, 8]
    - num.push(3); //add no final
    - numlength; //Tamanho do array, não é um método, é uma propriedade
    - num.indexOf(7);
        - retorna o index do 7, se não existir, retorna -1