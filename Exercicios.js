// Exercicio 1

const curso = {
    id: 1,
    titulo: "Desenvolvimento Web",
    cargaHoraria: 80,

    professor: {
        nome: "Joao",
        email: "joao@email.com"
    },

    disciplinas: [
        {
            nome: "JavaScript",
            semestre: 1
        },
        {
            nome: "Banco de Dados",
            semestre: 2
        }
    ]
};

console.log(curso.professor.nome);
console.log(curso.disciplinas[1]);


// Exercicio 2

const obj1 = {
    "due-date": "2025-04-15",
    price: 50.9
};

console.log(obj1["due-date"]);


// Exercicio 3

const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;

const obj = JSON.parse(txt);

console.log(txt.name);
console.log(obj.nome);


// Exercicio 4

const entradaJson = `{"cliente": "Carlos", "ativo": true, "desconto": 0.1, "valorTotal": 200.0}`;

const pedido = JSON.parse(entradaJson);

pedido.valorFinal = pedido.valorTotal - (pedido.valorTotal * pedido.desconto);

const resultadoJson = JSON.stringify(pedido);

console.log(resultadoJson);


// Exercicio 5

const calcularImposto = valor => valor * 0.15;

const saudar = (nome, horario) => `Bom ${horario}, ${nome}!`;

const ePar = numero => numero % 2 === 0;

console.log(calcularImposto(100));
console.log(saudar("Joao", "dia"));
console.log(ePar(10));


// Exercicio 6

executar();

function executar() {
    var taxa = 1.05;
    console.log("Executando calculo...");
}

// A variavel taxa so existe dentro da funcao executar()
// por isso nao pode ser usada fora dela.


// Exercicio 7

const processarValor = (operacao, a, b) => operacao(a, b);

const multiplicar = (a, b) => a * b;

const maior = (a, b) => a > b ? a : b;

console.log(processarValor(multiplicar, 5, 3));
console.log(processarValor(maior, 10, 7));


// Exercicio 8

const calcularTotalPedido = pedido =>
    pedido.items.reduce((total, item) => total + (item.preco * item.quantidade), 0);

const obj3 = {
    items: [
        {
            preco: 999.99,
            quantidade: 1
        },
        {
            preco: 350,
            quantidade: 2
        }
    ]
};

console.log("Total do Pedido = " + calcularTotalPedido(obj3));