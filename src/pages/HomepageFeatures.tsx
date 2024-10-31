import Heading from '@theme/Heading'
import classNames from 'classnames'
type FeatureItem = {
  title: string
  imgSrc: string
  description: string
}

/**
 *
 */
const FeatureList: FeatureItem[] = [
  {
    title: '简单易懂',
    imgSrc: require('@site/static/img/edt.png').default,
    description: 'JS函数式编程'
  },
  {
    title: '接口简洁',
    imgSrc: require('@site/static/img/api.png').default,
    description: '立体的数据声明'
  },
  {
    title: '开发友好',
    imgSrc: require('@site/static/img/post.png').default,
    description: '现代化开发生态'
  }
]

const features = [
  {
    title: '完全支持',
    description: '对 TypeScript 的完全支持，提升开发效率与安全性。'
  },
  {
    title: '生态支持',
    description: '可借助 React、SCSS、Tailwind CSS 等前端生态描绘图片。'
  },
  {
    title: '快速上手',
    description: '一整套约定的机器人开发模式，快速上手。'
  },
  {
    title: '极致速度',
    description: '极致的启动速度和执行效率，提升用户体验。'
  },
  {
    title: '内置优化',
    description: '基于esBuild和Rollup,可打包、压缩、混淆等。'
  },
  {
    title: '完整工具链',
    description: '拥有完整的机器人开发生态和工具链，助力开发者。'
  },
  {
    title: '可扩展性',
    description: '可扩展、可自定义的对接各类平台，灵活适应需求。'
  },
  {
    title: '中间件',
    description: '控制全局传入调用。可适配可兼容。'
  },
  {
    title: '无平台',
    description: '不需要登录任何平台即可调试和体验工程。'
  }
]

function Feature({ title, imgSrc, description }: FeatureItem): JSX.Element {
  return (
    <div className={classNames('col col--4', 'my-2')}>
      <div className="text--center flex ">
        <img src={imgSrc} className=" h-28 md:h-32 m-auto" alt={`img_${title}`} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"> {title} </Heading>
        <div className="whitespace-nowrap">{description}</div>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex justify-around mt-8 py-8">
      <div className="container">
        <div className="row">
          {FeatureList.map((item, index) => (
            <Feature key={index} {...item} />
          ))}
        </div>
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={classNames(
                  'shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 dark:bg-slate-800'
                )}
              >
                <h3 className={classNames('text-xl font-semibold mb-2 dark:text-slate-100')}>
                  {feature.title}
                </h3>
                <p className={classNames('text-gray-700 dark:text-slate-100')}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
