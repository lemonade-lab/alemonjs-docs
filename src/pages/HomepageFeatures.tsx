import clsx from 'clsx'
import Heading from '@theme/Heading'
import classNames from 'classnames'

type FeatureItem = {
  title: string
  imgSrc: string
  description: JSX.Element
}

/**
 *
 */
const FeatureList: FeatureItem[] = [
  {
    title: '简单易懂',
    imgSrc: require('@site/static/img/edt.png').default,
    description: <>JavaScript函数式编程 </>
  },
  {
    title: '功能直调',
    imgSrc: require('@site/static/img/api.png').default,
    description: <>所有平台的功能都一个样 </>
  },
  {
    title: '敏捷开发',
    imgSrc: require('@site/static/img/post.png').default,
    description: <>丰富的脚手架与生态环境 </>
  }
]

function Feature({ title, imgSrc, description }: FeatureItem): JSX.Element {
  return (
    <div className={classNames(clsx('col col--4'), 'my-2')}>
      <div className="text--center flex">
        <img src={imgSrc} className=" h-28 md:h-32 m-auto" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"> {title} </Heading>
        <p> {description} </p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex justify-around mt-8 py-8">
      <div className="container">
        <div className="row">
          {FeatureList.map(props => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
