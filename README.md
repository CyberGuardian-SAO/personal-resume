# Alex Chen's Digital Portfolio & AI Twin Assistant
一个融合了 **Apple 极简设计**、**Notion 清爽排版** 与 **Linear 高级渐变动效** 的模块化个人履历与数字化分身智囊平台。

---

## 📁 1. 项目目录结构

```text
portfolio/
├── .env.example            # 环境变量模板（含备选 AI Model 服务商配置）
├── .gitignore              # Git 忽略配置
├── index.html              # HTML 宿主入口，含完整的 SEO 头文件设置
├── metadata.json           # 平台级 App 元数据配置
├── package.json            # 依赖包及全栈编译、运行命令
├── server.ts               # Express + Vite 双主全栈服务器
├── tsconfig.json           # TypeScript 编译约束配置
├── vite.config.ts          # Vite 打包配置
└── src/
    ├── main.tsx            # React 挂载入口
    ├── index.css           # 全局样式，含 Google Fonts 字体和文本防投影
    ├── types.ts            # 全局 TypeScript 模块化类型定义
    ├── data/
    │   └── portfolioData.ts # 多语言个人成就、经历与项目大纲数据（智囊知识库）
    └── components/
        ├── MouseFollower.tsx # Lightweight 60fps 鼠标物理磁吸轨迹跟随粒子
        ├── Header.tsx        # 弹性透光导航顶栏，支持跨锚点平滑过渡
        ├── Hero.tsx          # 阿里巴巴同款：全视图无底部遮罩高清视频英雄区
        ├── About.tsx         # Bento Grid 比利看板：高吞吐量指标卡
        ├── Skills.tsx        # Linear 风格分类技术熟练度自适应仪表盘
        ├── Experience.tsx    # Notion 纪实手稿：学术底座与高负荷大厂工龄轴
        ├── Projects.tsx      # 特色应用画廊：全信息抽屉弹窗预览与合作邀约
        ├── AIChatbot.tsx     # Gemini 强力支持的数字化合伙人问答终端
        └── Contact.tsx       # 全场坐标卡：客户反馈智能表单
```

---

## 🚀 2. 运行说明与部署指南

### 本地启动开发环境
1. **安装 Node.js 18+ 及依赖项**：
   ```bash
   npm install
   ```

2. **环境变量配置文件**：
   将项目根目录下的 `.env.example` 复制一份并重命名为 `.env`。

3. **进入开发状态**：
   ```bash
   npm run dev
   ```
   服务器将默认映射至 `http://localhost:3000` 并伴随 Vite 的实时静态热重载。

### 生产打包编译与部署
在 CI/CD 流程中：
```bash
npm run build
npm start
```
* 构建阶段将会通过 `vite build` 压缩前端静态包，并通过 `esbuild` 将后端 `server.ts` 完美捆绑并输出至 `dist/server.cjs` 路径，绕过复杂节点 ESM 加载错误，以单文件容器执行，实现秒级高并发冷启动。

---

## 🔍 3. 性能优化与 SEO 优化指南

为了使您的个人履历网站在 Google, Baidu 等各大搜索引擎中取得更高的收录权重与极佳的首屏加载速度，建议进行如下深度优化调整：

### 🎯 SEO 友情推荐优化 (Optimization Tips)

1. **一键补充 SEO 结构化数据 (JSON-LD)**：
   在 `index.html` 的 `<head>` 下加入以下结构化脚本，能让 Google 搜索摘要直接抓取并在搜索结果中高亮呈现您的履历卡槽：
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "Person",
     "name": "Alex Chen",
     "jobTitle": "Senior Full-Stack Engineer & AI Architect",
     "url": "https://yourportfolio.com",
     "sameAs": [
       "https://github.com/yourusername",
       "https://linkedin.com/in/yourusername"
     ]
   }
   </script>
   ```

2. **自定义 Meta 检索描述**：
   在 `index.html` 完成移动端适配的基础上，添加多语言的 OpenGraph 元数据头部：
   ```html
   <!-- Open Graph / Facebook -->
   <meta property="og:type" content="website">
   <meta property="og:title" content="Alex Chen | Senior Full-Stack Engineer">
   <meta property="og:description" content="An elegant multi-lingual personal portfolio featuring clean typography and a smart interactive AI chat assistant.">
   <meta property="og:image" content="https://yourportfolio.com/assets/og-cover.png">
   ```

### ⚡ 性能加速优化策略

1. **背景视频的首屏加速**：
   我们引用的阿里巴巴高清背景视频经过压缩极速展现，生产中可开启 CDN 加速；为了极致的首屏呈现，您可以利用 `preload="auto"` 或配置预加载画面，我们在 Hero 模块中运用了原生 `muted autolpay loop playsInline` 以支持所有浏览器直接静默速播。
2. **图片懒加载处理**：
   作品画廊中均使用了原生 `loading="lazy"`。建议所有本地引用的图片优先转化为高性能、高保真的 **WebP** 格式，减少至少 70% 的载入字节体积。
