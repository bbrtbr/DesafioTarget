function fibonacci(num) {
    if (num <= 1) return num;
    let seq = [0, 1];
    while (true) {
        let proximoNum = seq[seq.length - 1] + seq[seq.length - 2];
        if (proximoNum <= num) {
            seq.push(proximoNum); // coloco na sequencia o proximo número do fibo
        } else {
            break;
        }
    }
    return seq;
}

let num = 34; 
let seq = fibonacci(num);

if (seq.includes(num)) { // Verificando se ele pertence
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}