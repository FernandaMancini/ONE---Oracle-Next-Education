<h1>
     <img align="center" width="60px" src="https://github.com/user-attachments/assets/db745f87-96f4-4381-9804-05a12db0aaf2">
    <span>Challenge Alura Store - Desempenho das Lojas</span>
</h1>
Este projeto apresenta uma Análise de Dados sobre o Desempenho e as Avaliações das quatro Lojas fictícias da Alura Store. O objetivo é identificar a loja com menor eficiência e, com base nos dados, apresentar uma recomendação final sobre **qual loja deve ser vendida.** Dessa forma, auxiliando o Senhor João na tomada de decisão sobre qual unidade da rede Alura Store deve ser negociada para viabilizar um novo empreendimento.

# 🎯 Propósito da Análise
A Análise tem o propósito de Comparar e Visualizar o Desempenho de cada Loja com Indicadores Relevantes, por exemplo:
- **Faturamento Total;**
- **Vendas por Categoria;**
- **Média de Avaliações;**
- **Produtos Mais e Menos Vendidos;**
- **Frete Médio;**
- **Ticket Médio;**
- **Compra Por Local**

# 🔗 Estrutura do Projeto
  
```txt
📁 Formacao-DataScience/
├── Challenge1/                      # Pasta do Challenge
│   └── README.md                    # Documento com a apresentação do projeto
│   └── base-de-dados-challenge-1    # Pasta com a Base de Dados de Cada Loja
|      └── loja_1.csv                # Base de Dados da Loja 1
|      └── loja_2.csv                # Base de Dados da Loja 2
|      └── loja_3.csv                # Base de Dados da Loja 3
|      └── loja_4.csv                # Base de Dados da Loja 4           
|   └── Challenge_Loja_Alura.ipynb   # Código principal da análise de dados
└──
```

# 👁 Visualização de Dados

## Faturamento por Loja
O gráfico apresenta o faturamento total de quatro lojas. A Loja 1 lidera com aproximadamente R$ 1,55 milhão. Loja 2 e Loja 3 têm faturamentos semelhantes, levemente inferiores. A Loja 4 possui o menor faturamento, cerca de R$ 1,38 milhão.

![download](https://github.com/user-attachments/assets/ffc1ae53-a6b6-46c2-8aa5-17bcec8f483c)

## Vendas por Categoria
O gráfico mostra o faturamento por categoria de produto em cada loja. A categoria móveis tem o maior faturamento em todas as lojas. Já instrumentos musicais e utilidades domésticas registram os menores valores. Há variações moderadas entre as lojas, com destaque para a Loja 3 em móveis e Loja 2 em livros.

![download](https://github.com/user-attachments/assets/fdd62357-8bdd-415c-9ff3-39cae56e094e)

## Boxplot Distribuição de Preços
O gráfico mostra a distribuição de preços dos produtos em cada loja. A mediana de preços é semelhante entre as lojas, em torno de R$ 300. Existe uma grande quantidade de produtos com preços muito altos (outliers). A maioria dos produtos está concentrada abaixo de R$ 1.000 em todas as lojas.

![download](https://github.com/user-attachments/assets/8a9d6ac2-dbb4-4433-93dc-75a0aa6e7610)

## Dispersão Relação Preço e Avaliação
Esse gráfico mostra a relação entre o preço dos produtos e as avaliações dos clientes para cada loja.

Não há uma correlação clara entre preço e avaliação: produtos caros e baratos aparecem em todas as faixas de avaliação.

![download](https://github.com/user-attachments/assets/3eae9169-3ef1-4299-82a8-6f05500c705b)

## Comparativo Regional entre lojas
Esse gráfico mostra um comparativo regional do número de compras por estado entre as quatro lojas.

![download](https://github.com/user-attachments/assets/08b89bae-d850-4941-a9aa-084f9284f123)

# ✨ Conclusão 

![download](https://github.com/user-attachments/assets/92a13245-3751-4c58-acdd-8d6a6c2b2498)

## **Loja 1:**
- Pior em avaliação.
- Pior frete (mais caro).
- Mas tem bom desempenho em ticket médio e faturamento.
- Estável e competitiva, especialmente no Sudeste e Sul.
    - 🟢 Deve ser mantida, mas precisa melhorar a experiência do cliente e rever frete.

## **Loja 2:**
- Desempenho geral mediano.
- Avaliação não é a pior.
- Mantém boa presença regional, mas tem quedas sutis em alguns estados mais ao sul.
    - 🟡 Está no meio termo, pode melhorar com foco em produtos estratégicos.

## **Loja 3:**
- Pior em vendas por categoria.
- Médio nos demais critérios.
- Mais equilibrada e com pequenos destaques regionais, especialmente em MG e BA.
    - 🟡 Está no meio termo, pode melhorar com foco em produtos estratégicos, além de manter sua boa relevância regional, principalmente em MG e BA.

## **Loja 4:**
- Pior em ticket médio.
- Pior faturamento.
- Médio na maioria dos critérios.
- Bons resultados no litoral (RJ, SC, SE), mas fica atrás em estados do interior.
- Frete é o melhor (mais barato).
    - 🔴 Ponto Crítico: Tem o pior faturamento, o pior ticket médio e pouca relevância regional, por mais que tenha o melhor frete.
 
# 💰 Recomendação: Venda da Loja 4
Após a análise completa do desempenho das lojas, com base nos dados e nos gráficos apresentados, recomenda-se ao Sr. João a venda da Loja 4.

A decisão se fundamenta nos seguintes pontos:

- **Baixo faturamento:** A Loja 4 apresenta o menor desempenho em faturamento quando comparada às demais unidades.

- **Avaliação mediana:** As avaliações dos clientes também não se destacam, mantendo uma média de apenas 4.00, inferior à média das outras lojas.

- **Ticket médio abaixo do ideal:** O ticket médio é o mais baixo entre todas, impactando negativamente o volume de vendas e o faturamento total.

- **Baixa representatividade regional:** A atuação da Loja 4 é restrita a poucos estados, com leve presença apenas no Rio de Janeiro (RJ), Santa Catarina (SC) e Sergipe (SE).

Diante desses fatores, a manutenção da Loja 4 representa um menor retorno sobre o investimento, tornando a sua venda uma decisão estratégica para otimização dos recursos da empresa.
