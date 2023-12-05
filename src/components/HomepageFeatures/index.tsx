import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Streamlined Design System',
    Svg: require('@site/static/img/designer-monochromatic-82383.svg').default,
    description: (
      <>
          umpstart your side projects without the complexity of Tailwind or the hassle of creating your own design system. Styled Starter kit offers an intuitive, user-friendly approach to design, perfect for rapid project development.
      </>
    ),
  },
  {
    title: 'Time-Saving Efficiency',
    Svg: require('@site/static/img/waiting-monochromatic.svg').default,
    description: (
      <>
          Begin your projects on the front foot. Our library significantly reduces development time at the start, allowing you to focus more on unique functionalities rather than design intricacies.
      </>
    ),
  },
  {
    title: 'Seamless Integration with ReactJS, NextJS, and Styled-Components',
    Svg: require('@site/static/img/web-developer-monochromatic.svg').default,
    description: (
      <>
          Designed for compatibility. Whether you're working with ReactJS, NextJS, or incorporating Styled-Components or CSS Modules, Styled Starter Kit integrates smoothly, ensuring a cohesive and efficient development experience.
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

export default function HomepageFeatures(): JSX.Element {
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
