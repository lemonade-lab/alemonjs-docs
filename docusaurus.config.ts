import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

/**
 *
 * @param config
 * @returns
 */
const defineConfig = (config: Config) => config

const number = '津ICP备2023004480号'
const link = `<a  href="https://beian.miit.gov.cn/" target="_blank">${number}</a>`

export default defineConfig({
  title: 'AlemonJS',
  tagline: '阿柠檬，基于 JavaScript 所构建的跨聊天平台开发框架',
  url: 'https://alemonjs.com',
  baseUrl: '/',
  organizationName: 'lemonade-lab',
  projectName: 'alemonjs-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
    localeConfigs: {
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        path: './zh-CN/'
        // ... other locales you want to support
      },
      'en': {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        path: './en/'
      }
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/lemonade-lab/alemonjs-docs'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AlemonJS',
      logo: {
        alt: 'AlemonJS Logo',
        src: 'img/alemon.png'
      },
      items: [
        {
          position: 'left',
          label: '文档',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar'
        },
        {
          position: 'left',
          label: '编辑',
          href: 'https://github.com/lemonade-lab/alemonjs-docs/blob/main/docs/intro.md'
        },
        {
          position: 'right',
          href: 'https://github.com/lemonade-lab/alemonjs',
          label: '源码'
        },
        {
          position: 'right',
          type: 'localeDropdown'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '教程',
          items: [
            {
              label: '简介',
              to: '/docs/intro'
            },
            {
              label: '开始',
              to: '/docs/start'
            }
          ]
        },
        {
          title: '社区',
          items: [
            {
              label: '问题反馈',
              href: 'https://qm.qq.com/q/aZYMNqUQc'
            },
            {
              label: 'lvyjs',
              href: 'https://lvyjs.dev'
            }
          ]
        },
        {
          title: '更多',
          items: [
            {
              label: 'alemonjs',
              href: 'https://github.com/lemonade-lab/alemonjs'
            },
            {
              label: 'chat-space',
              href: 'https://github.com/lemonade-lab/alemonjs/tree/main/packages/chat-space'
            }
          ]
        }
      ],
      copyright: `Released under the MIT License. (dev) <br/> Copyright © 2024-present Lemonade-Lab & ALemonJS Contributors </span> <br> ${link}`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig,
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        hashed: true,
        language: ['en', 'zh'],
        searchResultLimits: 10,
        searchResultContextMaxLength: 50
      }
    ]
  ],
  stylesheets: [],
  plugins: []
})
