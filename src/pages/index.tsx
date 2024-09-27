import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/pages/HomepageFeatures'
import Heading from '@theme/Heading'
import styles from './index.module.css'
import Header from './Footer'
import TeamMemberCard from './TeamMemberCard'
/**
 *
 * @returns
 */
const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx(styles.homeInfoWrapper)}>
      <img className={styles.homeImage} src="img/alemon.png" alt={siteConfig.title} />
      <div className={styles.homeInfo}>
        <div className={styles.homeText}>
          <Heading as="h1" className={styles.homeTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.homeDescription}>{siteConfig.tagline}</p>
          <p className={styles.homeActions}>
            <Link className={clsx(styles.homeAction, styles.primary)} to="docs/category/开发文档">
              💡 开发文档
            </Link>
            <Link className={clsx(styles.homeAction, styles.secondary)} to="docs/intro">
              ℹ️ 介绍
            </Link>
          </p>
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
      noFooter={true}
    >
      <HomepageHeader />
      <main>
        <div className={styles.featureWrapper}>
          <HomepageFeatures />
        </div>
        <div className={clsx(styles.teamSection)}>
          <Heading as="h1" className="text--center">
            我们的团队
          </Heading>
          <div className={clsx(styles.memberCards)}>
            <TeamMemberCard />
          </div>
        </div>
      </main>
      <Header />
    </Layout>
  )
}
