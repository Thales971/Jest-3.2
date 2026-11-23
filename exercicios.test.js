const {
  calcularMedia,
  verificarAprovacao,
  classificarFaixaEtaria,
  converterKmParaMilhas,
  gerarEmailCorporativo,
  adicionarItemCarrinho,
  calcularSalarioLiquido,
  criarProduto,
  ehTrianguloValido,
  removerElemento
} = require('./exercicios');

describe('🧪 Suíte de Testes Unitários - 10 Regras de Negócio', () => {

  // Teste 1 - calcularMedia
  test('1. calcularMedia: deve calcular médias exatas, dízimas e validar intervalo de notas', () => {
    // Média exata: (7 + 8 + 9) / 3 = 8
    expect(calcularMedia(7, 8, 9)).toBe(8);

    // Média com dízima periódica: (7.5 + 8.0 + 9.0) / 3 = 8.1666... ≈ 8.17
    expect(calcularMedia(7.5, 8.0, 9.0)).toBeCloseTo(8.17, 2);

    // Nota menor que zero deve lançar erro
    expect(() => calcularMedia(-1, 8, 9)).toThrow('Nota inválida: deve estar entre 0 e 10');

    // Nota maior que dez deve lançar erro
    expect(() => calcularMedia(7, 8, 11)).toThrow('Nota inválida: deve estar entre 0 e 10');
  });

  // Teste 2 - verificarAprovacao
  test('2. verificarAprovacao: deve validar aprovação por nota e frequência mínima', () => {
    // Condição de corte exata: média 7.0 e frequência 75 → true
    expect(verificarAprovacao(7.0, 75)).toBe(true);

    // Aprovação folgada: média 8.5 e frequência 80 → true
    expect(verificarAprovacao(8.5, 80)).toBe(true);

    // Reprovação por nota: média 6.9 e frequência 90 → false
    expect(verificarAprovacao(6.9, 90)).toBe(false);

    // Reprovação por falta: média 9.0 e frequência 74 → false
    expect(verificarAprovacao(9.0, 74)).toBe(false);
  });

  // Teste 3 - classificarFaixaEtaria
  test('3. classificarFaixaEtaria: deve classificar faixas etárias e barrar idade negativa', () => {
    expect(classificarFaixaEtaria(10)).toBe('Criança');
    expect(classificarFaixaEtaria(15)).toBe('Adolescente');
    expect(classificarFaixaEtaria(25)).toBe('Adulto');
    expect(classificarFaixaEtaria(65)).toBe('Idoso');

    // Idade negativa lança exceção
    expect(() => classificarFaixaEtaria(-5)).toThrow('Idade não pode ser negativa');
  });

  // Teste 4 - converterKmParaMilhas
  test('4. converterKmParaMilhas: deve converter km para milhas e validar distância positiva', () => {
    // 10 km * 0.621371 = 6.21371 → 6.21 com 2 casas
    expect(converterKmParaMilhas(10)).toBeCloseTo(6.21, 2);

    // 0 km retorna 0
    expect(converterKmParaMilhas(0)).toBe(0);

    // Distância negativa lança exceção
    expect(() => converterKmParaMilhas(-10)).toThrow('Distância não pode ser negativa');
  });

  // Teste 5 - gerarEmailCorporativo
  test('5. gerarEmailCorporativo: deve normalizar nome, sobrenome e domínio em minúsculas', () => {
    expect(gerarEmailCorporativo('Lucas', 'Silva', 'empresa.com')).toBe('lucas.silva@empresa.com');
    expect(gerarEmailCorporativo(' Ana ', ' Souza ', 'TECH.IO')).toBe('ana.souza@tech.io');
  });

  // Teste 6 - adicionarItemCarrinho
  test('6. adicionarItemCarrinho: deve adicionar item ao carrinho preservando imutabilidade', () => {
    const carrinhoInicial = ['Monitor', 'Mouse'];
    const novoCarrinho = adicionarItemCarrinho(carrinhoInicial, 'Teclado');

    // Novo array contém os itens anteriores mais o novo
    expect(novoCarrinho).toEqual(['Monitor', 'Mouse', 'Teclado']);

    // Novo array possui tamanho 3
    expect(novoCarrinho).toHaveLength(3);

    // Array original não foi modificado, permanece com tamanho 2
    expect(carrinhoInicial).toHaveLength(2);
    expect(carrinhoInicial).toEqual(['Monitor', 'Mouse']);
  });

  // Teste 7 - calcularSalarioLiquido
  test('7. calcularSalarioLiquido: deve deduzir porcentagem e lançar erro para valores inválidos', () => {
    // Salário de 3000 com 10% de desconto = 2700
    expect(calcularSalarioLiquido(3000, 10)).toBe(2700);

    // Salário de 5000 com 0% de desconto = 5000
    expect(calcularSalarioLiquido(5000, 0)).toBe(5000);

    // Salário menor ou igual a zero lança exceção
    expect(() => calcularSalarioLiquido(0, 10)).toThrow('Valores de salário ou desconto inválidos');

    // Desconto negativo lança exceção
    expect(() => calcularSalarioLiquido(3000, -5)).toThrow('Valores de salário ou desconto inválidos');
  });

  // Teste 8 - criarProduto
  test('8. criarProduto: deve instanciar produto com estoque ativo e barrar preço inválido', () => {
    const produto = criarProduto(1, 'Monitor', 899.90, 'Informática');
    expect(produto).toEqual({ id: 1, nome: 'Monitor', preco: 899.90, categoria: 'Informática', emEstoque: true });

    // Preço zero lança exceção
    expect(() => criarProduto(2, 'Teclado', 0, 'Informática')).toThrow('Preço deve ser maior que zero');

    // Preço negativo lança exceção
    expect(() => criarProduto(3, 'Mouse', -50, 'Informática')).toThrow('Preço deve ser maior que zero');
  });

  // Teste 9 - ehTrianguloValido
  test('9. ehTrianguloValido: deve validar a condição geométrica de existência de um triângulo', () => {
    // Triângulo válido clássico 3-4-5
    expect(ehTrianguloValido(3, 4, 5)).toBe(true);

    // Não fecha triângulo: 1 + 2 < 10
    expect(ehTrianguloValido(1, 2, 10)).toBe(false);

    // Medida com zero: inválido
    expect(ehTrianguloValido(0, 4, 5)).toBe(false);
  });

  // Teste 10 - removerElemento
  test('10. removerElemento: deve remover item da lista preservando o array original', () => {
    const listaOriginal = ['banana', 'maca', 'uva'];
    const listaSemMaca = removerElemento(listaOriginal, 'maca');

    // Remove 'maca'
    expect(listaSemMaca).toEqual(['banana', 'uva']);

    // Remove elemento que não existe (99 de [1, 2, 3])
    expect(removerElemento([1, 2, 3], 99)).toEqual([1, 2, 3]);

    // Array original manteve todos os 3 elementos intactos
    expect(listaOriginal).toHaveLength(3);
    expect(listaOriginal).toEqual(['banana', 'maca', 'uva']);
  });

});