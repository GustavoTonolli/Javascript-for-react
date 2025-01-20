import './style.css'

const pessoa = {
  nome: 'Gustavo',
  sobrenome: 'Tonolli',
  apelido: 'Gu',
  idade: 28,
  endereco: {
    rua: 'Joao de Souza Melo',
    numero: 364,
    cidade: 'Joinville'
  }
}

const dataEntries = JSON.stringify(Object.entries(pessoa))

const dataValues = JSON.stringify(Object.values(pessoa))

const dataKeys = JSON.stringify(Object.keys(pessoa))

const existeNome = "nome" in pessoa

const { nome, sobrenome, idade
} = pessoa

document.querySelector('#app').innerHTML = JSON.stringify('Meu nome é ' + nome + ' ' + sobrenome + ' e tenho ' + idade + ' anos.')

setupCounter(document.querySelector('#counter'))

function fazerAlgumaCoisa() {
  console.log('Fiz alguma coisa');
}
