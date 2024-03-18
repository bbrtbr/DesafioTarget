# Desafio Target

## Questão 1

Observe o trecho de código abaixo:

```java
int INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

imprimir(SOMA);
```
Resposta:
É inicializado o indice com o valor 13, e o enquanto contará de 0, até menor que 13.
O k é somado +1 a cada enquanto, e irá parar quando ele for maior que 13, ou seja, executara até o k ser 13.
Basicamente ele irá somar os 13 primeiros números dos naturais.
Que corresponde a SOMA = 91

## Questão 2
```java
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
```
Resposta: [Questão 2](Códigos/segundaquestao.js)

## Questão 3
```java
3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, 9 (SOMADO 2 A 2)

b) 2, 4, 8, 16, 32, 64, 128 (O anterior é multiplicado por 2)

c) 0, 1, 4, 9, 16, 25, 36, 49 (TEMOS OS QUADRADOS PERFEITOS)

d) 4, 16, 36, 64, 100 (Números pares ao quadrado)

e) 1, 1, 2, 3, 5, 8, 13 (Fibonacci)

f) 2,10, 12, 16, 17, 18, 19, 20 (Iniciamos variando 8, depois 2, depois 4, e depois variando 1)


```

## Questão 4
```java
Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
```
Resposta: 
Em uma única visita:

Por cinco minutos, aciono o interruptor 1 e, em seguida, desligo-o. Em seguida, ativo o interruptor 2 e imediatamente me dirijo a uma das três salas.
Se a lâmpada estiver acesa, identifico que pertence ao interruptor 2. Se estiver desligada, mas ainda quente, sei que pertence ao interruptor 1. Se estiver desligada e fria, pertence ao interruptor 3.


```java
Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
```
Resposta: [Questão 5](Códigos/QuintaQuestao.js)
