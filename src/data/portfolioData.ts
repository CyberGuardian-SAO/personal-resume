import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: {
    zh: "郭鑫",
    en: "Bill Guo"
  },
  title: {
    zh: "资深全栈工程师 & AI 应用架构师",
    en: "Senior Full-Stack Engineer & AI Architect"
  },
  subtitle: {
    zh: "以精湛的设计，驱动极致的技术体验",
    en: "Driving ultimate technical experiences with exquisite design"
  },
  photos: [
    "https://files.bitqai.com/portfolio/self-pic1.jpg?auto=format&fit=crop&w=600&h=800&q=80",
    "https://files.bitqai.com/portfolio/self-pic2.jpg?auto=format&fit=crop&w=600&h=800&q=80",
    "https://files.bitqai.com/portfolio/self-pic9.jpg?auto=format&fit=crop&w=600&h=800&q=80",
    "https://files.bitqai.com/portfolio/self-pic7.jpg?auto=format&fit=crop&w=600&h=800&q=80",
    "https://files.bitqai.com/portfolio/self-pic6.jpg?auto=format&fit=crop&w=600&h=800&q=80",
    "https://files.bitqai.com/portfolio/self-pic5.jpg?auto=format&fit=crop&w=600&h=800&q=80",
    "https://files.bitqai.com/portfolio/self-pic4.jpg?auto=format&fit=crop&w=600&h=800&q=80",
    "https://files.bitqai.com/portfolio/self-pic3.jpg?auto=format&fit=crop&w=600&h=800&q=80"
  ],
  bio: {
    zh: "我是一名热衷于创造极致美学与强大功能相结合的数字创作者。专注于 React, Node.js 以及大语言模型（LLM）的智能体开发，致力于通过直观细腻的交互和高可靠性的系统，解决现实商业痛点。",
    en: "I am a digital creator passionate about blending ultimate aesthetics with powerful features. Specializing in React, Node.js, and LLM-powered agents, I am committed to solving real-world business pains through intuitive interactions and highly reliable systems."
  },
  aboutBullets: {
    zh: [
      "⚡ 拥有 6 年以上硅谷及国内一线大厂全栈开发经验",
      "🎨 秉持 Apple & Linear 的设计原则，注重像素级精度与动效反馈",
      "🤖 主导开发过多个日活超百万、赋能商业智能的 AI Agent 平台",
      "🚀 开源社区活跃分子，核心 NPM 模块贡献者，累计收获 2,000+ Stars"
    ],
    en: [
      "⚡ 6+ Years of elite full-stack experience in Silicon Valley and Top Tech firms",
      "🎨 Bound to Apple & Linear design rules: absolute pixel perfection & fluid feedbacks",
      "🤖 Led development of multiple AI Agent assistants with 1M+ active users",
      "🚀 Active open-source helper, core contributor of web npm modules, 2,000+ total Stars"
    ]
  },
  stats: [
    {
      label: { zh: "项目交付", en: "Projects Delivered" },
      value: "40+"
    },
    {
      label: { zh: "技术栈工龄", en: "Years of Experience" },
      value: "6+"
    },
    {
      label: { zh: "开源 Stars数", en: "GitHub Stars" },
      value: "2.4K"
    },
    {
      label: { zh: "卓越效率提升", en: "Efficiency Lift" },
      value: "150%"
    }
  ],
  skills: [
    // Frontend
    { name: "React / Next.js", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 98, category: "Frontend" },
    { name: "Tailwind CSS", level: 96, category: "Frontend" },
    { name: "Framer Motion", level: 92, category: "Frontend" },
    { name: "HTML5 / WebGL", level: 85, category: "Frontend" },
    
    // Backend
    { name: "Node.js / Express", level: 94, category: "Backend" },
    { name: "PostgreSQL / Prisma", level: 88, category: "Backend" },
    { name: "GraphQL", level: 89, category: "Backend" },
    { name: "Redis / BullMQ", level: 85, category: "Backend" },
    { name: "Docker & K8s", level: 82, category: "Backend" },

    // AI & Data
    { name: "LLM Orchestration (LangChain)", level: 90, category: "AI / Data" },
    { name: "Gemini API Integration", level: 95, category: "AI / Data" },
    { name: "RAG / Vector Databases", level: 87, category: "AI / Data" },
    { name: "Prompt Optimization", level: 93, category: "AI / Data" },

    // Tools & Design
    { name: "Figma (UI/UX)", level: 88, category: "Tools & Design" },
    { name: "Git / CI/CD Pipelines", level: 92, category: "Tools & Design" },
    { name: "Vite / Webpack", level: 91, category: "Tools & Design" },
    { name: "Vercel / Cloud Run", level: 89, category: "Tools & Design" }
  ],
  experiences: [
    {
      id: "exp1",
      role: {
        zh: "资深全栈工程师 & AI 创新小组组长",
        en: "Senior Full-Stack Engineer & AI Innovation Lead"
      },
      company: {
        zh: "极星科技集团（Top 2 科技独角兽）",
        en: "Polaris Tech Group (Top Tech Unicorn)"
      },
      period: "2023.10 - Present",
      description: {
        zh: [
          "带领全栈研发团队，从零构建基于 Gemini / OpenAI 驱动的智能客服与协同研发平台，赋能近百万名活跃客户",
          "使用 Next.js 与 FastAPI 重构微前端控制台，通过精细化代码分割和懒加载降低 FCP (First Contentful Paint) 52%",
          "设计可复用的组件库和全套动画方案，获得年度卓越体验设计大奖"
        ],
        en: [
          "Led a modular engineering squad building Gemini/OpenAI-driven Customer Core Assistants & R&D suites for 1M+ active enterprise partners.",
          "Re-engineered administrative portals with Next.js & FastAPI, lowering FCP by 52% via lazy loading and dynamic bundle splits.",
          "Authored generic company shared components based on Framer Motion, winning the annual internal Core UX Architecture prize."
        ]
      },
      skills: ["React", "TypeScript", "Node.js", "Gemini SDK", "PostgreSQL", "Tailwind CSS"]
    },
    {
      id: "exp2",
      role: {
        zh: "核心研发全栈工程师",
        en: "Full-Stack Software Engineer"
      },
      company: {
        zh: "星空无界技术（海外 SaaS 独角兽）",
        en: "Galactic SaaS Corp (Global B2B Unicorn)"
      },
      period: "2020.08 - 2023.09",
      description: {
        zh: [
          "负责高并发协作画布与数据看板的研发，基于 Web-socket 协议实现毫秒级多人在线协同操作",
          "优化数据库读写性能，将 PostgreSQL 复杂报表查询时延从 4.2秒 降至 210毫秒",
          "搭建多语言国际化（i18n）自动化集成平台，提升外文版本打包与翻译分发效率 3 倍"
        ],
        en: [
          "Helped author a responsive, collaborative data whiteboard using high-frequency WebSocket sync with sub-50ms visual updates.",
          "Drove query speed ups of PostgreSQL reporting databases, reducing raw execution latency from 4.2s down to 210ms via compound indexing.",
          "Automated dynamic multi-language localization frameworks, slicing package size and optimizing general string compilation speed."
        ]
      },
      skills: ["Vue3", "TypeScript", "Express", "WebSocket", "PostgreSQL", "Redis", "i18n"]
    },
    {
      id: "exp3",
      role: {
        zh: "软件工程师（全栈方向）",
        en: "Junior Full-Stack Developer"
      },
      company: {
        zh: "大云智造数码公司",
        en: "MegaCloud Interactive Systems"
      },
      period: "2018.07 - 2020.07",
      description: {
        zh: [
          "参与企业级 ERP 和中后台数据中台搭建，熟练编写高鲁棒性 API 和交互良好的数据表单",
          "从零维护数十个内部前端脚本和持续交付流水线，确保发布成功率 100%"
        ],
        en: [
          "Scaffolded responsive ERP control flows, standardizing responsive table forms, validation patterns, and elegant dashboards.",
          "Authored robust automated CI/CD configurations improving local build delivery frequency significantly."
        ]
      },
      skills: ["React", "JavaScript", "Koa2", "MongoDB", "CSS3", "Docker"]
    },
    {
      id: "exp4",
      role: {
        zh: "全栈开发实习生",
        en: "Full-Stack Developer Intern"
      },
      company: {
        zh: "微智互联信息技术",
        en: "WeSmart Interactive Corp"
      },
      period: "2017.06 - 2018.06",
      description: {
        zh: [
          "参与移动端混合 H5 页面及微信小程序的组件研发，模块复用度大幅提升",
          "编写并交付数十个高响应性活动落地页，通过图像压缩与雪碧图合并优化加载速度"
        ],
        en: [
          "Participated in hybrid mobile H5 interfaces and WeChat mini-program core features development.",
          "Delivered reactive marketing campaign splash pages with asset compression and sprite loading optimization."
        ]
      },
      skills: ["Vue2", "JavaScript", "CSS3", "Webpack", "Git"]
    },
    {
      id: "exp5",
      role: {
        zh: "自由全栈开发者 & 实验室开发骨干",
        en: "Freelance Developer & Lab Core Programmer"
      },
      company: {
        zh: "极客星空工作室（高校联合创业）",
        en: "Geek Studio (Campus Joint Incubator)"
      },
      period: "2016.03 - 2017.05",
      description: {
        zh: [
          "为本地高校竞赛、创意团队定制开发多套 H5 动画宣传册、官网主页与静态页展示系统",
          "主导开发校区二手跳蚤市场信息对接网站，累计支撑过万名师生的高频浏览，保障平稳运行"
        ],
        en: [
          "Developed rich animation scrolls, portfolio showcase portfolios, and corporate marketing assets for collegiate venture teams.",
          "Pioneered a dedicated campus exchange forum utilizing active message cues and direct searches, sustaining excellent uptime."
        ]
      },
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "MySQL"]
    }
  ],
  projects: [
    {
      id: "p0",
      title: {
        zh: "简历重构与跨行求职",
        en: "AI Career Reshaper & Resume Architect"
      },
      description: {
        zh: "基于真实招聘逻辑，帮助用户完成简历重构、跨行业转型包装与高通过率求职策略设计。",
        en: "Intelligent ATS-compliant resume reconstruction, career pivot styling, and interview strategies tuned to recruiter algorithms."
      },
      longDescription: {
        zh: "该系统深度拆解主流企业招聘过滤系统（ATS）的权重逻辑，提供全套场景化求职工具。专注于将用户的零散或非对称工作经历，智能化、规范化翻译为对齐目标岗位的高精求职暗语，并基于 STAR 原则智能补强、量化成果业绩。系统能在不侵犯隐私的前提下，自动提取匹配要点，帮助无数求职者建立跨行求职底气并提供全真互动式模拟面试保障，实效通过率获得平均翻倍提升。",
        en: "This platform is an ATS-friendly conversational tool aligning non-linear work milestones with standard corporate qualifications. It converts past achievements into high-value sector keywords utilizing STAR methodology. It helps individuals bridge regional or industrial gaps, customize motivations, refine deliverables, and trigger realistic interactive AI interview simulations."
      },
      tags: ["简历重构", "跨行业转型", "ATS语义匹配", "智能模拟面试"],
      category: "ai",
      image: "https://files.bitqai.com/website/proj-careerai-Logo.png",
      imageUrl: "https://files.bitqai.com/website/proj-careerai-Logo.png",
      trialUrl: "https://career.bitqai.com",
      demoUrl: "https://career.bitqai.com",
      detailVideoUrl: "https://files.bitqai.com/website/career-ai.mp4",
      detailImages: [
        "https://files.bitqai.com/website/proj-careerai-FrontCover.png",
        "https://files.bitqai.com/website/proj-careerai-Content.png",
        "https://files.bitqai.com/website/proj-careerai-Content6.png",
        "https://files.bitqai.com/website/proj-careerai-Content7.png",
        "https://files.bitqai.com/website/proj-careerai-Content1.png",
        "https://files.bitqai.com/website/proj-careerai-Content2.png",
        "https://files.bitqai.com/website/proj-careerai-Content3.png",
        "https://files.bitqai.com/website/proj-careerai-Content4.png",
        "https://files.bitqai.com/website/proj-careerai-Content5.png"
      ],
      publishDate: "2026.05",
      logo: "UserSearch",
      keyFeatures: {
        zh: [
          "🎯 精确穿透企业级 ATS 系统高关联度算法机制",
          "📈 STAR 结构提炼，量化包装财务、效率、行销价值点",
          "🎙️ 沉浸式互动求职关卡演练与多角色实时压力面试仓",
          "🛡️ 严苛的数据隔离，一键擦除个人隐私敏感参数"
        ],
        en: [
          "🎯 Full ATS compatibility algorithm targeting specialized roles.",
          "📈 STAR structured summaries highlighting clear commercial metrics.",
          "🎙️ Immersive dynamic simulations of typical recruiter interviews.",
          "🛡️ Strict locally bounded data scrubbing enforcing secure sessions."
        ]
      }
    },
    {
      id: "p2",
      title: {
        zh: "EduCare AI 留学规划顾问",
        en: "EduCare AI — Academic Admissions Consultant"
      },
      description: {
        zh: "基于学生背景自动生成留学方案、院校金字塔梯度组合建议与竞争力补强路线。",
        en: "Crafts premium college admissions campaigns, optimal academy tiers, and profile enhancements based on student records."
      },
      longDescription: {
        zh: "EduCare AI 专为解决全球生源升学不透明、择校繁重纠结的难点而生。系统内置了全球数千所大学、上万个专业的全参数录取数据库，输入个人的 GPA、托福雅思、课外科研实践背景，即可通过定制的条件矩阵匹配，给出极具梯度保障的“冲刺-稳拿-保底”金字塔择校建议，并精细定制个人自述（PS）與学术简历（CV）润色修正，规划每一步准备时间节点，全速护航留学路。",
        en: "EduCare AI streamlines tedious study abroad pipelines. Powered by globally compiled admissions indices and course standards, it automatically scans candidate credentials, drafts standard combinations of safe/match/reach institutions, flags necessary research internships, and offers tailored personal statements polishing helpers."
      },
      tags: ["留学规划", "智能推荐", "金字塔院校组合", "背景提升建议"],
      category: "ai",
      image: "https://files.bitqai.com/website/proj-educareai-FrontCover.png",
      imageUrl: "https://files.bitqai.com/website/proj-educareai-FrontCover.png",
      trialUrl: "https://edu.bitqai.com",
      demoUrl: "https://edu.bitqai.com",
      detailVideoUrl: "https://files.bitqai.com/website/educare-ai.mp4",
      detailImages: [
        "https://files.bitqai.com/website/proj-educareai-Content.png",
        "https://files.bitqai.com/website/proj-educareai-Content1.png",
        "https://files.bitqai.com/website/proj-educareai-Content3.png",
        "https://files.bitqai.com/website/proj-educareai-Content4.png"
      ],
      publishDate: "2026.04",
      logo: "GraduationCap",
      keyFeatures: {
        zh: [
          "🎓 全球数千所高校招生数据库毫秒级条件联合解析",
          "📊 金字塔三级梯度智能分段，有效规避择校偏差或落榜",
          "✏️ CV / PS 多风格校阅、语法纠偏与闪光经历包装",
          "📅 标准化的进度看板，监控全节点材料递交截止期"
        ],
        en: [
          "🎓 Real-time validation over global universities admissions portals.",
          "📊 Automatic candidate grouping across clear reach/safety bands.",
          "✏️ Multi-tone CV review, essays polishing, and grammar rectifying.",
          "📅 Integrated admissions calendars alerting key deadline dates."
        ]
      }
    },
    {
      id: "p3",
      title: {
        zh: "RPA微信智能业务机器人",
        en: "RPA WeChat Business Intelligent Bot"
      },
      description: {
        zh: "通过微信指令驱动RPA自动执行网页数据采集、报表核对及业务流程闭环。",
        en: "Drives complex business flow routines, data fetching, and automated actions via instant WeChat commands."
      },
      longDescription: {
        zh: "项目打破了常规 RPA 只能在电脑终端静态排档执行的地理限制。自研自然语言处理模块可即时提炼出微信聊天群组或单聊中的文字、语音意图，解析关键业务要素，通过云代理驱动后台自动化执行单元。系统搭载了 Selenium 定制轻量爬虫和桌面操作按键流，能够全天候自动完成高价值商品核批、多系统对账、企业巡查报警等，实现低成本、极高响应频次的流程自动化静默闭环。",
        en: "Connecting RPA routines with standard WeChat triggers, this smart robot parses conversational intents and converts chat strings into secure browser automations. Built-in automation handlers crawl inventories, extract financial statistics, or draft shipping notifications on the server, ensuring rapid operations with zero-touch efficiency."
      },
      tags: ["流程自动化", "RPA机器人", "微信控制端", "意图语义识别"],
      category: "software",
      image: "https://files.bitqai.com/website/proj-RPA-FrontCover.jpg",
      imageUrl: "https://files.bitqai.com/website/proj-RPA-FrontCover.jpg",
      detailVideoUrl: "https://files.bitqai.com/website/bitqai_rpa_demo.mp4",
      detailImages: [
        "https://files.bitqai.com/website/proj-RPA-Content.png"
      ],
      publishDate: "2026.03",
      logo: "Bot",
      keyFeatures: {
        zh: [
          "💬 即时通讯极速中转，微信端发送指令即可开启挂机后台",
          "⚙️ 支持网页端无痛登录、复杂网页级爬虫抓取对账技术",
          "🤖 智能意图识别纠偏，自动检测指令拼写和误触可能",
          "📊 后台执行全程录入备份，支持微信一键收取操作回执"
        ],
        en: [
          "💬 Dynamic webhooks converting simple chats into executable scripts.",
          "⚙️ Support for multi-stage web automation, crawlers, and forms.",
          "🤖 Fuzzy logic intent error corrections preventing invalid operations.",
          "📊 Automated execution recordings with responsive progress reports."
        ]
      }
    },
    {
      id: "p4",
      title: {
        zh: "AI巡店智能审核助手",
        en: "AI Retail Inspection & Quality Audit"
      },
      description: {
        zh: "基于AI视觉实现巡店陈列货架数据自动审核、OCR价格校验与标准化定量分析。",
        en: "Automates offline layout grading, SKU counting, and display standard shelf audits using edge-AI and OCR."
      },
      longDescription: {
        zh: "该平台是针对现代化连锁新零售、便利门店设计的智能店面督导解决方案。店员或巡检顾问通过移动手机捕获陈列货架图像，云端 YOLO 识别引擎即可快速锚定各品牌商品的排布位置，计算陈列占比、核对缺货指数、识别吊牌文字错贴，并在后台一键生成多级加权客观考核表。颠覆以往人工抽样登记的冗长低效，为多店科学化零售标准打下扎实数字地基。",
        en: "A robust SaaS helper improving store layout audit workflows. Taking simple mobile snapshots of store displays, it localizes SKUs, tracks facing ratios, matches printed pricing tags with corporate databases via OCR, and produces consistent, objective grade-cards within seconds, enabling large chains to maintain optimal standards."
      },
      tags: ["视觉识别与OCR", "自动审核", "目标定位检测", "陈列合规评测"],
      category: "ai",
      image: "https://files.bitqai.com/website/proj-openclawRobot-FrontCover.jpg",
      imageUrl: "https://files.bitqai.com/website/proj-openclawRobot-FrontCover.jpg",
      trialUrl: "https://files.bitqai.com/website/proj-openclawRobot-FrontCover2.jpg",
      demoUrl: "https://files.bitqai.com/website/proj-openclawRobot-FrontCover2.jpg",
      detailVideoUrl: "",
      detailImages: [
        "https://files.bitqai.com/website/proj-openclawRobot-FrontCover.jpg",
        "https://files.bitqai.com/website/proj-openclawRobot-FrontCover2.jpg"
      ],
      publishDate: "2026.02",
      logo: "Camera",
      keyFeatures: {
        zh: [
          "📸 亚秒级多目标货架检测与重叠物品高精定位",
          "🏷️ 集成高敏感 OCR 元件，避免活动陈设吊牌错漏贴",
          "📊 融合陈列排布标准计算评分，告别督导主观打分",
          "📱 弱网优化上行专线技术，实现极压缩无损文件上传"
        ],
        en: [
          "📸 Sub-second multi-object detection and SKU positioning.",
          "🏷️ Cloud OCR verifying product discount tags with SQL databases.",
          "📊 Formulated scoring metrics eradicating supervisor evaluation bias.",
          "📱 Advanced adaptive asset compressor suited for cellular uplinks."
        ]
      }
    },
    {
      id: "p5",
      title: {
        zh: "工业视觉上位机通用平台",
        en: "VisionMaster — Industrial Vision Host Platform"
      },
      description: {
        zh: "支持多视觉检测方案加载、高精特征定位辅助与PLC通信联动的工业通用上位机控制程序。",
        en: "High-speed machine vision PC host supporting multi-camera setups, sub-pixel alignment, and EtherCAT motor control."
      },
      longDescription: {
        zh: "该软件是专门服务微米级工业制造检测流程的集成控制核心。底层采用极致精炼的多线程 C++ 算法引擎，前端通过现代化 React 数据看板展示。兼容 GigE 以及 USB3.0 多种工业相机。内置亚像素模板比对技术、焊缝寻轨缺陷检出纠编、多轴联动坐标对齐算子，通过 Modbus/TCP 与工控机 and PLC 保持毫秒级通讯，可无痛满足各类全自动化工厂千万级小时连续稳定运转标准。",
        en: "VisionMaster is a modern, reliable PC controller hosting industrial optical inspections. Engineered with highly-performant C++ analysis workers and interactive UI control cards, it grabs real-time frame packets. Supporting sub-pixel template patterns, positioning calibrations, and weld-line tracking, it interfaces with PLC drivers to enforce nanometer precision."
      },
      tags: ["工业视觉", "VisionMaster", "亚像素定位", "工控联动PLC"],
      category: "software",
      image: "https://files.bitqai.com/website/proj-visionMaster-FrontCover.jpg",
      imageUrl: "https://files.bitqai.com/website/proj-visionMaster-FrontCover.jpg",
      detailVideoUrl: "",
      detailImages: [
        "https://files.bitqai.com/website/proj-VisionMaster-1.jpg",
        "https://files.bitqai.com/website/proj-VisionMaster-2.png",
        "https://files.bitqai.com/website/proj-VisionMaster-3.png"
      ],
      publishDate: "2026.01",
      logo: "Cpu",
      keyFeatures: {
        zh: [
          "⚙️ 亚像素级超前边缘提取与微秒级特征抓取标定",
          "🔌 内置 EtherCAT、TCP 等全流程硬件指令互通接口",
          "🛡️ 特制容错并发管道保护，杜绝工控电脑崩溃与丢包连锁反应",
          "📈 实时多维数据流折线看板，瞬间反应良率走势"
        ],
        en: [
          "⚙️ Advanced sub-pixel corner alignment and contour extraction.",
          "🔌 Multi-driver connectivity (Modbus IP, OPC UA, EtherCAT, etc.).",
          "🛡️ Rugged, thread-safe message loops ensuring continuous high up-time.",
          "📈 High-refresh-rate statistics reflecting real-time production status."
        ]
      }
    },
    {
      id: "p1",
      title: {
        zh: "PetCare AI 宠物问诊",
        en: "PetCare AI — 24/7 Smart Vet Consultation"
      },
      description: {
        zh: "提供 24 小时智能兽医服务，三步完成潜在症状快速判断与医疗风险分级评估。",
        en: "Offers 24-hour intelligent pet diagnostic triaging, diagnostic insights, and symptom risk tier evaluation."
      },
      longDescription: {
        zh: "PetCare AI 构建了兼具专业临床深度与亲和交互关怀的数字宠物健康入口。用户只需进行‘描述症状、拍摄爱宠、生成方案’的三步轻快闭环，系统的大模型结合向量检索诊疗数据库即可完成病情急重分级，并精准解析猫狗异常病灶图片（如眼部红肿、粪便色差、皮肤皮屑）。其底层匹配知名兽用急诊应对准则（Redline Index），提供极具条理的家庭用药或急诊急退避雷指南。",
        en: "PetCare AI functions as a swift digital veterinary assistant. Within three simple steps, owners input behavioral warnings, snap dynamic photos of symptoms (gums, lesions, digestives), and receive structured, highly readable advice cards. Operating over veterinary triaging databases, it categorizes severe concerns to help avoid emergency delays."
      },
      tags: ["宠物医疗", "风险分级评估", "多模态大模型", "急救分流红线"],
      category: "ai",
      image: "https://files.bitqai.com/website/proj-petcarai-FrontCover.png",
      imageUrl: "https://files.bitqai.com/website/proj-petcarai-FrontCover.png",
      trialUrl: "https://pet.bitqai.com",
      demoUrl: "https://pet.bitqai.com",
      detailVideoUrl: "https://files.bitqai.com/website/petcare-ai.mp4",
      detailImages: [
        "https://files.bitqai.com/website/proj-petcarai-Content6.png",
        "https://files.bitqai.com/website/proj-petcarai-Content7.png",
        "https://files.bitqai.com/website/proj-petcarai-Content1.png",
        "https://files.bitqai.com/website/proj-petcarai-Content2.png",
        "https://files.bitqai.com/website/proj-petcarai-Content3.png",
        "https://files.bitqai.com/website/proj-petcarai-Content4.png",
        "https://files.bitqai.com/website/proj-petcarai-Content5.png"
      ],
      publishDate: "2025.11",
      logo: "HeartPulse",
      keyFeatures: {
        zh: [
          "🩺 针对动医垂直领域深度训练的模型诊疗通道",
          "📸 多模态视觉分类技术，快速抓取皮损、溃疡、分泌物特征",
          "📝 清晰详尽急重缓急三色分流提示，指导家庭护理及紧急送医",
          "🐾 爱宠终生病例数字化档案与长线核心生理指标图谱"
        ],
        en: [
          "🩺 Domain-trained medical routing agent aligning diagnostic flows.",
          "📸 Visual lesion segmentation checking skin rash or eye conditions.",
          "📝 Three-tier triage recommendations listing essential care tips.",
          "🐾 Smart chronic tracking of pets temperature, files and diets."
        ]
      }
    },
    {
      id: "p6",
      title: {
        zh: "策雄宠物门店 SaaS 系统",
        en: "Cexiong Pet Store SaaS POS System"
      },
      description: {
        zh: "覆盖宠物零售收银、体检洗护挂号排队、会员积分营销与分店联动的全场景 SaaS 系统。",
        en: "Omni-channel SaaS platform managing pet cash checkouts, grooming queues, ERP inventory, and CRM profiles."
      },
      longDescription: {
        zh: "本平台是专门为大中型连锁宠物门店规划的集数字化收银、供应链、客户档案为一体的旗舰级管理内核。采用高度弹性的微服务微前端架构，不仅可以应对秒级超万次的极速 POS 收银结算，还创设计了“爱宠时间段拉伸预约排班算法”，科学提升洗护中心及美容师在店饱和度。引入‘一物一码’批次追踪和财务联动看板，使得多重门店实现真正的扁平、高效率数字驱动管理。",
        en: "Cexiong is a enterprise-level cloud ERP coordinating commercial pet store sectors. It combines lightning-fast retail POS, client tracking registries, and a time-slotted pet grooming scheduler that prevents traffic bottlenecks. Featuring robust item batch management and comprehensive financial analytics dashboards, it streamlines cross-outlet retail chains."
      },
      tags: ["店面管理数字化", "SaaS系统", "智能排队轮候", "一户一宠档案"],
      category: "software",
      image: "https://files.bitqai.com/website/proj-cexiong-FrontCover.png",
      imageUrl: "https://files.bitqai.com/website/proj-cexiong-FrontCover.png",
      trialUrl: "https://petpospal.com",
      demoUrl: "https://petpospal.com",
      detailVideoUrl: "",
      detailImages: [
        "https://files.bitqai.com/website/proj-petpospal-4.png",
        "https://files.bitqai.com/website/proj-petpospal-3.png",
        "https://files.bitqai.com/website/proj-petpospal-2.png",
        "https://files.bitqai.com/website/proj-petpospal-1.png"
      ],
      publishDate: "2024.11",
      logo: "Store",
      keyFeatures: {
        zh: [
          "💳 轻盈飞速的 POS 前哨收银系统，断网亦可暂存付款记录",
          "📅 时段化预约看板，动态分配美容工位与缩短高峰拥堵",
          "🐾 贴合爱宠习性的电子档案系统，深度跟进过敏和绝育情况",
          "📈 自带进销存财务分析计算器，零繁复工作即可自动输出流水"
        ],
        en: [
          "💳 Highly interactive checkout POS grid holding billing offline.",
          "📅 Appointment schedulers coordinating groomers based on pet size.",
          "🐾 Dynamic pet database records highlighting allergies and vaccine runs.",
          "📈 Real-time sales telemetry providing instant P&L statement exports."
        ]
      }
    },
    {
      id: "p7",
      title: {
        zh: "友阳宠医 — 宠物在线医疗平台",
        en: "Youyang Online Pet Medicine Platform"
      },
      description: {
        zh: "打通医生、宠主与实体医院的挂接交互专线，支持在线问诊与电子处方流转。",
        en: "Connects certified veterinarians with pet owners, supporting text/video consultations and regulatory digital prescriptions."
      },
      longDescription: {
        zh: "友阳宠医是一款一站式线上专业问诊、电子药方互通共享、线下紧急转院联动的互联网宠物医院中枢。平台采用安全、易核查的架构标准，挂载高清、低时延实时音视频通话组件。用户可以按照品类标签、擅长科室速锁全国名医；医生可在后台根据细颗粒电子处方单（配合药品说明提示及配伍禁忌安全核对）出具非处方和处方建议，无缝对接物流速运或指引附近急救舱，贴心至极。",
        en: "Youyang Pet Health is a compliance-certified medical marketplace linking pet owners with emergency experts. Hosting WebRTC real-time audio-video integrations, owners get immediate digital triage. Vets utilize a custom structured diagnostic dashboard that handles safety boundaries for pharmaceutical dosages, streamlining home nursing and clinic referrals."
      },
      tags: ["在线视频面诊", "宠物远程医疗", "规范化数字处方", "就近医疗网格"],
      category: "software",
      image: "https://files.bitqai.com/website/proj-youyangpet-FrontCover.jpg",
      imageUrl: "https://files.bitqai.com/website/proj-youyangpet-FrontCover.jpg",
      trialUrl: "https://files.bitqai.com/website/proj-youyangpet-QRcode.jpg",
      demoUrl: "https://files.bitqai.com/website/proj-youyangpet-QRcode.jpg",
      detailVideoUrl: "",
      detailImages: [
        "https://files.bitqai.com/website/proj-youyangpet-4.jpg",
        "https://files.bitqai.com/website/proj-youyangpet-3.jpg",
        "https://files.bitqai.com/website/proj-youyangpet-1.jpg",
        "https://files.bitqai.com/website/proj-youyangpet-QRcode.jpg"
      ],
      publishDate: "2023.12",
      logo: "Stethoscope",
      keyFeatures: {
        zh: [
          "📹 自适应超画质实时视频对讲管道，极力辅助伤口视诊",
          "🩺 支持药物说明比对及配伍红线检测的电子处方卡",
          "🏥 地理信息图格联动，遭遇急症可一键指引发起附近急诊定位",
          "📊 履约医师评价打分体系，严密把关线上兽医诊疗水准"
        ],
        en: [
          "📹 High-fidelity WebRTC streaming facilitating real-time skin inspections.",
          "🩺 Structured medical records preventing prescription dosages conflict.",
          "🏥 Geographic locator guiding pet users toward 24-hour physical clinics.",
          "📊 Integrated feedback loops evaluating veterinary rating logs."
        ]
      }
    },
    {
      id: "p8",
      title: {
        zh: "Elfin-6轴协作机器人预研",
        en: "Elfin 6-Axis Collaborative Robotic Arm"
      },
      description: {
        zh: "研发 Elfin 协作机器人的三维高精手眼视觉寻址定位、AGV 自主巡航对接控制程序。",
        en: "Visual positioning logic for elfin joint kinematics, centering Hand-Eye calibration and AGV automated navigators."
      },
      longDescription: {
        zh: "该项目主要针对 6 轴协作工业机器人的智能化运行而研发。系统搭载高精三维‘手在眼上（Eye-in-Hand）’视觉标定矩阵，计算零部件边缘斜率，实现对多形状物体的自适应平滑抓取定位。通过多传感器组合定位算法（LiDAR/IMU）赋予 AGV 车载平台优秀的自主寻轨导航性能，控制指令链路反馈刷新率达 1KHz，大幅提升工业柔性组装与巡逻智能度。",
        en: "This pre-research project focused on optimizing Elfin 6-axis collaborative robotic arm controls for flexible production. We engineered precise 3D Hand-Eye coordinate translation systems guiding visual alignment algorithms to sweep, track, and pick objects in various angles. Aligned with AGV lidar odometry, it forms a cohesive mobile manipulator."
      },
      tags: ["机械视觉定位", "AGV自适应路径", "6轴协作机械臂", "手眼自流纠偏"],
      category: "design",
      image: "https://files.bitqai.com/website/proj-elfin-FrontCover.png",
      imageUrl: "https://files.bitqai.com/website/proj-elfin-FrontCover.png",
      detailVideoUrl: "",
      detailImages: [
        "https://files.bitqai.com/website/proj-elfin-4.png",
        "https://files.bitqai.com/website/proj-elfin-3.png",
        "https://files.bitqai.com/website/proj-elfin-2.png",
        "https://files.bitqai.com/website/proj-elfin-1.png"
      ],
      publishDate: "2022.06",
      logo: "Cpu",
      keyFeatures: {
        zh: [
          "🔭 高可靠的手眼定位估算转换算子，支持毫米级零件寻准",
          "🤖 顺畅嫁接 ROS 控制内核，完成阻抗与柔顺控制自适应",
          "🛡️ 敏感的电流碰撞阻隔避障，保障人机同工安全红线",
          "🏗️ 全流程数据打包总线，连接工业中后台控制系统"
        ],
        en: [
          "🔭 Eye-in-Hand transform solver targeting parts alignment under millimeters.",
          "🤖 Custom controllers bridged to ROS kernels handling complex movements.",
          "🛡️ Low-latency collision sensors executing immediate arm deceleration.",
          "🏗️ Unified Modbus registries transferring coordinate sequences dynamically."
        ]
      }
    },
    {
      id: "p9",
      title: {
        zh: "乳腺超声智能诊断系统",
        en: "Breast Ultrasound AI Diagnostics system"
      },
      description: {
        zh: "基于神经网络架构自动搜索技术（NAS）的超声医学影像智能分析与良恶判定系统。",
        en: "Harnessing advanced Neural Architecture Search (NAS) models to locate breast tumors and estimate benign/malignant. "
      },
      longDescription: {
        zh: "这是针对医学超声活动流视频设计的微小病灶捕获检测系统。团队通过创新的神经网络搜索机制（NAS），大幅提炼轻量化诊断算子，使得高精准度的检测功能可以直接流畅地在普通工位终端上实现。平台能在视频数据流中高亮勾划目标轮廓分析回声不均等恶变因素，对经典的 BI-RADS 分级做出多级客观辅助，极大防止医疗过程漏诊、误判定。",
        en: "An innovative AI diagnosis terminal analyzing fluid ultrasound video segments. By refining deep models through Neural Architecture Search (NAS), the diagnostic engine fits easily on basic medical PCs. Slicing streaming video packets, it highlights lump contours, classifies echogenicity signatures, and recommends BI-RADS score guidelines."
      },
      tags: ["医学超声检测", "AI智能诊断辅佐", "脑神经结构搜索", "BI-RADS分类度"],
      category: "software",
      image: "https://files.bitqai.com/website/proj-ultrasound-FrontCover.jpg",
      imageUrl: "https://files.bitqai.com/website/proj-ultrasound-FrontCover.jpg",
      detailVideoUrl: "",
      detailImages: [
        "https://files.bitqai.com/website/proj-ultrasound-1.jpg",
        "https://files.bitqai.com/website/proj-ultrasound-2.png",
        "https://files.bitqai.com/website/proj-ultrasound-3.jpg",
        "https://files.bitqai.com/website/proj-ultrasound-4.png"
      ],
      publishDate: "2020.10",
      logo: "Activity",
      keyFeatures: {
        zh: [
          "🔬 高效率自研算法，大幅甩掉高端运算硬件显卡绑定要求",
          "🎞️ 超高灵敏的无感超声切片动态描边和运动跟随算法",
          "🩺 严格配合 BI-RADS 专业指南输出标准中文分级数据",
          "🛡️ 结合临床多专家会诊检验，保持高重合精准指标"
        ],
        en: [
          "🔬 Compact neural checkpoints running smoothly without robust GPUs.",
          "🎞️ Real-time video frame object tracker stabilizing irregular bounding boxes.",
          "🛡️ Formal BI-RADS score generators for direct clinical referencing.",
          "🛡️ Double-blind tested alongside radiologists to ensure stellar consistency."
        ]
      }
    }
  ],
  diverseExperiences: [
    {
      id: "div1",
      title: {
        zh: "🗺️ 资深持证导游 (8年)",
        en: "🗺️ Licensed Tour Guide (8 Years)"
      },
      period: "2018 - Present",
      description: {
        zh: "拥有导游执业证书。利用工作之余，曾带队国内众多长线自驾与学术研学团体。这段经历不仅充盈了人文视野，更极其锻炼了我的跨文化沟通、危机公关和高强度、重细节的组织协调能力。",
        en: "Professional tour guide credential holder. Dispatched premium self-driving and educational exploration communities over holiday periods. Refined high-level crisis management, absolute logistics attention, and adaptive communication styles."
      }
    },
    {
      id: "div2",
      title: {
        zh: "🥝 新西兰工作与旅居 (Working Holiday)",
        en: "🥝 New Zealand Working Holiday"
      },
      period: "2022.04 - 2023.04",
      description: {
        zh: "自主赴新西兰开启一年的 Gap Year。深度融入南半球当地社群，在这期间从事过多份当地果园、农场及民生小镇基础性、高压力工作。让我养成了极限环境下的即时英语口语交际能力与终身自适应力。",
        en: "Embarked on a self-directed GAP year program. Imposed myself in community farmsteads, orchards, and town businesses across Otago and Canterbury. Sharpened real-time bilingual fluid dialogue patterns and deep situational adaptiveness."
      }
    },
    {
      id: "div3",
      title: {
        zh: "🏡 精品酒店与中高端民宿运营",
        en: "🏡 Boutique Hotel & Luxury Homestay Management"
      },
      period: "2023.05 - 2023.10",
      description: {
        zh: "在大理、杭州等地中高端民宿与艺术酒店客串运营骨干。负责住客多端关系维护、全域线上直销获客引流、以及现场全链管家式接待，积累了卓越的用户共情心理、服务细节体验设计和现场精细化运作常识。",
        en: "Active operations manager for boutique hotels/guesthouses in Dali and Hangzhou. Led guest experience workflows, digitized booking funnels across media platforms, and curated local community experiences, building immense user empathy and product design insight."
      }
    }
  ]
};
