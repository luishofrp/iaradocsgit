import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b08'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/atua_080525/atua_080525',
    component: ComponentCreator('/blog/atua_080525/atua_080525', 'e3e'),
    exact: true
  },
  {
    path: '/blog/atua_100325/atua_100325',
    component: ComponentCreator('/blog/atua_100325/atua_100325', '26b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '079'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '1f2'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '493'),
            routes: [
              {
                path: '/docs/Chat/iarachat',
                component: ComponentCreator('/docs/Chat/iarachat', '7f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Compartilhar Orçamento por WhatsApp/compartilhar',
                component: ComponentCreator('/docs/Compartilhar Orçamento por WhatsApp/compartilhar', '381'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Contrato/fluxocotacaoarquivo',
                component: ComponentCreator('/docs/Contrato/fluxocotacaoarquivo', '6f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cotação Arquivo/fluxocotacaoarquivo',
                component: ComponentCreator('/docs/Cotação Arquivo/fluxocotacaoarquivo', '9a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
