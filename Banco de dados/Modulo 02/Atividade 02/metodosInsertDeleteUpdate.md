# Atividade:

Você é o gerente de uma loja de eletrônicos e deseja utilizar um banco de dados para rastrear o estoque de seus produtos. Para isso, você precisa executar várias
ações de gerenciamento no banco de dados da loja.

Nesse caso, a tabela de banco de dados disponível é:

Produtos
Colunas: ProdutoID (Chave Primária), Nome do Produto, Preço, Quantidade em Estoque.

Crie os seguintes comandos para inserção e manipulação de dados, partindo do pressuposto de que os de criação da tabela já foram criados. Eles são:

1. inserção de produtos (INSERT): insira três novos produtos na tabela "Produtos" com os seguintes dados:

produto 1: Nome - "Smartphone", Preço - 799.99, Quantidade - 20 unidades em estoque;
produto 2: Nome - "Tablet", Preço - 349.99, Quantidade - 10 unidades em estoque;
produto 3: Nome - "Fone de Ouvido, Preço - 49.99, Quantidade - 50 unidades em estoque.
2. atualização de estoque (UPDATE): atualize o estoque do "Smartphone para 25 unidades e o preço para 849.99 na tabela "Produtos."

3. venda de produtos (DELETE): simule a venda de cinco unidades do "Tablet" e dez unidades do "Fone de Ouvido. Atualize o estoque na tabela "Produtos" de
acordo com as vendas.

# Resposta:

### A tabela já existe e tem as seguintes colunas:

* ProdutoID (Chave Primária)
* Nome do Produto
* Preço
* Quantidade em Estoque

### Vamos começar inserindo três novos produtos:

```sql
INSERT INTO Produtos (ProdutoID, NomeDoProduto, Preco, QuantidadeEmEstoque)
VALUES (1, 'Smartphone', 799.99, 20),
       (2, 'Tablet', 349.99, 10),
       (3, 'Fone de Ouvido', 49.99, 50);
```

### Esse comando irá inserir os seguintes dados na tabela:

* Produto 1: ID 1, Nome "Smartphone", Preço 799.99, Quantidade em Estoque 20
* Produto 2: ID 2, Nome "Tablet", Preço 349.99, Quantidade em Estoque 10
* Produto 3: ID 3, Nome "Fone de Ouvido", Preço 49.99, Quantidade em Estoque 50

### Agora, vamos atualizar o estoque do Smartphone para 25 unidades e o preço para 849.99:

```sql
UPDATE Produtos
SET QuantidadeEmEstoque = 25,
    Preco = 849.99
WHERE ProdutoID = 1;
```

### Esse comando irá atualizar os seguintes dados na tabela:

* Produto 1: Quantidade em Estoque 25
* Produto 1: Preço 849.99

### Por fim, vamos simular a venda de cinco unidades do Tablet e dez unidades do Fone de Ouvido. Para isso, vamos atualizar o estoque de acordo com as vendas: 

```sql
UPDATE Produtos
SET QuantidadeEmEstoque = QuantidadeEmEstoque - 5
WHERE ProdutoID = 2;

UPDATE Produtos
SET QuantidadeEmEstoque = QuantidadeEmEstoque - 10
WHERE ProdutoID = 3;
```

### Esses dois comandos irão atualizar os seguintes dados na tabela:

* Produto 2: Quantidade em Estoque 10
* Produto 3: Quantidade em Estoque 40
