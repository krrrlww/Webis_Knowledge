import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Webis",
  description: "高效数据清洗框架",
  base: '/',
  head: [["link", { rel: "icon", href: "/webis.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/webis.svg",
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Document',
        items: [
          { text: '简介', link: '/简介/what_is_webis' },
          { text: '安装', link: '/安装/install' },
          { text: '使用', link: '/使用/quickstart' },
          { text: '更多', link: '/更多/Troubleshooting' },
        ]
      },
    ],

    sidebar: [

      {
        text: '简介',
        items: [
          { text: 'Webis是什么?', link: '/简介/what_is_webis' },
          { text: '性能评估', link: '/简介/Performance' },
          { text: '支持数据类型', link: '/简介/data_type' },
        ]
      },
      {
        text: '安装',
        items: [
          { text: '安装', link: '/安装/install' },
        ]
      },
      {
        text: '使用',
        items: [
          { text: '快速开始', link: '/使用/quickstart' },
        ]
      },
      {
        text: '更多',
        items: [
          { text: '疑难解答', link: '/更多/Troubleshooting' },
          { text: '性能优化', link: '/更多/Optimize' },
          { text: '开发背景', link: '/更多/background' },
          { text: '多模态数据处理工具', link: '/更多/tool' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TheBinKing/Webis.git' }
    ],
    footer: {
      copyright: "版权所有 © 2025-2026 Webis开发小组",
    },
  }
})
