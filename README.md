# 郭鑫的数字化网页个人履历 & AI 孪生助理分身 (Digital Portfolio & AI Twin)

这是一个融合了 **橙黑/橙白极简品牌设计**、Bento Grid 模块化排版、高保真微动效与**数字化智能 AI 分身助理**的双语个人履历与合作探讨站。

本项目全面优化了架构，支持**本地全栈 Express+Vite 环境**与**云端 Serverless（如 Vercel、Netlify 等）无缝一键部署**，完全免除额外起后端/容器服务的繁重步骤，天然支持零成本轻量化运行。

---

## 📁 1. 项目目录结构

```text
portfolio/
├── .env.example            # 环境变量模板（含 AI 模型服务商、Resend 邮箱模块等配置）
├── .gitignore              # Git 忽略配置
├── index.html              # HTML 宿主入口，含完整的 SEO 优化设置与多语言声明
├── metadata.json           # Studio 平台 App 级元数据属性声明
├── package.json            # 依赖管理及编译启动脚本对齐
├── tsconfig.json           # TypeScript 编译器规则声明
├── vite.config.ts          # Vite 双管齐下打包编译配置
├── server.ts               # 开发环境与全栈容器模式下的 Express 端，共享 Serverless API 路由
├── api/                    # 🚀 符合云端 Serverless 规范的零配置无服务器 API 路由
│   ├── _prompt.ts          # 智囊大模型核心 System Prompt 引导词生成器（自动加载 portfolioData 知识库）
│   ├── chat.ts             # 智能 AI 分身聊天接口端（兼容原生 Gemini / OpenAI 备选架构）
│   ├── contact.ts          # 邮件协同投递接口端（基于 Resend 邮箱，支持在发件失败时友好离线记录）
│   └── download-resume.ts  # 简历自适应一键生成/导出 PDF 数据流中间件
└── src/
    ├── main.tsx            # 前端 React SPA 挂载点
    ├── index.css           # 全局样式（含 Google Fonts、流畅动效、自适应动画、防穿透、Print 媒体打印控制）
    ├── types.ts            # 前端多语言状态与履历模块的强类型规范接口
    ├── data/
    │   └── portfolioData.ts # 🚨 智囊知识数据库：多语言个人履历、成就履历与项目大纲的“单一可信源”
    └── components/
        ├── MouseFollower.tsx # 零延迟 60fps 清爽鼠标轨迹跟随动效
        ├── Header.tsx        # 弹性透光导航栏，支持打字机动效抗抖动处理与“简历下载/触发打印”
        ├── Hero.tsx          # 视频背景精细化 Hero 看板与高效锚点锚向
        ├── About.tsx         # Bento Grid 模块化生活剪影及核心愿景格栅
        ├── Skills.tsx        # 先进分类技术栈雷达图与熟练度自适应统计环
        ├── Experience.tsx    # 极简双语编年履历手稿
        ├── Projects.tsx      # 特色案例画廊，支持多维度轮播与高保真信息抽屉弹出
        ├── AIChatbot.tsx     # 悬浮式多功能 AI 虚拟分身智囊终端
        ├── Contact.tsx       # 合作探讨表单与邮件，含带微信二维码联动小组件
        └── Footer.tsx        # 包含 PV/UV 独立访客访问状态跟踪，支持无侵入本地原子级持久计数器
```

---

## 🚀 2. 运行说明与部署指南

### A. 本地启动开发环境

1. **安装 Node.js 18+ 及依赖项**：
   ```bash
   npm install
   ```

2. **环境变量配置**：
   在项目根目录下，将 `.env.example` 复制并重命名为 `.env`。并根据需要填入各大 API KEY。

3. **启动本地全栈服务**：
   ```bash
   npm run dev
   ```
   服务将启动在 `http://localhost:3000`。此模式下，项目将使用根目录下的 `server.ts` 承载后端 API 代理。其核心逻辑直接引用了编译时的 `/api/*` 无服务器函数，保证了本地和云端接口的绝对行为一致。

---

### B. Vercel / 云端 Serverless 无服务器部署 (推荐 🌟)

本项目完美适配了 **Vercel / Netlify 一键部署且无需配置额外服务器**：

1. **直接导入项目**：在 Vercel 仪表盘中选择导入此 GitHub 仓库。
2. **零阻碍一键构建**：
   * **Framework Preset**: 选择 `Vite`。
   * **Build Command**: `vite build`
   * **Output Directory**: `dist`
3. **注入环境变量 (Environment Variables)**：在 Vercel 对应项目的 Settings - Environment Variables 下添加您生产所需的 Key（例如 `GEMINI_API_KEY` 等）。
4. **完美运行**：构建成功后，Vercel 既会托管静态前端网页，也会自动将根目录下的 `/api` 目录下的 ts 文件编译为无服务器 API (Serverless Functions) 响应客户端的所有动态接口（如 `/api/chat` 与 `/api/contact`），再也无需租用传统的虚拟主机或 Docker 镜像。

---

## 💼 3. 简历“下载/另存 PDF”功能配置与定制指南

对于**“简历下载”**，目前项目采用了多元且自主的优质交互策略。以下为您说明后续自定义简历 PDF 或外链的位置与调整方法：

