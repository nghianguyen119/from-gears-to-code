import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Software isn't always valuable",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        For software to be a valuable asset, it must be reusable, easy to
        maintain, and scalable. Reusability saves time and money by leveraging
        existing code, maintenance ease reduces downtime and mitigates risk, and
        scalability enables adaptation to changing demands.
      </>
    ),
  },
  {
    title: "First priority: clean code",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Clean code is a top priority because it encourages collaboration,
        enables faster problem-solving, and is easier to maintain and fix. It
        leads to better software quality and ultimately, greater user
        satisfaction.
      </>
    ),
  },
  {
    title: "Don't stop learning",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Programmers need to learn every day to stay relevant and competitive in
        the constantly evolving field of programming. This leads to better
        coding abilities, innovative solutions, and improved productivity.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
