// // Criação do objeto estudante

// const estudante = {
//     nome: 'Glauber',
//     sobrenome: 'Guimarães Monteiro Bispo',
//     matricula: 45258,
//     notasSemestre: [9,7,9.5,8]
// };

// console.log('Objeteto estudante',estudante);

// // Adicionando uma nova propriedade ao objeto

// estudante.modulo = 'HTML Semântico';

// console.log('Objeto estudante com modulo', estudante);

// // Imprimindo informações do objeto estudante

// console.log('Nome da pessoa estudante:', estudante.nome);

// console.log('Segunda nota do estudante:',estudante.notasSemestre[1]);

// console.log('Modulo atual:', estudante.modulo)

// // Fazendo copia do objeto estudante

// const copiaEstudante = {...estudante}
// console.log('Copia do objeto estudante:', copiaEstudante);

// // Alterando o valor da propriedade Nome

// copiaEstudante.nome = 'Astrodev';
// console.log('Copia com nome alterado:', copiaEstudante);

// // Adicionando a nota 9 as notas do semestre

// // copiaEstudante.notasSemestre.push(9);
// copiaEstudante.notasSemestre = [...copiaEstudante.notasSemestre, 9]
// console.log('Cópia com nova nota adicionada', copiaEstudante);

// // Alterando o valor da propriedade modulo

// copiaEstudante.modulo = 'Flexbox e Grid';
// console.log('Cópia com modulo alterado', copiaEstudante);

// // Criar um Array estudantesLabenu com os objetos 

// const estudantesLabenu = [];
// estudantesLabenu.push(estudante, copiaEstudante);
// console.log('Array estudantesLabenu', estudantesLabenu);

const carrinho = {
    nome:'Glauber',
    formaPagamento:'Crédito',
    endereco:['Rua dos devs', 01]
};

console.log('Criado Carrinho:',carrinho);

carrinho.compras = [];
console.log('Criado carrinho de compras vazio',carrinho);
carrinho.compras.push({
    nome: 'Livro',
    preco: 45,
    quantidade: 1
}, {
    nome: 'computador',
    preco: 5500,
    quantidade: 1
});

console.log('Adicionada compras ao carrinho:',carrinho);

console.log('Visualizando compras:',carrinho.compras);
console.log('visualizando quantidade itens no carrinho de compras:',(carrinho.compras.length));

const copiaCarrinho = {...carrinho};

copiaCarrinho.nome = 'Nathi';
copiaCarrinho.formaPagamento = 'Cartão presente';

console.log('Alterado o nome do comprador e a forma de pagamento',copiaCarrinho);