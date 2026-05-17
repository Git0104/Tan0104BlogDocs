import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Tan0104BlogDocs/', // 👈 これを絶対に入れてください（前後のスラッシュに注意！）
  title: "Tan0104BlogDocs",
  description: "Welcome! This site provides information on how to use JavaScript and Python.",
  themeConfig: {
    // 右側の目次設定を追加
    outline: {
      level: [2, 4], // ## と ### を目次に表示する
      label: 'このページの内容'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JavaScript', link: '/JavaScript' },
      { text: 'Python', link: '/Python' }
    ],

    sidebar: [
      {
        text: 'JavaScript',
        items: [
          { text: 'JavaScriptとは', link: '/JavaScript' },
          { text: '1: 変数', link: '/JavaScript/variable' },
          { text: '2: データ型', link: '/JavaScript/data-types' },
          { text: '3: 関数', link: '/JavaScript/functions' }
        ]
      },
      {
        text: 'Python',
        items: [
          { text: 'Pythonとは', link: '/Python' },
          { text: '1: 変数', link: '/Python/variable' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
