import classNames from 'classnames'
import { getYml, useDownloadLink, useElectronDownload } from '@site/src/core/electron'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { DownIcon, UpIcon } from '@site/src/core/icons'

const features = [
  {
    title: '生态支持',
    description: '可借助 React、SCSS、Tailwind CSS 等前端生态描绘图片。'
  },
  {
    title: '可扩展性',
    description: '可对接可自定义的各类平台，灵活适应需求。'
  },
  {
    title: '资源捆绑',
    description: '基于tsx和Rollup设计了开发工具,可打包、压缩、混淆等。'
  },
  {
    title: '中间件',
    description: '顶级中间事件处理块,让开发更得心应手。'
  },
  {
    title: '观察者',
    description: '可自由的观察不同阶段的事件并单向流动。'
  },
  {
    title: '约定大于配置',
    description: '一整套约定的机器人开发模式，快速上手。'
  }
]

/**
 *
 */
const items = [
  {
    url: require('@site/static/img/dt/cat.png').default,
    title: '测试环境',
    docs: '不必登录平台即可测试代码',
    position: 'right'
  },
  {
    url: require('@site/static/img/dt/home.png').default,
    title: '一键启动',
    docs: '立即安装立即启动机器人',
    position: 'left'
  }
]

export default function HomePage(): JSX.Element {
  const [data, setData] = useState<string[]>([])
  const [show, setShow] = useState<boolean>(false)

  const ymls = ['latest.yml', 'latest-mac.yml', 'latest-linux.yml', 'latest-linux-arm64.yml']
  const baseURL = '/desktop/release'

  // 点击下载
  const handleDownloadClick = useElectronDownload<'win' | 'mac'>({
    baseURL,
    ymls: {
      win: 'latest.yml',
      mac: 'latest-mac.yml'
    }
  })

  // 点击更多
  const onClick = async () => {
    if (show) {
      // 关闭
      setShow(!show)
      return
    }
    // 打开
    setShow(!show)
    let db = []
    for (const item of ymls) {
      await getYml({
        baseURL,
        url: item
      }).then(res => {
        const dbs = res.files.map(file => file.url)
        db = [...db, ...dbs]
      })
    }
    setData([...db])
  }

  return (
    <main className="flex justify-around py-8">
      <div className="container">
        <div className="flex flex-col items-center w-full gap-6 py-8">
          {items.map((item, index) => {
            const [view, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1
            })
            return (
              <div
                key={index}
                ref={view}
                className={classNames(
                  `flex flex-col md:flex-row  gap-8`,
                  {
                    'md:flex-row-reverse': item.position === 'left'
                  },
                  'animate__animated  duration-[1000ms]',
                  {
                    'animate__fadeInLeft opacity-100': item.position === 'left' && inView,
                    'animate__fadeInRight opacity-100': item.position === 'right' && inView,
                    'opacity-0': !inView
                  }
                )}
              >
                <img
                  className="md:w-[40rem] rounded-lg md:rounded-2xl border shadow-xl"
                  src={item.url}
                />
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="text-3xl">{item.title}</div>
                  <div className="text-slate-600">{item.docs}</div>
                </div>
              </div>
            )
          })}
        </div>
        <div id="desktop" className="flex flex-col items-center py-6 gap-4">
          <div className="text-3xl  md:text-5xl">何必继续等待</div>
          <div className="text-lg md:text-2xl">立即安装阿柠檬客户端来启动你的机器人吧</div>
        </div>
        <div className="flex flex-row items-center justify-center py-6">
          <div
            onClick={() => {
              handleDownloadClick('mac', 'x64')
            }}
            className="text-md md:text-xl bg-slate-300 bg-opacity-80 rounded-l-md px-2 duration-[1000ms] md:px-4 py-2  hover:bg-blue-400 hover:text-white cursor-pointer"
          >
            macOS arm64
          </div>
          <div
            onClick={() => {
              handleDownloadClick('win', 'x64')
            }}
            className="text-md md:text-xl bg-slate-300 bg-opacity-80 rounded-r-md px-2 duration-[1000ms] md:px-4 py-2  hover:bg-blue-400 hover:text-white cursor-pointer"
          >
            Windows x64
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="cursor-pointer flex" onClick={onClick}>
            <div className="text-slate-500">其他版本: Linux / Windows / macOS </div>{' '}
            <div className="mx-2">{show ? <UpIcon /> : <DownIcon />}</div>
          </div>
          {show &&
            data.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  useDownloadLink(`${baseURL}/${item}`)
                }}
                className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer animate__animated duration-[1000ms] animate__fadeIn"
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
