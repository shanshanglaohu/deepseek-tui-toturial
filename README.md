# DeepSeek TUI 新手教程

> 面向纯新手的 DeepSeek TUI 完整教程 —— 从安装到构建部署第一个项目。

[English](#english) | 中文

## 这是什么？

一套**中英双语**的静态教程网站，帮助零基础用户快速上手 [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI) —— 基于终端的 AI 编程助手。

不是工具参考手册的翻译。每个概念都配有**可复制的提示词**和**实际使用示例**，让你读完就能动手。

## 快速查看

```bash
git clone https://github.com/shanshanglaohu/deepseek-tui-toturial.git
cd deepseek-tui-toturial

# 方式一：直接浏览器打开
cmd.exe /c start index.html    # Windows
open index.html                 # macOS
xdg-open index.html             # Linux

# 方式二：静态服务器
npx serve .
```

## 目录结构

```
deepseek-tui-toturial/
├── index.html                  # 入口 → 语言选择
├── zh/                         # 中文版
│   ├── index.html              # 首页
│   ├── getting-started.html    # 快速入门
│   ├── core-concepts.html      # 核心概念
│   ├── features.html           # 功能指南
│   ├── hands-on.html           # 实战教程 ★
│   └── best-practices.html     # 最佳实践
├── en/                         # 英文版（同上）
├── css/
│   ├── global.css              # 全局样式 + 亮/暗主题
│   └── layout.css              # 布局 + 响应式
├── js/
│   ├── theme.js                # 主题切换 + 持久化
│   └── nav.js                  # 移动端导航 + 高亮
└── assets/
    └── favicon.svg
```

## 章节概览

| 章节 | 内容 | 适合 |
|------|------|------|
| 快速入门 | 安装（6 种方式）、API Key、配置、命令速查、故障排查 | 第一天 |
| 核心概念 | Agent/Plan/YOLO 模式、Auto 路由、思考预算、会话管理、快捷键 | 第一周 |
| 功能指南 | 子代理、RLM、MCP 服务器、技能创建、GitHub 集成、成本模型 | 需要时查阅 |
| **实战教程** | 端到端：从零构建作品集网站 → GitHub Pages 部署 | 动手练习 |
| 最佳实践 | 提示词对比、验证优先、成本管理、常见陷阱 | 进阶参考 |

## 特点

- **零依赖构建**：纯静态 HTML/CSS/JS，无框架、无构建步骤
- **暗色/亮色主题**：跟随系统偏好，手动切换，`localStorage` 持久化
- **响应式布局**：768px 断点，移动端侧边栏折叠、表格横向滚动
- **中英双语**：所有页面同步更新，侧边栏直接切换
- **面向新手**：每个代码块都可直接复制到终端执行

## 贡献

欢迎提 Issue 和 PR。贡献前请阅读现有章节以保持风格一致。

## 许可

MIT

---

## English

A bilingual static tutorial site for DeepSeek TUI beginners. Covers installation, core concepts, features, and a complete hands-on project (build + deploy a portfolio site). Zero build dependencies — open `index.html` in a browser to start.

| Chapter | Content |
|---------|---------|
| Getting Started | 6 install methods, API key, config, command reference, troubleshooting |
| Core Concepts | Agent/Plan/YOLO modes, Auto routing, thinking budget, sessions, shortcuts |
| Features Guide | Sub-agents, RLM, MCP servers, skill creation, GitHub integration, pricing |
| **Hands-On** | End-to-end: portfolio website from scratch → GitHub Pages deployment |
| Best Practices | Prompt comparisons, verification-first, cost management, common pitfalls |

View it: `npx serve .` or open `index.html` directly.
