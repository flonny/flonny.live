module.exports = {
  title: '苦作舟',
  description: "flonny.live",
  lastUpdated: 'Last Updated',

  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: '前端', link: '/javascript/' },
      { text: 'Flutter', link: '/flutter/' },
      { text: '笔记', link: '/notes/' },
      { text: 'github', link: 'https://github.com/flonny', target: '_blank', rel: '' },
    ],
    sidebar: {
      sidebarDepth: 2,
      '/notes/': [
        {
          title: '笔记',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'worker',
          ]
        }
      ]
    }
  },
  plugins: [
    '@vuepress/back-to-top',
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