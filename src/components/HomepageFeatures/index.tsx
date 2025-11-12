import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '📖 Tutorial de Utilização',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Aprenda a usar todas as funcionalidades da plataforma com nosso guia passo a passo. 
        Acesse o <a href="/docs/tutorial">Tutorial de Utilização</a> e tire suas dúvidas!
      </>
    ),
  },
  {
    title: '📌 Notas de Versão',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Confira todas as atualizações, melhorias e correções do sistema. 
        Veja as <a href="/blog">Notas de Versão</a> para acompanhar as mudanças mais recentes!
      </>
    ),
  },
  {
    title: '🚀 Em breve',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Em breve, você poderá solicitar melhorias e alterações diretamente pelo nosso site, 
      tornando o processo mais ágil e eficiente. Fique atento às novidades!
    </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
