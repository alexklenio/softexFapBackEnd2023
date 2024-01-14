# Atividade:

Considere um banco de dados simples que armazena informações sobre livros e autores. As tabelas relevantes são as seguintes:

**Tabela "Autores":**

Colunas: AutorID (Chave Primária), Nome, Nacionalidade

**Tabela "Livros":**

Colunas: LivroID (Chave Primária), Título, AnoPublicação, AutorID (Chave Estrangeira referenciando Autores)

**Instruções:**

**1. Inserção de dados:**Insira alguns registros nas tabelas "Autores" e "Livros". Certifique-se de que existam, pelo menos, três autores e cinco
livros associados a esses autores;

**2. Consulta simples:**Realize uma consulta simples para listar todos os autores e seus livros associados;

**3. Consulta com junção INNER JOIN:**Crie uma consulta que utilize INNER JOIN para listar os detalhes dos livros e seus autores
correspondentes;

**4. Consulta com junção LEFT JOIN:**Elabore uma consulta que utilize LEFT JOIN para exibir todos os autores, independentemente de terem livros
associados. Inclua informações dos livros, se disponiveis;

**5. Consulta com filtro por nacionalidade:**Realize uma consulta que liste os autores e seus livros, mas restrinja os resultados apenas aos autores
de uma nacionalidade especifica;

**6. Consulta agregada:**Crie uma consulta que agregue dados para contar quantos livros cada autor escreveu.

**Observações:**

- Utilize as chaves primárias e estrangeiras corretamente nas junções;

- Documente cada consulta explicando o propósito e os resultados esperados;

- Considere a importância das junções para unir informações de tabelas relacionadas e entender a interconexão dos dados.

**Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.**

# Resposta:

	

**Desafio de banco de dados de livros e autores**


**Tabela "Autores":**

* Colunas: AutorID (Chave Primária), Nome, Nacionalidade

**Tabela "Livros":**

* Colunas: LivroID (Chave Primária), Título, AnoPublicação, AutorID (Chave Estrangeira referenciando Autores)

**Inserção de dados**

O primeiro passo é inserir alguns registros nas tabelas "Autores" e "Livros". Certifique-se de que existam, pelo menos, três autores e cinco livros associados a esses autores.


```sql
INSERT INTO Autores (Nome, Nacionalidade)
VALUES
('J.K. Rowling', 'Inglaterra'),
('Stephen King', 'Estados Unidos'),
('Paulo Coelho', 'Brasil');

INSERT INTO Livros (Título, AnoPublicação, AutorID)
VALUES
('Harry Potter e a Pedra Filosofal', 1997, 1),
('O Senhor dos Anéis: A Sociedade do Anel', 1954, 2),
('O Alquimista', 1988, 3),
('O Chamado de Cthulhu', 1928, 2),
('O Pequeno Príncipe', 1943, 3);
```

Este código insere os seguintes registros nas tabelas:

**Tabela "Autores"**

| AutorID | Nome | Nacionalidade |
|---|---|---|
| 1 | J.K. Rowling | Inglaterra |
| 2 | Stephen King | Estados Unidos |
| 3 | Paulo Coelho | Brasil |

**Tabela "Livros"**

| LivroID | Título | AnoPublicação | AutorID |
|---|---|---|---|
| 1 | Harry Potter e a Pedra Filosofal | 1997 | 1 |
| 2 | O Senhor dos Anéis: A Sociedade do Anel | 1954 | 2 |
| 3 | O Alquimista | 1988 | 3 |
| 4 | O Chamado de Cthulhu | 1928 | 2 |
| 5 | O Pequeno Príncipe | 1943 | 3 |

**Consulta simples**

O próximo passo é realizar uma consulta simples para listar todos os autores e seus livros associados.


```sql
SELECT
  a.Nome,
  a.Nacionalidade,
  l.Título,
  l.AnoPublicação
FROM
  Autores a
INNER JOIN
  Livros l
ON
  a.AutorID = l.AutorID;
```

Este código retorna o seguinte resultado:

| Nome | Nacionalidade | Título | AnoPublicação |
|---|---|---|---|
| J.K. Rowling | Inglaterra | Harry Potter e a Pedra Filosofal | 1997 |
| J.K. Rowling | Inglaterra | O Pequeno Príncipe | 1943 |
| Stephen King | Estados Unidos | O Senhor dos Anéis: A Sociedade do Anel | 1954 |
| Stephen King | Estados Unidos | O Chamado de Cthulhu | 1928 |
| Paulo Coelho | Brasil | O Alquimista | 1988 |

Observe que esta consulta retorna todos os autores e seus livros associados, mesmo que alguns autores não tenham livros associados.

**Consulta com junção INNER JOIN**

A consulta com junção INNER JOIN é uma consulta que retorna apenas os registros que correspondem a ambas as tabelas relacionadas.

No caso deste desafio, podemos usar a seguinte consulta para listar os detalhes dos livros e seus autores correspondentes:

```sql
SELECT
  l.LivroID,
  l.Título,
  l.AnoPublicação,
  a.Nome,
  a.Nacionalidade
FROM
  Autores a
INNER JOIN
  Livros l
ON
  a.AutorID = l.AutorID;
```

Este código retorna o seguinte resultado:

| LivroID | Título | AnoPublicação | Nome | Nacionalidade |
|---|---|---|---|---|
| 1 | Harry Potter e a Pedra Filosofal | 1997 | J.K