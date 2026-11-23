# 🧪 Atividade 3.2 - Exercícios Jest

Implementação de 10 funções de regras de negócio e suíte de testes unitários utilizando **Jest**, desenvolvida para a disciplina de Testes de Software / QA.

## 📁 Estrutura do Projeto

```
atividade-3.2-jest/
├── exercicios.js          # Código de produção com as 10 funções
├── exercicios.test.js     # Suíte de testes unitários (10 testes)
├── package.json           # Manifesto do projeto com script de teste
├── .gitignore             # Arquivos ignorados pelo Git
└── README.md              # Este arquivo
```

## 🚀 Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar todos os testes
```bash
npm test
```

Ou rodar apenas este arquivo:
```bash
npx jest exercicios.test.js
```

### 3. Resultado esperado
```
Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
```

## 📋 As 10 Funções Implementadas

| # | Função | Descrição |
|---|--------|-----------|
| 1 | `calcularMedia(nota1, nota2, nota3)` | Média aritmética simples com validação de notas (0 a 10) |
| 2 | `verificarAprovacao(media, frequencia)` | Aprovação se média ≥ 7.0 e frequência ≥ 75% |
| 3 | `classificarFaixaEtaria(idade)` | Classifica: Criança, Adolescente, Adulto ou Idoso |
| 4 | `converterKmParaMilhas(km)` | Converte quilômetros para milhas (× 0.621371) |
| 5 | `gerarEmailCorporativo(nome, sobrenome, empresa)` | Gera e-mail padronizado: `nome.sobrenome@empresa` |
| 6 | `adicionarItemCarrinho(carrinho, item)` | Adiciona item ao carrinho de forma imutável |
| 7 | `calcularSalarioLiquido(salarioBruto, percentualDesconto)` | Calcula salário líquido com desconto percentual |
| 8 | `criarProduto(id, nome, preco, categoria)` | Cria objeto de produto com estoque ativo |
| 9 | `ehTrianguloValido(ladoA, ladoB, ladoC)` | Valida triângulo via desigualdade triangular |
| 10 | `removerElemento(array, elemento)` | Remove elemento de array de forma imutável |

## 🧪 Matchers do Jest Utilizados

- `.toBe()` — comparação estrita para primitivos
- `.toBeCloseTo()` — comparação de decimais com tolerância
- `.toEqual()` — comparação profunda para arrays e objetos
- `.toHaveLength()` — validação de tamanho de array
- `.toThrow()` — validação de exceções (sempre com arrow function `() => fn()`)

## 📦 Tecnologias

- **Node.js**
- **Jest** (framework de testes unitários)

## 📤 Entrega

1. Tire um **screenshot** do terminal mostrando os 10 testes aprovados (`10 passed, 10 total`)
2. Salve `exercicios.js` e `exercicios.test.js` no seu repositório GitHub
3. Submeta o link e a captura de tela no Google Classroom