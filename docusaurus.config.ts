import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Iara Docs',
  tagline: 'Documentação do Iara',
  favicon: 'img/favicon.ico',

  // Configurações para produção
  url: 'https://docs.iara.tech',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'iaratech',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/luishofrp/iaradocsgit/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/luishofrp/iaradocsgit/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogTitle: 'Notas de Versão',
          blogDescription: 'Acompanhe as atualizações e novidades do sistema Iara',
          blogSidebarTitle: 'Todas as versões',
          blogSidebarCount: 'ALL',
          routeBasePath: 'notas-de-versao',
          path: 'notas-de-versao',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Plugin de busca local
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["pt", "en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: true,
        indexDocs: true,
        indexPages: false,
        searchBarShortcutHint: false,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Iara Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📚 Documentação',
        },
        {
          to: '/notas-de-versao', 
          label: '📝 Notas de Versão', 
          position: 'left'
        },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Suporte',
          items: [
                        {
              label: 'Contato',
              href: 'mailto:suporte@iara.com',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Notas de Versão',
              to: '/notas-de-versao',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Iara Tech. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;