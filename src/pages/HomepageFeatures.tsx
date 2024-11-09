import classNames from 'classnames'
import yaml from 'js-yaml'
import axios, { type AxiosRequestConfig } from 'axios'

class Server {
  static baseURL = '/desktop/update/version'
  /**
   *
   * @param config
   * @returns
   */
  server(config: AxiosRequestConfig, baseURL?: string) {
    const client = axios.create({
      baseURL: baseURL ?? Server.baseURL
    })
    return client(config)
  }
}

class Download extends Server {
  keyMap = {
    win: 'win32',
    mac: 'mac',
    linux: 'linux'
  }
  ymlMap = {
    win: 'win/latest.yml',
    mac: '/mac/latest-mac.yml',
    linux: '/linux/latest-mac.yml'
  }
  /**
   *
   * @param callURL
   * @param name
   * @returns
   */
  getURL(key: 'win' | 'mac' | 'linux', name: string) {
    return `${Download.baseURL}/${this.keyMap[key]}/${name}`
  }

  getYml(key: 'win' | 'mac' | 'linux') {
    return this.server({
      method: 'get',
      url: this.ymlMap[key]
    }).then(res => res.data)
  }
}

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
    title: '增强捆绑',
    description: 'VlyJS基于esBuild和Rollup,可打包、压缩、混淆等。'
  },
  {
    title: '中间件',
    description: '调整事件功能,'
  },
  {
    title: '约定大于配置',
    description: '一整套约定的机器人开发模式，快速上手。'
  },
  {
    title: '完整工具链',
    description: '拥有完整的机器人开发生态和工具链，助力开发者。'
  }
]

const items = [
  {
    url: require('@site/static/img/dt/res.png').default,
    title: '在线体验',
    docs: '示例代码效果立即体验',
    position: 'right'
  },
  {
    url: require('@site/static/img/dt/cat.png').default,
    title: '测试环境',
    docs: '不必登录官方平台即可测试本地代码',
    position: 'left'
  },
  {
    url: require('@site/static/img/dt/home.png').default,
    title: '一键启动',
    docs: '立即安装立即启动本机应用',
    position: 'right'
  }
]

type VerionConfigType = {
  version: string
  files: {
    url: string
    sha512: string
    size: number
  }[]
  path: string
  sha512: string
  releaseDate: string
}

export default function HomepageFeatures(): JSX.Element {
  const dow = new Download()
  const handleDownloadClick = async (Systems: 'win' | 'mac' | 'linux') => {
    let url = ''
    if (Systems == 'win') {
      await dow.getYml('win').then(res => {
        const data: VerionConfigType | null = yaml.load(res) as any
        if (data?.path) {
          url = dow.getURL('win', data.path)
        }
      })
    } else if (Systems == 'mac') {
      await dow.getYml('mac').then(res => {
        const data: VerionConfigType | null = yaml.load(res) as any
        if (data?.path) {
          url = dow.getURL('mac', data.path)
        }
      })
    } else {
      alert('此系统无法下载')
      return
    }
    const downloadLink = document.createElement('a')
    downloadLink.setAttribute('href', url)
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const version = ['Linux Debian x64', 'Linux Debian arm64', 'Linux x64', 'Linux arm64']

  return (
    <section className="flex justify-around py-8">
      <div className="container">
        <div className="flex flex-col items-center w-full gap-6 py-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row  ${item.position === 'left' ? 'md:flex-row-reverse' : ''} gap-4`}
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
          ))}
        </div>
        <div className="flex flex-col items-center py-6 gap-4">
          <div className="text-3xl  md:text-5xl">让你眼前一亮的特性</div>
          <div className="text-lg md:text-xl">
            框架不仅仅只是拥有客户端那么简单,在开发体验上,它还能这样！
          </div>
        </div>
        <div className="container mx-auto py-8">
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
        <div className="flex flex-col items-center py-6 gap-4">
          <div className="text-3xl  md:text-5xl">何必继续等待</div>
          <div className="text-lg md:text-2xl">立即安装阿柠檬客户端来启动你的机器人吧</div>
        </div>
        <div className="flex flex-row items-center justify-center py-6 gap-4">
          <div
            onClick={() => handleDownloadClick('mac')}
            className="text-md md:text-xl bg-slate-300 bg-opacity-80 rounded-md px-4 py-2  hover:bg-blue-400 hover:text-white cursor-pointer"
          >
            下载macOS版本
          </div>
          <div
            onClick={() => handleDownloadClick('win')}
            className="text-md md:text-xl bg-slate-300 bg-opacity-80 rounded-md px-4 py-2  hover:bg-blue-400 hover:text-white cursor-pointer"
          >
            下载windows版本
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-6 gap-4">
          <div
            onClick={() => {
              alert('待更新...')
            }}
          >
            其他版本：<span className="cursor-pointer">{version.join('、')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
