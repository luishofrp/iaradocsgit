import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    // Introdução sempre primeiro
    'intro',
    
    // Dashboard
    {
      type: 'category',
      label: '📊 Dashboard',
      link: {
        type: 'doc',
        id: 'dashboard/index',
      },
      items: [],
    },
    
    // Cotações
    {
      type: 'category',
      label: '💰 Cotações 🆕',
      link: {
        type: 'doc',
        id: 'cotacoes/index',
      },
      items: [
        {
          type: 'doc',
          id: 'cotacoes/orcamento',
          label: '📄 Orçamento 🆕',
        },
        {
          type: 'doc',
          id: 'cotacoes/compartilhar',
          label: '🔗 Compartilhar Orçamento',
        },
      ],
    },
    
    // IARA Chat
    {
      type: 'category',
      label: '💬 IARA Chat',
      link: {
        type: 'doc',
        id: 'chat/index',
      },
      items: [],
    },
  ],
};

export default sidebars;