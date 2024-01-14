# Atividade:

Você faz parte da equipe de análise de dados da TechData, uma empresa de tecnologia renomada. Ela coleta uma enorme quantidade de dados de seus produtos, usuários e transações. Recentemente, essa empresa decidiu aprimorar as suas habilidades de consulta de dados usando Data Query Language (DQL) para obter insights valiosos sobre o desempenho dos produtos, o comportamento do usuário e a eficácia das campanhas de marketing.

Para isso, você foi designado para realizar as seguintes tarefas:

1. Seleção de dados: escreva uma consulta que selecione todos os dados de transações da tabela de transações;

2. Renomeando colunas: utilize a cláusula AS para renomear as colunas da consulta anterior para nomes mais descritivos, como ID_Transacao, Data, Valor etc.;

3. Filtragem com a cláusula WHERE: escreva uma consulta que selecione apenas as transações com um valor superior a R$ 100,00

4. Ordenação com a cláusula ORDER BY: ordene as transações por valor em ordem decrescente;

5. Agregação com funções SQL: utilize funções SQL como AVG, MAX, MIN e COUNT para calcular a média, o valor máximo, o valor mínimo e o número total de transações;

6. Agrupamento com a cláusula GROUP BY: agrupe as transações por produto e calcule a média de valor para cada produto;

7. Consulta combinada: escreva uma consulta que selecione a quantidade total de produtos vendidos (COUNT), o valor total das vendas (SUM) e a média de valor por transação, agrupados por categoria de produto.

**Entregáveis:**

- Arquivo com as consultas DQL;
- Uma breve apresentação dos insights obtidos a partir dos resultados das consultas.

# Resposta:

### 1.	
**SELECT * FROM ljeletronicos.vendas;**

<img align="center" src="https://raw.githubusercontent.com/alexklenio/softexFapBackEnd2023/main/Banco%20de%20dados/Modulo%2003/Atividade%2001/imagens/01.png" width="1000"/>

### 2.
**USE ljeletronicos;**
**SELECT transcaoID AS 'IDtransacao',**
**Data AS 'datavenda',**
**Valor AS 'valorvenda'**
**FROM vendas;**

### Antes do comando de alteração de colunas

<img align="center" src="https://raw.githubusercontent.com/alexklenio/softexFapBackEnd2023/main/Banco%20de%20dados/Modulo%2003/Atividade%2001/imagens/02.png" width="1000"/>

### Depois do comando de alteração de colunas:

<img align="center" src="https://raw.githubusercontent.com/alexklenio/softexFapBackEnd2023/main/Banco%20de%20dados/Modulo%2003/Atividade%2001/imagens/03.png" width="1000"/>

### 3.	
**SELECT * FROM vendas WHERE valor > 100.00;**

**Resultado:**

<img align="center" src="https://raw.githubusercontent.com/alexklenio/softexFapBackEnd2023/main/Banco%20de%20dados/Modulo%2003/Atividade%2001/imagens/04.png" width="1000"/>

### 4.
**SELECT * FROM vendas ORDER BY Valor DESC;**

**Resultado:**

<img align="center" src="https://raw.githubusercontent.com/alexklenio/softexFapBackEnd2023/main/Banco%20de%20dados/Modulo%2003/Atividade%2001/imagens/05.png" width="1000"/>

### 5.
**SELECT
**AVG(Valor) AS Media_Valor,**
**MAX(Valor) AS Valor Máximo,**
**MIN(Valor) AS Valor_Minimo,**
**COUNT(*) AS qtdvendas**
**FROM vendas**

**Resultado:**

<img align="center" src="https://raw.githubusercontent.com/alexklenio/softexFapBackEnd2023/main/Banco%20de%20dados/Modulo%2003/Atividade%2001/imagens/06.png" width="1000"/>

### 6.
**	SELECT GRUPO,**
**AVG(Valor) AS Media_Valor_Por_Grupo**
**FROM vendas**
**GROUP BY grupo;**

**Resultado**

<img align="center" src="https://raw.githubusercontent.com/alexklenio/softexFapBackEnd2023/main/Banco%20de%20dados/Modulo%2003/Atividade%2001/imagens/07.png" width="1000"/>

### 7.	
**SELECT grupo,**

**COUNT(*) AS Qtd_Total_Produtos,**

**SUM(Valor) AS Valor_Total_Vendas,**

**AVG(Valor) AS Media_Valor_Por_Transacao**

**FROM vendas**

**GROUP BY grupo;**

**Resultado**

<img align="center" src="https://raw.githubusercontent.com/alexklenio/softexFapBackEnd2023/main/Banco%20de%20dados/Modulo%2003/Atividade%2001/imagens/08.png" width="1000"/>

### 8. Insights

Para fins de avaliação, foram registradas seis vendas, sendo que duas delas foram superiores a R$ 100,00, o que representa 33% do total.

Esse resultado indica que, no período analisado, os clientes necessitaram adquirir produtos com valores inferiores a R$ 100,00. Como consequência, a média de valores das vendas foi inferior a R$ 100,00, situando-se em aproximadamente R$ 96,83. A venda mais cara do período foi de R$ 200,00 e a mais barata, de R$ 50,00.

No entanto, mesmo com a maior parte das vendas registradas tendo sido de valores inferiores a R$ 100,00, foram os produtos dessa faixa que apresentaram a maior média de valores de vendas, quando analisados por grupos. Os valores médios foram os seguintes: Grupo-Gabinete: R$ 200,00; Grupo-SSD: R$ 99,50; e Grupo-Memória: aproximadamente R$ 60,68.

Com base nos dados apresentados, é possível concluir que as vendas mais favoráveis para a empresa são as do Grupo-Gabinete e Grupo-SSD, pois, mesmo com um volume menor, elevam significativamente os valores do faturamento.
