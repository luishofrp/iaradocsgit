import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>Bem-vindo ao Iara Docs</h1>
        <p className={styles.heroSubtitle}>
          Central de documentação e recursos para o sistema Iara
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.button)}
            to="/docs">
            Começar Agora 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '💬 Chat',
    icon: '💬',
    description: (
      <>
        Aprenda a utilizar o sistema de chat integrado do Iara para comunicação
        eficiente com fornecedores e equipe.
      </>
    ),
    link: '/docs/chat',
  },
  {
    title: '💰 Cotações',
    icon: '💰',
    description: (
      <>
        Gerencie cotações através de arquivos. Aprenda sobre estrutura de planilhas,
        importação e melhores práticas.
      </>
    ),
    link: '/docs/cotacoes',
  },
  {
    title: '📊 Orçamentos',
    icon: '📊',
    description: (
      <>
        Compartilhe e gerencie orçamentos de forma eficiente. Guias passo a passo
        para todas as funcionalidades.
      </>
    ),
    link: '/docs/cotacoes/orcamento',
  },
];

function Feature({title, icon, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>{icon}</div>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function QuickLinks() {
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Acesso Rápido</h2>
        <div className="row">
          <div className="col col--6">
            <div className={styles.quickLinkCard}>
              <h3>📖 Guia de Introdução</h3>
              <p>Novo no Iara? Comece aqui para entender os conceitos básicos.</p>
              <Link to="/docs/intro" className="button button--secondary">
                Ver Introdução
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.quickLinkCard}>
              <h3>📝 Notas de Versão</h3>
              <p>Acompanhe as últimas atualizações e novidades do sistema.</p>
              <Link to="/notas-de-versao" className="button button--secondary">
                Ver Atualizações
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Início`}
      description="Documentação oficial do sistema Iara - Gestão de cotações, pedidos e fornecedores">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Explore a Documentação</h2>
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <QuickLinks />
      </main>
    </Layout>
  );
}