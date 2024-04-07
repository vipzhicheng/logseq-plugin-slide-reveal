import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Logseq Slide Reveal",
  description: "A slide show solution for Logseq",
  base: "/logseq-plugin-slide-reveal/",
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        outline: {
          level: "deep",
        },
        nav: [
          { text: "Guide", link: "/guide/" },
          { text: "Screencasts", link: "/screencast/" },
          { text: "Examples", link: "/example/" },
          { text: "Change Log", link: "/changelog" },
        ],
        sidebar: {
          "/screencast/": [
            {
              text: "Basic",
              link: "/screencast/basic",
            },
            {
              text: "Background",
              link: "/screencast/background",
            },
            {
              text: "Code & Highlight",
              link: "/screencast/code",
            },
            {
              text: "Mermaid",
              link: "/screencast/mermaid",
            },
            {
              text: "Draw",
              link: "/screencast/draw",
            },
            {
              text: "Animation",
              link: "/screencast/animation",
            },
            {
              text: "Latex",
              link: "/screencast/latex",
            },
            {
              text: "Common Header and Footer",
              link: "/screencast/header_footer",
            },
            {
              text: "Theme",
              link: "/screencast/theme",
            },
            {
              text: "Fragment",
              link: "/screencast/fragment",
            },
            {
              text: "Tailwind CSS",
              link: "/screencast/tailwindcss",
            },
            {
              text: "Layout",
              link: "/screencast/layout",
            },
            {
              text: "Vertical Slides",
              link: "/screencast/vertical",
            },
            {
              text: "Block Level Slides",
              link: "/screencast/block",
            },
          ],
          "/example/": [
            {
              text: "Basic",
              link: "/example/basic",
            },
            {
              text: "Background",
              link: "/example/background",
            },
            {
              text: "Code & Highlight",
              link: "/example/code",
            },
            {
              text: "Mermaid",
              link: "/example/mermaid",
            },
            {
              text: "Draw",
              link: "/example/draw",
            },
            {
              text: "Animation",
              link: "/example/animation",
            },
            {
              text: "Latex",
              link: "/example/latex",
            },
            {
              text: "Command Header & Footer",
              link: "/example/header_footer",
            },
            {
              text: "Fragment",
              link: "/example/fragment",
            },
            {
              text: "Tailwind CSS",
              link: "/example/tailwindcss",
            },
            {
              text: "Layout",
              link: "/example/layout",
            },
            {
              text: "Vertical",
              link: "/example/vertical",
            },
          ],
          "/guide/": [
            {
              text: "Getting Started",
              link: "/guide/getting-started",
            },
            {
              text: "Usage",
              items: [
                { text: "Settings", link: "/guide/usage/settings" },
                { text: "Shortcuts", link: "/guide/usage/shortcut" },
                { text: "Block Properties", link: "/guide/usage/properties" },
                { text: "Latex", link: "/guide/usage/latex" },
                { text: "Markdown", link: "/guide/usage/markdown" },
                { text: "Tailwind CSS", link: "/guide/usage/tailwind" },
                { text: "Layout", link: "/guide/usage/layout" },
              ],
            },
          ],
        },
      },
    },
    cn: {
      label: "中文",
      lang: "cn", // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: "/cn/", // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      themeConfig: {
        outline: {
          level: "deep",
          label: "页面导航",
        },
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },

        nav: [
          { text: "指南", link: "/cn/guide/" },
          { text: "演示视频", link: "/cn/screencast/" },
          { text: "示例代码", link: "/cn/example/" },
          { text: "变更日志", link: "/changelog" },
        ],
        sidebar: {
          "/cn/screencast/": [
            {
              text: "基础用法",
              link: "/cn/screencast/basic",
            },
            {
              text: "背景",
              link: "/cn/screencast/background",
            },
            {
              text: "代码高亮",
              link: "/cn/screencast/code",
            },
            {
              text: "Mermaid图表",
              link: "/cn/screencast/mermaid",
            },
            {
              text: "画笔",
              link: "/cn/screencast/draw",
            },
            {
              text: "动画",
              link: "/cn/screencast/animation",
            },
            {
              text: "Latex公式",
              link: "/cn/screencast/latex",
            },
            {
              text: "公共头尾",
              link: "/cn/screencast/header_footer",
            },
            {
              text: "主题",
              link: "/cn/screencast/theme",
            },
            {
              text: "分段",
              link: "/cn/screencast/fragment",
            },
            {
              text: "Tailwind CSS",
              link: "/cn/screencast/tailwindcss",
            },
            {
              text: "布局",
              link: "/cn/screencast/layout",
            },
            {
              text: "垂直幻灯片",
              link: "/cn/screencast/vertical",
            },
            {
              text: "区块级别幻灯片",
              link: "/cn/screencast/block",
            },
          ],
          "/cn/example/": [
            {
              text: "基础用法示例代码",
              link: "/cn/example/basic",
            },
            {
              text: "背景",
              link: "/cn/example/background",
            },
            {
              text: "代码高亮",
              link: "/cn/example/code",
            },
            {
              text: "Mermaid图表",
              link: "/cn/example/mermaid",
            },
            {
              text: "画笔",
              link: "/cn/example/draw",
            },
            {
              text: "动画",
              link: "/cn/example/animation",
            },
            {
              text: "Latex公式",
              link: "/cn/example/latex",
            },
            {
              text: "公共头尾",
              link: "/cn/example/header_footer",
            },
            {
              text: "分段",
              link: "/cn/example/fragment",
            },
            {
              text: "Tailwind CSS",
              link: "/cn/example/tailwindcss",
            },
            {
              text: "布局",
              link: "/cn/example/layout",
            },
            {
              text: "垂直幻灯片",
              link: "/cn/example/vertical",
            },
          ],
          "/cn/guide/": [
            {
              text: "快速开始",
              link: "/cn/guide/getting-started",
            },
            {
              text: "详细用法",
              items: [
                { text: "设置", link: "/cn/guide/usage/settings" },
                { text: "快捷键", link: "/cn/guide/usage/shortcut" },
                { text: "区块属性", link: "/cn/guide/usage/properties" },
                { text: "数学公式", link: "/cn/guide/usage/latex" },
                { text: "Markdown", link: "/cn/guide/usage/markdown" },
                { text: "Tailwind CSS", link: "/cn/guide/usage/tailwind" },
                { text: "布局", link: "/cn/guide/usage/layout" },
              ],
            },
          ],
        },
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "../assets/logo.png",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/vipzhicheng/logseq-plugin-slide-reveal",
      },
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: "Logseq Slide Reveal",
    },
    externalLinkIcon: true,
  },
});
