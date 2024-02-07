//array ou vetores = []
// mesma esplicação do curso em video da prateleira e colocar valores []
// const = variavel
const perguntas = [
  // item é uma pergunta e resposta(uma questão)
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação para construir páginas web interativas.",
      "Um software de edição de texto.",
      "Um sistema operacional.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
    respostas: [
      "var",
      "const",
      "let",
    ],
    correta: 2
  },
  {
    pergunta: "Como você escreve um comentário de linha única em JavaScript?",
    respostas: [
      "//",
      "/* */",
      "<!-- -->",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "push()",
      "insert()",
      "append()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de escrever 'Hello World' em um alerta em JavaScript?",
    respostas: [
      "msg('Hello World');",
      "console.log('Hello World');",
      "alert('Hello World');",
    ],
    correta: 2
  },
  {
    pergunta: "Qual operador é usado para comparação de igualdade em JavaScript?",
    respostas: [
      "==",
      "===",
      "=>",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função utilizada para converter uma string em um número inteiro em JavaScript?",
    respostas: [
      "parseInt()",
      "parseFloat()",
      "toInteger()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é utilizado para selecionar um elemento HTML pelo ID em JavaScript?",
    respostas: [
      "getElementByName()",
      "selectByID()",
      "getElementById()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o operador de negação em JavaScript?",
    respostas: [
      "!!",
      "!",
      "~",
    ],
    correta: 1
  },
  {
    pergunta: "Qual método é utilizado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "removeLast()",
      "deleteLast()",
    ],
    correta: 0
  }
];

// importei o template do html para o java script usando o id quiz que ajuda a identificar
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set( )
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//module.exports = perguntas;

// for significa fazer um loop ou seja aplicar a função para tudo oque esta la dentro

//loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  // modifica o h3 para a pergunta q o chat gpt fez
  quizItem.querySelector('h3').textContent = item.pergunta

    for(let respostas of item.respostas) {
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       // conteudo do span são as respostas
       dt.querySelector('span').textContent = respostas
       dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(respostas)
      
      
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
          Swal.fire({
            icon: "success",
            title: "Parabéns!",
            text: "Responda as próximas perguntas",
          });
        }
          else(Swal.fire({
              icon: "error",
              title: "Resposta incorreta",
              text: "Tente novamente!",
            }))
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
    




      // peguei no dl e no filho dt o span Resposta colocando la a variavel respostas
       quizItem.querySelector('dl').appendChild(dt)
    }
    //removi a "resposta A" q continuava
    quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
} 