### 选项一：目前系统默认——触发系统无失真原生打印 (另存为 PDF)
项目目前将顶栏右侧的“简历下载”按钮绑定了浏览器的物理打印引擎：
* **交互路径**：点击“简历下载” -> 直接唤起浏览器的“系统打印”弹窗 -> 引导用户选择“另存为 PDF”。
* **优点**：无需配置昂贵的额外后端，也不会因服务端字体缺失导致中文排版乱码，是主流数字履历的高级呈现。
* **样式适配**：如果您调整了页面内容，需要微调打印出来的排版，可以在 `src/index.css` 的 `@media print` 媒体查询中，通过 CSS 灵活隐藏/折叠不想在纸质简历中呈现的交互组件（如悬浮 AI 按钮、粒子跟尾等），或调节字体颜色：
  ```css
  @media print {
    /* 屏蔽打印非必要交互节点 */
    .no-print, #ai-chatbot, #mouse-follower {
      display: none !important;
    }
  }
  ```

---

### 选项二：使用本地静态文件直接下载 (静态 PDF 覆盖)
如果您需要将现有的、设计好的 PDF 文件直接提供给用户进行点击下载，请按照以下几步操作：

1. **放置 PDF 文件**：
   将您的 PDF 文件放入前端的 **`public/`** 目录（如果没有名为 `public` 的目录，可直接在项目根目录下创建该目录，或者将文件直接同级放在存放网页资产的资产文件夹下）。
   * 例如，将您的简历物理重命名为：`resume.pdf` 放入对应目录。
2. **修改按钮调用**：
   打开 **`src/components/Header.tsx`** 文件，找到“触发打印/PDF导出”的按钮：
   ```tsx
   {/* 修改前 */}
   <button
     onClick={() => window.print()}
     ...
   >
     <Download className="w-3.5 h-3.5 shrink-0" />
     <span>简历下载</span>
   </button>
   ```
   将 `<button>` 替换为经典的静态 `<a>` 下载标签：
   ```tsx
   {/* 修改后 */}
   <a
     href="/resume.pdf"
     download="软件工程专家_郭鑫_个人简历.pdf"
     className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all duration-300 focus:outline-none cursor-pointer ${
       isScrolled
         ? 'border-orange-500/20 text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500'
         : 'border-white/20 text-white hover:bg-white/10'
     }`}
   >
     <Download className="w-3.5 h-3.5 shrink-0" />
     <span>简历下载</span>
   </a>
   ```

---

### 选项三：重定向至外部第三方云盘、PDF 托管链接/第三方简历工具
如果您打算使用第三方网盘（如草料二维码、腾讯文档、语雀、Google Drive、OneDrive、或者特定简历托管站链接）：

1. 直接找到 `src/components/Header.tsx` 对应元素。
2. 更改为跳转指向对应的第三方专属共享链接 `target="_blank"`：
   ```tsx
   <a
     href="YOUR_REFINED_EXTERNAL_RESUME_URL_HERE"
     target="_blank"
     rel="noopener noreferrer"
     className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 ...`}
   >
     <Download className="w-3.5 h-3.5 shrink-0" />
     <span>简历下载</span>
   </a>
   ```

---

### 选项四：继续通过 Vercel 无服务器后台服务自动返回流 PDF
代码库内包含无服务器 PDF 映射路径 `/api/download-resume.ts`：
* **工作原理**：点击该路由时，向前端流式传输一份由二进制描述组装的高阶 PDF 文件流。
* **自定义方式**：
  * 您只需用自己的成品 PDF 二进制内容替换掉 `/api/download-resume.ts` 中的字节码，或者直接让该 Serverless 函数实现 302 临时重定向到您的图床/OSS地址即可：
    ```typescript
    export default async function handler(req: any, res: any) {
      // 永久重定向到您的云端 OSS 精美 PDF 简历外链地址，简单且节省服务器吞吐。
      res.writeHead(302, { Location: 'https://cdn.example.com/your-real-resume.pdf' });
      res.end();
    }
    ```

---

## ⚙️ 4. 全套环境变量配置一览 (Environment Variables)

为了充分解耦密钥与保护底层，任何在服务上（如 Vercel, 本地环境）调用的变量，都对应以下选项，推荐直接于配置界面填写：

| 变量名称 (Key) | 是否必填 | 默认及对应说明 |
| :--- | :---: | :--- |
| `AI_PROVIDER` | 否 | `gemini`（可选 `gemini` / `openai` 配置分身底座类型） |
| `GEMINI_API_KEY` | 是 (若用原生) | Google 官方大模型密钥（**服务端级敏感变量** 且 *极其安全*） |
| `OPENAI_API_KEY` | 否 | 若 `AI_PROVIDER` 填为 `openai`，则是对应的兼容密钥 |
| `OPENAI_API_BASE` | 否 | 默认为官方基址，可自定义如 `https://api.deepseek.com/v1` 等中转网关 |
| `OPENAI_MODEL` | 否 | 支持自定义 OpenAI 兼容平台的调用模型代码（如 `deepseek-chat` 或 `gpt-4o` ） |
| `RESEND_API_KEY` | 是 (要发邮件) | [Resend 邮件服务商](https://resend.com) 派送密钥名 |
| `RESEND_FROM_EMAIL` | 否 | 发信邮箱发件账户配置（默认为 `support@bitqai.com`） |

---

## ⚡ 5. SEO 优化与性能提升小贴士

1. **全站图片 WebP 转化**：
   我们精选引用的社交媒体摄影或履历头像已应用了高保真压缩链接。对于您本地新增的切片，建议通过格式转化工具为 WebP，能极大节省 CDN 访问加载延迟。
2. **CDN 加载缓存加速**：
   若使用对象存储托管微信二维码/剪影图像，建议给资源开启长效客户端缓存（`Cache-Control: public, max-age=31536000`），让移动端和网页首屏渲染在一瞬间响应完成。
