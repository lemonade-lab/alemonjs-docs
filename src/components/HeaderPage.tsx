import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Translate from '@docusaurus/Translate'
import TextReveal from '@site/src/components/TextReveal'
export default function HeaderPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className="flex flex-col items-center justify-center pt-12 relative">
      <img className="w-64 md:w-80 lg:w-96" src="img/alemon.png" alt={siteConfig.title} />
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <p className="text-sm md:text-xl xl:text-2xl mb-4">
          <TextReveal text="基于 JavaScript 所构建的聊天平台机器人开发框架" />
        </p>
        <div className="flex justify-center my-4">
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
