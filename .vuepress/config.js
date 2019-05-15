module.exports = {
  title: "ARTS · 瓜地",
  description: '冬瓜的 ARTS 打卡页',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
  ],
  //主题配置
  themeConfig: {
    //导航栏配置
    nav: [
      { text: '主页', link: '/' },
      { text: '归档', link: '/archive/' },
      // 下拉列表的配置
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/English' }
        ]
      }
    ]
  }
}