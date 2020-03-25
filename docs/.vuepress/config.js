module.exports = {
  title: '之风',
  description: "flonny.live",
  lastUpdated: 'Last Updated',

  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'CSS', link: '/css/' },
      { text: 'Flutter', link: '/flutter/' },
      { text: '笔记', link: '/notes/' },
      { text: 'github', link: 'https://github.com/flonny', target: '_blank', rel: '' },
    ],
    sidebar: {
      sidebarDepth: 2,
      '/javascript/': [
        {
          title: 'JavaScript',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'vue-next',
            'webpack'
          ]
        }
      ],
      '/notes/': [
        {
          title: '笔记',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'javascript',
            'css',
            'worker'

          ]
        }
      ],
      '/css/': [
        {
          title: 'CSS',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
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