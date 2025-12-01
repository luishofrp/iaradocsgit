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
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/notas-de-versao',
    component: ComponentCreator('/notas-de-versao', '34c'),
    exact: true
  },
  {
    path: '/notas-de-versao/archive',
    component: ComponentCreator('/notas-de-versao/archive', '988'),
    exact: true
  },
  {
    path: '/notas-de-versao/atua_080525/atua_080525',
    component: ComponentCreator('/notas-de-versao/atua_080525/atua_080525', 'c00'),
    exact: true
  },
  {
    path: '/notas-de-versao/atua_100325/atua_100325',
    component: ComponentCreator('/notas-de-versao/atua_100325/atua_100325', 'd26'),
    exact: true
  },
  {
    path: '/notas-de-versao/atua_251125/atua_251125',
    component: ComponentCreator('/notas-de-versao/atua_251125/atua_251125', 'f04'),
    exact: true
  },
  {
    path: '/notas-de-versao/atua_301125/atua_301125',
    component: ComponentCreator('/notas-de-versao/atua_301125/atua_301125', '00d'),
    exact: true
  },
  {
    path: '/notas-de-versao/authors',
    component: ComponentCreator('/notas-de-versao/authors', 'ea0'),
    exact: true
  },
  {
    path: '/notas-de-versao/tags',
    component: ComponentCreator('/notas-de-versao/tags', '00b'),
    exact: true
  },
  {
    path: '/notas-de-versao/tags/atualizacao',
    component: ComponentCreator('/notas-de-versao/tags/atualizacao', '475'),
    exact: true
  },
  {
    path: '/notas-de-versao/tags/features',
    component: ComponentCreator('/notas-de-versao/tags/features', 'f4d'),
    exact: true
  },
  {
    path: '/relatar-bug',
    component: ComponentCreator('/relatar-bug', '167'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/solicitar-melhoria',
    component: ComponentCreator('/solicitar-melhoria', 'a3f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b77'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '871'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '82e'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chat/',
                component: ComponentCreator('/docs/chat/', '162'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cotacoes/',
                component: ComponentCreator('/docs/cotacoes/', '3e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cotacoes/compartilhar',
                component: ComponentCreator('/docs/cotacoes/compartilhar', '073'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cotacoes/orcamento',
                component: ComponentCreator('/docs/cotacoes/orcamento', 'ffe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dashboard/',
                component: ComponentCreator('/docs/dashboard/', '9a7'),
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
