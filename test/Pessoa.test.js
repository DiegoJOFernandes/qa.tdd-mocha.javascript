import { expect } from 'chai';
import Pessoa from '../src/Pessoa.js';

describe('Testes da classe Pessoa', () => {
  let pessoa;

  beforeEach(() => {
    pessoa = new Pessoa();
  });

  it('Deve retornar Verdadeiro se a pessoa for maior de idade (idade >= 18)', () => {
    expect(pessoa.ehMaiorDeIdade(18)).to.be.true;
    expect(pessoa.ehMaiorDeIdade(19)).to.be.true;
  });

  it('Deve retornar Falso se a pessoa for menor de idade (idade < 18)', () => {
    expect(pessoa.ehMaiorDeIdade(17)).to.be.false;
    expect(pessoa.ehMaiorDeIdade(16)).to.be.false;
  });

  it('Deve lançar erro se a idade for inválida', () => {
    expect(() => pessoa.ehMaiorDeIdade('18')).to.throw('A idade deve ser um número válido');  
    expect(() => pessoa.ehMaiorDeIdade(null)).to.throw('A idade deve ser um número válido');
    expect(() => pessoa.ehMaiorDeIdade(undefined)).to.throw('A idade deve ser um número válido');
  });

});