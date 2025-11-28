import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Webis",
  description: "Efficient Data Cleaning Framework",
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
          { text: 'Introduction', link: '/简介/what_is_webis' },
          { text: 'Installation', link: '/安装/install' },
          { text: 'Usage', link: '/使用/quickstart' },
          { text: 'More', link: '/更多/Troubleshooting' },
        ]
      },
    ],

    sidebar: [

      {
        text: 'Introduction',
        items: [
          { text: 'What is Webis?', link: '/简介/what_is_webis' },
          { text: 'Supported Data Types', link: '/简介/data_type' },
        ]
      },
      {
        text: 'Install',
        items: [
          { text: 'Install', link: '/安装/install' },
        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'Quickstart', link: '/使用/quickstart' },
        ]
      },
      {
        text: 'More·',
        items: [
          { text: 'Troubleshooting', link: '/更多/troubleshooting' },
          { text: 'Performance Optimization', link: '/更多/optimization' },
          { text: 'Development Background', link: '/更多/background' },
          { text: 'Multimodal Data Processing Tools', link: '/更多/tool' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://anonymous.4open.science/r/Webis-17E3/' }
    ],
    footer: {
      copyright: "Copyright © 2025-2026 Webis Development Team",
    },
  }
})
