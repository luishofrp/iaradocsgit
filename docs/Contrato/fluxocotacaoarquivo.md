---
sidebar_position: 6
---
# Importação 

## Sumário

- [1. Acesso à Funcionalidade](#1-acesso-à-funcionalidade)
- [2. Opções Disponíveis](#2-opções-disponíveis-canto-superior-direito)
  - [2.1. Importar Arquivo](#21-importar-arquivo)
  - [2.2. Cadastrar Manualmente](#22-cadastrar-manualmente)
  - [2.3. Filtrar](#23-filtrar)
- [3. Importação via Planilha Iara](#3-importação-via-planilha-iara)
  - [3.1. Aba "Cabeçalho Contrato"](#31-aba-cabeçalho-contrato)
  - [3.2. Aba "Cabeçalho Cotação"](#32-aba-cabeçalho-cotação)
  - [3.3. Aba "Item"](#33-aba-item)
  - [3.4. Aba "Marcas Solicitadas"](#34-aba-marcas-solicitadas)
- [4. Pós-Importação](#4-pós-importação)
- [5. Detalhes do Contrato](#5-detalhes-do-contrato)
  - [5.1. Timeline de Etapas](#51-timeline-de-etapas)
  - [5.2. Abas Principais](#52-abas-principais)
    - [5.2.1. Resumo do Contrato](#521-resumo-do-contrato)
    - [5.2.2. Registro do Contrato](#522-registro-do-contrato)
    - [5.2.3. Cláusulas do Contrato](#523-cláusulas-do-contrato)
    - [5.2.4. Cotações Vinculadas](#524-cotações-vinculadas)
    - [5.2.5. Responsáveis](#525-responsáveis)
    - [5.2.6. Arquivos](#526-arquivos)
- [6. Ações Adicionais](#6-ações-adicionais)

## Documentação Funcional

**Versão 1.0 | Data: 08/03/2025**

## 1. Acesso à Funcionalidade

1. Acesse o menu principal.  
2. Selecione a opção **"Contrato"**.

## 2. Opções Disponíveis (Canto Superior Direito)

No canto superior direito da tela, estão disponíveis três ações principais:

### 2.1. Importar Arquivo

Abre um modal com as seguintes opções:

- **Upload de Arquivo:** Faça o upload de uma planilha no modelo Iara (formato `.xlsx`).  
  - *Observação:* Apenas arquivos no modelo Iara são aceitos.
- **Download do Modelo:** Baixe a planilha modelo mais recente.
- **Preencher Formulário Manual:** Abre o formulário de cadastro de contrato.

**Campos Obrigatórios do Formulário Manual:**

| Campo                | Tipo      | Descrição                                     |
|----------------------|----------|-----------------------------------------------|
| Título              | Texto    | Nome identificador do contrato.               |
| Tipo de Entrega     | Seleção  | CIF ou FOB.                                   |
| Empresa            | Seleção  | Unidade responsável.                          |
| Confidencialidade   | Seleção  | Sim/Não.                                      |
| Cliente            | Seleção  | Cliente vinculado ao contrato.                |
| Tipo de Contrato    | Seleção  | Pré-contrato, Contrato formal ou Comercial.   |
| Data Inicial        | Data     | Data de início do contrato (DD/MM/AAAA).      |
| Data Final         | Data     | Data de término do contrato (DD/MM/AAAA).     |

### 2.2. Cadastrar Manualmente

Abre um formulário com duas abas:

#### **Aba 1: Registro do Contrato**
**Campos Obrigatórios:**
- Empresa
- Cliente
- Tipo de Contrato
- Título
- Data Inicial
- Data Final
- Confidencialidade
- Tipo de Entrega (CIF/FOB)

**Campos Opcionais:**
- Custo de Envio
- Frete
- Forma de Pagamento
- Preço/Reajuste
- Total

#### **Aba 2: Cláusulas do Contrato**
Campos de texto para preenchimento livre:
- Garantia
- Multa de Trânsito
- Rescisão
- Exclusividade
- Trabalhista
- Obrigações
- Meio Ambiente
- Fórum
- Propriedade Intelectual
- Bônus

Após preenchimento, clique em **Salvar**.

### 2.3. Filtrar

Abre um menu lateral para pesquisar contratos com os seguintes filtros:
- Empresa
- Cliente
- CNPJ
- Código do Contrato
- Etapa do Contrato
- Data Inicial/Final
- Status

## 3. Importação via Planilha Iara

### **Requisitos da Planilha**
- **Formato:** `.xlsx` (Excel).
- **Abas Obrigatórias:**
  - Cabeçalho Contrato
  - Cabeçalho Cotação
  - Item
  - Marcas Solicitadas

### **3.1. Aba "Cabeçalho Contrato"**

| Campo              | Formato/Exemplo                       |
|--------------------|--------------------------------------|
| Cod Contrato      | Número único (ex: 12345).           |
| CNPJ do Cliente   | Formato completo (ex: 67.380.170/0001-10). |
| CNPJ do Fornecedor | Formato completo (ex: 67.380.170/0001-10). |
| Tipo de Frete     | C (CIF) ou F (FOB).                 |
| Tipo de Contrato  | 1 (Pré-Contrato), 2 (Relacional), 3 (Transacional). |
| Confidencialidade | Sim/Não.                            |
| Etapas           | 1 (Orçamento) a 5 (Cancelado).       |
| Data Inicial      | DD/MM/AAAA.                         |
| Data Final       | DD/MM/AAAA.                         |

**Campos Opcionais:**  
Custo Envio, Frete, Garantia, Preço/Reajuste, Total, Prop. Intelectual, Meio Ambiente, Exclusividade, Obrigações, Multa de Trânsito, Trabalhista, Fórum, Rescisão, Bônus.

### **3.2. Aba "Cabeçalho Cotação"**

**Campos Obrigatórios:**  
- Data de Expiração (DD/MM/AAAA).
- Prazo de Entrega (dias).
- Endereço de Entrega.
- Aceitar Outras Marcas (1-Sim/2-Não).

**Campos Opcionais:**  
Razão Social Transportadora, CNPJ Transportadora, Validade da Proposta, Cod Condição de Pagamento, Nome Comprador, E-mail Comprador, Código Vendedor.

### **3.3. Aba "Item"**

**Campos Obrigatórios:**  
- ID Sequencial (ex: 1, 2, 3).
- Descrição.
- Quantidade.
- Unidade.

**Campos Condicionais:**  
- Prazo de Entrega (obrigatório se não preenchido no cabeçalho).

**Campos Opcionais:**  
Cod. ID Item Iara, Preço, Custo, Target, Status Item, Código Vendedor, Observação, Cód. Marca no IARA.

### **3.4. Aba "Marcas Solicitadas"**

**Campos Obrigatórios (se "Aceitar Outras Marcas = Não")**  
- ID Sequencial Item.
- Marcas.
- Referência.

## 4. Pós-Importação

- **Mensagem de Sucesso:** Aparece na barra de endereço após upload.
- **Acesso ao Contrato:**  
  - Use o filtro para buscar por código, cliente, CNPJ, etc.
  - Clique no card do contrato para visualizar detalhes.

## 5. Detalhes do Contrato

### **5.1. Timeline de Etapas**
Visualização das etapas (Orçamento, Negociação, Fechado, etc.).

**Ações Disponíveis:**
- Adicionar nova rodada (após etapa de Orçamento).
- Finalizar etapa.

### **5.2. Abas Principais**

#### **Resumo do Contrato**
- Quantidade de itens importados.
- Quantidade de itens com pré-resposta.
- Quantidade de itens respondidos.
- Vendedores responsáveis.

#### **Registro do Contrato**
- Empresa, Cliente, Tipo de Contrato, Título, Data Inicial, Data Final.
- Confidencialidade, Tipo de Entrega, Custo de Envio, Frete.
- Forma de Pagamento, Preço/Reajuste, Total.

#### **Cláusulas do Contrato**
- Garantia, Multa de Trânsito, Rescisão, Exclusividade.
- Trabalhista, Obrigações, Meio Ambiente, Fórum.
- Propriedade Intelectual, Bônus.

#### **Cotações Vinculadas**
- Nº da Cotação, Fornecedor, Cliente, CNPJ, Data da Cotação.
- Ação (Remover vínculo).

#### **Responsáveis**
- Pesquisar Usuário, Nome, Ação (Remover responsável).

#### **Arquivos**
- Upload e gerenciamento de documentos.

## 6. Ações Adicionais

- **Pré-Resposta:** Visualiza itens com pré-respostas.
- **Salvar:** Salva alterações no contrato.
- **Anexar Arquivos:** Faça upload de documentos complementares.
