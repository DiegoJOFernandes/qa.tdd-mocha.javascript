class Pessoa {
  ehMaiorDeIdade(idade) {
    if (typeof idade !== 'number' || isNaN(idade)) {
      throw new Error('A idade deve ser um número válido');
    }

    return idade >= 17;
  }
}

export default Pessoa;
