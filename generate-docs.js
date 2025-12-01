const fs = require('fs');
const path = require('path');

// Estrutura de módulos do Iara
const docsStructure = {
  'dashboard': {
    title: 'Dashboard',
    icon: '📊',
    description: 'Visão geral e indicadores do sistema',
    position: 2,
    pages: [
      { file: 'index', title: 'Introdução ao Dashboard' }
    ]
  },
  'pesquisar': {
    title: 'Pesquisar',
    icon: '🔍',
    description: 'Sistema de busca e filtros',
    position: 3,
    pages: [
      { file: 'index', title: 'Como Pesquisar' }
    ]
  },
  'cotacoes': {
    title: 'Cotações',
    icon: '💰',
    description: 'Gestão completa de cotações',
    position: 4,
    pages: [
      { file: 'index', title: 'Introdução às Cotações' },
      { file: 'distribuir', title: 'Distribuir Cotações' },
      { file: 'responder', title: 'Responder Cotações' },
      { file: 'nova-cotacao', title: 'Nova Cotação' },
      { file: 'orcamento', title: 'Orçamento' }
    ]
  },
  'pedido': {
    title: 'Pedido',
    icon: '🛒',
    description: 'Gestão de pedidos',
    position: 5,
    pages: [
      { file: 'index', title: 'Introdução aos Pedidos' },
      { file: 'distribuir', title: 'Distribuir Pedidos' },
      { file: 'vincular-pedido', title: 'Vincular Pedido' }
    ]
  },
  'contrato': {
    title: 'Contrato',
    icon: '📋',
    description: 'Gestão de contratos',
    position: 6,
    pages: [
      { file: 'index', title: 'Introdução aos Contratos' },
      { file: 'cadastrar', title: 'Cadastrar Contrato' }
    ]
  },
  'cadastros': {
    title: 'Cadastros',
    icon: '👥',
    description: 'Cadastros gerais do sistema',
    position: 7,
    pages: [
      { file: 'index', title: 'Introdução aos Cadastros' },
      { file: 'usuarios', title: 'Usuários' },
      { file: 'portal-b2b', title: 'Portal B2B' },
      { file: 'empresa', title: 'Empresa' },
      { file: 'grupo-usuario', title: 'Grupo de Usuário' },
      { file: 'carteira-cliente', title: 'Carteira de Cliente' }
    ]
  }
};

// Função para criar diretório se não existir
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Pasta criada: ${dirPath}`);
  }
}

// Função para criar arquivo markdown
function createMarkdownFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`📄 Arquivo criado: ${filePath}`);
}

// Gerar template de página index
function generateIndexTemplate(module, moduleKey) {
  const subPages = module.pages.filter(p => p.file !== 'index');
  const subPagesList = subPages.length > 0 
    ? `\n## Tópicos desta Seção\n\n${subPages.map(p => `- [${p.title}](./${p.file})`).join('\n')}\n`
    : '';

  return `---
sidebar_position: 1
---

# ${module.icon} ${module.title}

${module.description}

${subPagesList}
## Visão Geral

Nesta seção você encontrará toda a documentação relacionada ao módulo de ${module.title}.

:::tip Dica
Use a navegação lateral para explorar todos os recursos disponíveis neste módulo.
:::

## Primeiros Passos

Aqui você aprenderá a utilizar as principais funcionalidades do módulo de ${module.title}.

<!-- Adicione conteúdo específico aqui -->
`;
}

// Gerar template de páginas internas
function generatePageTemplate(pageTitle, moduleTitle, moduleIcon) {
  return `---
sidebar_position: 2
---

# ${pageTitle}

Documentação detalhada sobre **${pageTitle}** no módulo de ${moduleIcon} ${moduleTitle}.

## Objetivo

Descreva aqui o objetivo principal desta funcionalidade.

## Como Utilizar

### Passo 1: Acessar a Funcionalidade

Explique como acessar esta funcionalidade no sistema.

### Passo 2: Executar a Ação

Detalhe o processo passo a passo.

:::info Informação
Adicione informações importantes sobre esta funcionalidade.
:::

## Campos e Parâmetros

| Campo | Descrição | Obrigatório |
|-------|-----------|-------------|
| Campo 1 | Descrição do campo | Sim |
| Campo 2 | Descrição do campo | Não |

## Dicas e Boas Práticas

- ✅ Dica 1
- ✅ Dica 2
- ✅ Dica 3

## Perguntas Frequentes

**P: Pergunta comum?**
R: Resposta aqui.

## Veja Também

- Link para página relacionada
- Link para outra página relacionada
`;
}

// Criar toda a estrutura
function generateDocsStructure() {
  const docsPath = path.join(process.cwd(), 'docs');
  
  console.log('🚀 Iniciando geração da estrutura de documentação...\n');

  // Remover pastas antigas (PRESERVANDO intro.md e outros arquivos na raiz)
  Object.keys(docsStructure).forEach(moduleKey => {
    const modulePath = path.join(docsPath, moduleKey);
    if (fs.existsSync(modulePath)) {
      fs.rmSync(modulePath, { recursive: true, force: true });
      console.log(`🗑️  Removida pasta antiga: ${moduleKey}`);
    }
  });

  console.log('');

  // Criar nova estrutura
  Object.keys(docsStructure).forEach(moduleKey => {
    const module = docsStructure[moduleKey];
    const modulePath = path.join(docsPath, moduleKey);
    
    // Criar pasta do módulo
    ensureDir(modulePath);
    
    // Criar páginas do módulo
    module.pages.forEach((page, index) => {
      const fileName = `${page.file}.md`;
      const filePath = path.join(modulePath, fileName);
      
      let content;
      if (page.file === 'index') {
        content = generateIndexTemplate(module, moduleKey);
      } else {
        content = generatePageTemplate(page.title, module.title, module.icon);
      }
      
      createMarkdownFile(filePath, content);
    });
    
    console.log('');
  });

  console.log('✨ Estrutura de documentação gerada com sucesso!\n');
  console.log('📁 Estrutura criada:');
  console.log('docs/');
  Object.keys(docsStructure).forEach(moduleKey => {
    const module = docsStructure[moduleKey];
    console.log(`├── ${moduleKey}/ ${module.icon}`);
    module.pages.forEach((page, index) => {
      const isLast = index === module.pages.length - 1;
      const prefix = isLast ? '└──' : '├──';
      console.log(`│   ${prefix} ${page.file}.md`);
    });
  });
}

// Executar
try {
  generateDocsStructure();
} catch (error) {
  console.error('❌ Erro ao gerar estrutura:', error);
  process.exit(1);
}