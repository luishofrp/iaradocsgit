---
sidebar_position: 6
---

# Importação 

## Sumário

- [Passo a Passo para Importar a Planilha](#passo-a-passo-para-importar-a-planilha)
- [Download do Modelo da Planilha](#download-do-modelo-da-planilha)
- [Estrutura da Planilha](#estrutura-da-planilha)
  - [Aba 1: Cabeçalho Cotação](#aba-1-cabecalho-cotacao)
  - [Aba 2: Item](#aba-2-item)
  - [Aba 3: Marcas Solicitadas](#aba-3-marcas-solicitadas)


### Versão 1.0 | Data: 07/03/2025

### Passo a Passo para Importar a Planilha

Para importar a planilha, siga os passos abaixo:

1. Acesse o Sistema.
2. Navegue até Menu → Cotações → Responder.
3. Clique no botão "Importar arquivo" (canto superior direito).

### Download do Modelo da Planilha

Sempre utilize a versão mais recente da planilha para evitar erros de formatação ou campos faltantes. Versões desatualizadas podem causar falhas no upload.

### Estrutura da Planilha

#### Aba 1: Cabeçalho Cotação

**Campos Obrigatórios:**

| Campo                  | Formato/Exemplo                          | Observação                              |
|------------------------|------------------------------------------|-----------------------------------------|
| Cod Cotacao do Cliente | Aceita Letra e Numero (ex: C01-Filtro)   | Identificador da cotação no sistema     |
| CNPJ do Cliente        | Com pontuação (ex: 67.380.170/0001-10)   | Obrigatório                             |
| CNPJ do Fornecedor     | Com pontuação (ex: 67.380.170/0001-10)   | Obrigatório                             |
| Tipo de frete          | C (CIF) ou F (FOB)                       | Seleção via dropdown                    |
| Data de expiração      | DD/MM/AAAA (ex: 25/12/2024)               | Data limite para resposta               |
| Prazo de entrega       | Número de dias (ex: 15)                   | Preencher no cabeçalho OU nos itens     |
| Endereço de entrega    | Endereço completo (ex: Rua X, 100 - São Paulo/SP) | Preencher no cabeçalho OU nos itens |
| Aceitar Outras Marcas  | 1 (Sim) ou 2 (Não)                       | Define se a aba Marcas Solicitadas é obrigatória |

**Campos Opcionais:**

- RAZÃO SOCIAL TRANSPORTADORA
- CNPJ TRANSPORTADORA (com pontuação)
- Validade da proposta (formato livre)
- Cod Condição de Pagamento
- Nome/E-mail do comprador
- Código Vendedor.

#### Aba 2: Item

**Campos Obrigatórios:**

| Campo               | Formato/Exemplo                          | Observação                              |
|---------------------|------------------------------------------|-----------------------------------------|
| ID Sequencial       | Números únicos (ex: 1, 2, 3)              | Criar sequência se não houver do cliente|
| Cod ID Item Cliente | Código fornecido pelo cliente             | Obrigatório                             |
| Descrição           | Detalhes do produto (ex: Parafuso Aço Inox 5mm) | Seja claro                        |
| Quantidade          | Número (ex: 100)                         | Obrigatório                             |
| Unidade             | Sigla (ex: UN, CX, KG)                    | Obrigatório                             |
| Prazo de Entrega    | Número de dias (ex: 10)                   | Preencher aqui OU no cabeçalho          |

**Campos Opcionais:**

- Preço (ex: R$ 50,00)
- Target (ex: R$ 45,00)
- Status Item
- Observação
- Cód. Marca no IARA.

#### Aba 3: Marcas Solicitadas

Obrigatória apenas se Aceitar Outras Marcas = 2 (Não)

| Campo               | Formato/Exemplo                          | Observação                              |
|---------------------|------------------------------------------|-----------------------------------------|
| CNPJ do Cliente     | Com pontuação (ex: 67.380.170/0001-10)   | Obrigatório                             |
| CNPJ do Fornecedor  | Com pontuação (ex: 67.380.170/0001-10)   | Obrigatório                             |
| ID Sequencial Item  | Deve corresponder ao ID da aba Item (ex: 1) | Obrigatório                           |
| Marcas              | Nome da marca (ex: Marca X)              | Obrigatório                             |
| Referência          | Código ou descrição adicional            | Opcional                                |
