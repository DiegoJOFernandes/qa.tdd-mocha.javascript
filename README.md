# **TDD com Mocha JS**

Este repositório foi criado para demonstrar a aplicação de TDD (Test-Driven Development) utilizando o framework de testes Mocha e a biblioteca Chai. O objetivo é validar a funcionalidade de uma classe `Pessoa`, determinando se uma pessoa é maior de idade ou não, com base nos requisitos fornecidos.

---

## **Respostas das Perguntas**

### **1. Quais são as duas regras principais do TDD?**
- Escrever um teste que falha antes de implementar o código funcional.
- Escrever apenas o código necessário para fazer o teste passar.

### **2. Qual é a ordem correta para a execução das tarefas no TDD?**
O ciclo de desenvolvimento no TDD segue a ordem:
1. **Red**: Escreva um teste que falha.
2. **Green**: Implemente o código mínimo necessário para que o teste passe.
3. **Refactor**: Refatore o código mantendo os testes funcionando.

### **3. Quais são as três leis do TDD?**
1. Não escreva código de produção sem antes escrever um teste que falhe.
2. Não escreva mais de um teste de unidade que falhe por vez.
3. Não escreva mais código de produção do que o necessário para fazer o teste atual passar.

---

## **Requisitos Funcionais**
- **RF001:** Pessoas com 18 anos ou mais podem consumir bebida alcoólica.
- **RF002:** Pessoas com menos de 18 anos não podem consumir bebida alcoólica.

---

## **Estrutura do Projeto**

```plaintext
qa.tdd-mocha.javascript/
├── src/
│   └── Pessoa.js          # Implementação da classe Pessoa
├── test/
│   └── Pessoa.test.js     # Testes unitários da classe Pessoa
├── .github/
│   └── workflows/
│       └── ci.yml         # Configuração do pipeline do GitHub Actions
├── package.json           # Configurações do projeto e dependências
├── README.md              # Documentação do projeto
```

---

## **Como Configurar e Executar o Projeto**

### **Pré-requisitos**
- Node.js instalado (versão 18 ou superior recomendada).
- Git instalado para clonar o repositório.

### **Passos para Instalar**
1. Clone o repositório:
   ```bash
   git clone https://github.com/DiegoJOFernandes/qa.tdd-mocha.javascript.git
   cd qa.tdd-mocha.javascript
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### **Executando os Testes**
Execute os testes unitários com o comando:
```bash
npm test
```

---

## **Pipeline de Integração Contínua**
O projeto inclui um pipeline configurado com o **GitHub Actions** para executar os testes automaticamente em cada push para o repositório.

Arquivo de configuração: `.github/workflows/ci.yml`.

---

## **Técnica de Teste Utilizada**

É o TDD foi escolhido para este desafio porque:
1. Ele garante que o código seja escrito para atender aos requisitos antes da implementação.
2. Facilita a identificação de possíveis erros no código durante o desenvolvimento.
3. Promove um design de código mais limpo e orientado pelos requisitos.
