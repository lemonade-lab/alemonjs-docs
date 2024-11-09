import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/pages/HomepageFeatures'
import Translate from '@docusaurus/Translate'
import { useEffect } from 'react'

/**
 *
 * @returns
 */
const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className="flex flex-col items-center justify-center pt-12 relative">
      <img className="w-64 md:w-80 lg:w-96 mb-4" src="img/alemon.png" alt={siteConfig.title} />
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <p className="text-sm md:text-xl xl:text-2xl mb-4">
          <Translate>阿柠檬，基于 JavaScript 所构建的跨聊天平台开发框架</Translate>
        </p>
        <div className="flex justify-center mb-4">
          <Link
            className="bg-white text-blue-500 border border-blue-500 rounded-md px-4 py-2 mx-2 hover:bg-gray-200 transition"
            to="docs/intro"
          >
            <Translate>ℹ️ 介绍</Translate>
          </Link>
          <Link
            className="bg-blue-500 text-white rounded-md px-4 py-2 mx-2 hover:bg-blue-600 transition"
            to="docs/start"
          >
            <Translate>💡 开始</Translate>
          </Link>
        </div>
      </div>
    </header>
  )
}

const useEffectTW = (Attribute: string, id: string) => {
  useEffect(() => {
    const updateBodyClass = () => {
      const theme = document.documentElement.getAttribute(Attribute)
      const docusaurusDiv = document.getElementById(id)
      if (theme === 'dark') {
        if (docusaurusDiv) {
          docusaurusDiv.classList.add('dark')
        }
      } else {
        if (docusaurusDiv) {
          docusaurusDiv.classList.remove('dark')
        }
      }
    }
    updateBodyClass()
    const observer = new MutationObserver(() => {
      updateBodyClass()
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [Attribute]
    })
    return () => {
      observer.disconnect()
    }
  }, [])
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  // 响应 data-theme 改变，动态切换id=__docusaurus的 dark mode
  useEffectTW('data-theme', '__docusaurus')

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  )
}
