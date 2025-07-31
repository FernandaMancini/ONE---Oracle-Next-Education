<h1>
     <img align="center" width="60px" src="https://github.com/user-attachments/assets/db745f87-96f4-4381-9804-05a12db0aaf2">
    <span>Projeto de Previsão de Churn - Telecom X</span>
</h1>

Este projeto apresenta uma solução de Machine Learning para a previsão de evasão de clientes (churn) da empresa Telecom X. O objetivo principal é identificar os fatores que levam ao cancelamento dos serviços e, a partir de um modelo preditivo, oferecer insights e recomendações estratégicas para a retenção de clientes.

# 🎯 Propósito da Análise
O projeto visa responder a questões cruciais para a empresa, usando um modelo de classificação:

* Quais as principais variáveis que influenciam o churn?

* O tipo de contrato tem impacto significativo na evasão?

* Existe uma relação entre o tempo de permanência e o risco de saída?

A partir dessas respostas, o projeto busca criar uma base sólida para orientar a tomada de decisões e direcionar ações práticas de retenção de clientes.

# 🔗 Estrutura do Projeto
  
```txt
📁 Formacao-DataScience/
├── Challenge3/                            # Pasta do Challenge
│   └── README.md                          # Documento com a apresentação do projeto
│   └── Base-Challenge3-TelecomX2.csv      # Arquivo csv com os dados da loja
|   └── Challenge_telecom_x.ipynb          # Código principal da análise de dados
└──
```

# 👁 Análise e Modelagem
Neste projeto, foram utilizadas as seguintes etapas:

* **Análise Exploratória de Dados (EDA):** Entendimento inicial do dataset e da distribuição das variáveis.

* **Pré-processamento:** Limpeza, remoção de colunas irrelevantes e tratamento de dados categóricos.

* **Divisão do Dataset:** Separação dos dados em conjuntos de treino e teste.

* **Modelagem:** Treinamento de um modelo de Random Forest para prever o churn.

* **Avaliação do Modelo:** Análise da performance do modelo usando métricas como Acurácia, F1-Score e matriz de confusão.

* **Importância das Features:** Identificação das variáveis mais relevantes para a previsão de churn.

# ✨ Conclusões e Insights do Modelo
O modelo de Machine Learning revelou insights importantes sobre a rotatividade de clientes:

* Contratos Mensais são o principal fator de risco: A feature Contrato_Conta_mensal foi a mais influente na previsão do churn, indicando que clientes com planos de curto prazo são os mais propensos a cancelar.

* Gastos Totais e Tempo de Permanência: As variáveis Total_Gasto e Meses_Com_Empresa também são cruciais, sugerindo que o valor que o cliente gasta e o seu tempo de permanência na empresa são fortes preditores de retenção.

* Cuidado com a Classe Minoritária: A análise do desbalanceamento de classes mostrou que a empresa tem uma base de clientes majoritariamente fiel, reforçando a importância de um modelo que consiga prever com precisão a classe minoritária (churn).

# 💡 Recomendações Estratégicas
Com base nas conclusões do modelo, as seguintes ações são recomendadas para a Telecom X:

✅ Campanhas de Migração de Contrato: Criar ofertas e benefícios exclusivos para clientes com contratos mensais, incentivando a migração para planos anuais ou bienais.

✅ Foco na Retenção nos Primeiros Meses: Desenvolver programas de acompanhamento e fidelização para clientes novos, especialmente nos primeiros 90 dias, para aumentar o tempo de permanência.

✅ Análise de Valor do Cliente: Usar o Total_Gasto como um indicador para segmentar clientes. Clientes de alto gasto podem precisar de um suporte mais premium, enquanto clientes de baixo gasto podem se beneficiar de ofertas de up-sell.

✅ Uso Contínuo de Modelos Preditivos: Implementar o modelo para identificar proativamente clientes em alto risco de churn e direcionar ações de retenção antes que o cancelamento aconteça.
