import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Alemonjs',
  tagline: '阿柠檬，基于 JavaScript 所构建的跨平台开发框架',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lemonade-lab.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/alemonjs.docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lemonade-lab', // Usually your GitHub org/user name.
  projectName: 'alemonjs.docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/lemonade-lab/alemonjs.docs/tree/main/'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Alemonjs',
      logo: {
        alt: 'Alemonjs Logo',
        src: 'img/alemon.png'
      },
      items: [
        {
          position: 'left',
          label: 'Dev DOCS',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar'
        },
        {
          position: 'left',
          label: 'Edit DOCS',
          href: 'https://github.com/lemonade-lab/alemonjs.docs/blob/main/docs/intro.md'
        },
        {
          position: 'right',
          href: 'https://github.com/lemonade-lab',
          label: 'Lemonade-lab'
        },
        {
          position: 'right',
          href: 'https://github.com/lemonade-lab/create-alemonjs//blob/main/README.md',
          label: 'Template'
        },
        {
          position: 'right',
          href: 'https://github.com/lemonade-lab/alemonjs',
          label: 'Alemonjs Code'
        }
      ]
    },
    /**
     * 页脚
     */
    footer: {
      style: 'dark',
      links: [
        {
          title: '教程',
          items: [
            {
              label: '简介',
              to: '/alemonjs.docs/docs/intro'
            },
            {
              label: '开发文档',
              to: '/alemonjs.docs/docs/category/开发文档'
            }
          ]
        },
        {
          title: '社区',
          items: [
            {
              label: 'lemonade-lab',
              href: 'https://github.com/lemonade-lab'
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
              href: 'https://github.com/lemonade-lab/chat-space'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alemonjs`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig,

  // themes: ['@docusaurus/theme-live-codeblock'],
  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ['en', 'zh'],
        searchResultLimits: 10,
        searchResultContextMaxLength: 50
      }
    ]
  ]
}

export default config
