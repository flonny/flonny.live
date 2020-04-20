module.exports = {
  title: '之风',
  description: "flonny.live",
  lastUpdated: 'Last Updated',

  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'HTML', link: '/html/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'CSS', link: '/css/' },
      { text: 'TOOLS', link: '/tools/' },
      { text: 'github', link: 'https://github.com/flonny', target: '_blank', rel: '' },
    ],
    sidebar: {
      sidebarDepth: 2,
      '/html/': [
        {
          title: 'HTML',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            ['entity', 'entity(实体)']
          ]
        }
      ],
      '/tools/': [
        {
          title: '框架工具',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            ['webpack', 'WEBPACk']
          ]
        }
      ],
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    },
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': 'assets'
      }
    }
  }
}