import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/pages/HomepageFeatures'
import Heading from '@theme/Heading'
import styles from '@site/src/pages/index.module.css'
import TeamMemberCard from '@site/src/pages/TeamMemberCard'
import Translate from '@docusaurus/Translate'
/**
 *
 * @returns
 */
const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx(styles.homeInfoWrapper)}>
      <div className={styles.homeInfo}>
        <img className={styles.homeImage} src="img/alemon.png" alt={siteConfig.title} />
        <div className={styles.homeText}>
          <Heading as="h1" className={styles.homeTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.homeDescription}>
            <Translate>阿柠檬，基于 JavaScript 所构建的跨聊天平台开发框架</Translate>
          </p>
          <div className={styles.homeButtonDiv}>
            <p className={styles.homeButtons}>
              <Link className={clsx(styles.homeButton, styles.secondary)} to="docs/intro">
                <Translate>ℹ️ 介绍</Translate>
              </Link>
              <Link className={clsx(styles.homeButton, styles.primary)} to="docs/start">
                <Translate>💡 开始</Translate>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      // noFooter={true}
    >
      <HomepageHeader />
      <main>
        <div className={styles.featureWrapper}>
          <HomepageFeatures />
        </div>
      </main>
      {/* <Header /> */}
    </Layout>
  )
}
