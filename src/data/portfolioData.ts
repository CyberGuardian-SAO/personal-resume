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
    zh: "我是一名拥有从 AI 视觉算法到企业级系统全栈研发经验的软件开发工程师，能够独立完成系统设计、性能优化与跨端协作。我曾主导智慧宠物门店系统的二次全周期开发与上线，并深度参与多轴协作机器人与 AI 医学影像系统的核心研发。我热衷于将最前沿的 AI 智能体（Agents）工作流编排、大语言模型提示词工程与高性能后端、极致细腻的跨端交互融为一体，为实际商业场景交付高品质、高增长的智能数字方案。",
    en: "I am a full-stack engineer and AI developer with proven experience extending from machine vision algorithms to enterprise-level systems. I excel at system design, performance tuning, and cross-platform synergy. Having orchestrated the secondary development of retail store management software and programmed optical vision controls for collaborative robots and Medtech diagnostics, I blend cutting-edge AI agents, clean workflows, and pixel-perfect frontends to deliver stellar business solutions."
  },
  aboutBullets: {
    zh: [
      "🤖 拥有从零构建大语言模型(LLM)智能体、提示工程(Prompt Engineering)与 RPA 无缝集成的生产级 AI 开发深度功底",
      "💼 曾作为数字化转型负责人，统筹覆盖 20+ 家连锁门店、月营业额超 200 万的智慧宠物门店收银 ERP 系统的开发与落地部署",
      "🎥 深度参与 6 轴协作机器人及首款超声 AI 检测系统等重大预研工作，积累了 OpenCV、PCL 等丰富的底层算法工程实践经验",
      "🚀 倡导并高度实践 Vibe Coding (Cursor / Claude / GPT 高效智能辅助开发)，在代码重构、测试、开发阶段获得翻倍的交付效率",
      "🌍 六级英语(CET-6)具有出色的英文技术文档速读与国际化无痛协作视野，拥有新西兰 Gap Year 旅居及精品店管理等多元背景"
    ],
    en: [
      "🤖 Production-grade experience engineering LLM-driven agents, modular prompt tuning, and WeChat/Web RPA workflows.",
      "💼 Acted as Digitalization Lead delivering an enterprise-tier Pet SaaS POS/ERP system across 20+ outlets, enabling ¥2M+ monthly turnovers.",
      "🎥 Engaged in premium 3D cobots optical tracking and pioneer ultrasound malignancy diagnosis with OpenCV, PCL, and ROS integration.",
      "🚀 Strong advocate and practitioner of Vibe Coding (leveraging Cursor, Claude, and ChatGPT) to double delivery and debugging speeds.",
      "🌍 Passed CET-6 with excellent English technical literature comprehension, backed by international collaboration during NZ Gap Year."
    ]
  },
  stats: [
    {
      label: { zh: "项目交付", en: "Projects Delivered" },
      value: "20+"
    },
    {
      label: { zh: "实战工龄", en: "Active Tech Career" },
      value: "6年"
    },
    {
      label: { zh: "覆盖门店数", en: "Flagship Outlets" },
      value: "20+"
    },
    {
      label: { zh: "效率提升", en: "Efficiency Lift" },
      value: "200%"
    }
  ],
  awards: [
    {
      title: { zh: "校级“优秀毕业论文(设计)”(Top 1.5%)", en: "University-level 'Outstanding Graduation Thesis' (Top 1.5%)" },
      year: "2020"
    },
    {
      title: { zh: "湖南省研究性学习与创新性实验课题省级立项结题", en: "Hunan Province Research Learning and Innovative Experimental Project Provincial Completion" },
      year: "2019"
    },
    {
      title: { zh: "第四届“建设银行杯”全国互联网+创新创业大赛“三等奖”", en: "4th 'CCB Cup' China Internet+ Innovation and Entrepreneurship Competition 'Third Prize'" },
      year: "2018"
    },
    {
      title: { zh: "发表CSSCI南大核心期刊", en: "CSSCI Core Journal Publication" },
      year: "2018"
    },
    {
      title: { zh: "全国高校商业精英挑战赛“全国二等奖”", en: "National University Business Elite Challenge 'National Second Prize'" },
      year: "2017"
    },
    {
      title: { zh: "第八届中南地区模拟联合国大会“最佳风采奖”", en: "8th Central-South Model United Nations Conference 'Best Style Award'" },
      year: "2017"
    }
  ],
  skills: [
    // Frontend
    { 
      name: { zh: "Flutter & uniapp (跨端开发)", en: "Flutter & uniapp (Cross-platform)" }, 
      level: 93, 
      category: "Frontend",
      color: "#2563EB",
      description: {
        zh: "跨平台移动端和桌面端开发架构，深耕底层渲染层优化与多端自适应布局，达成一套代码丝滑复用。",
        en: "Master of cross-device mobile/desktop rendering, ensuring performant write-once-run-anywhere deployments with fluid UI experiences."
      },
      relatedProjects: ["p7"],
      relatedExperiences: ["exp1"]
    },
    { 
      name: { zh: "JavaScript / Vue.js", en: "JavaScript / Vue.js" }, 
      level: 91, 
      category: "Frontend",
      color: "#14B8A6",
      description: {
        zh: "丰富的组合式 API 实战经验，熟练落地复杂单页面的状态抽象模块与高可用组件池体系。",
        en: "Deep expertise in Composition API, handling complex SPA state management and scalable reusable component ecosystems."
      },
      relatedProjects: ["p6", "p7"],
      relatedExperiences: ["exp1"]
    },
    { 
      name: { zh: "React & Tailwind CSS", en: "React & Tailwind CSS" }, 
      level: 86, 
      category: "Frontend",
      color: "#D946EF",
      description: {
        zh: "精通函数式组件设计，结合原子级 CSS 工具库无门槛打造像素级且极高响应度的高奢数字交互。",
        en: "Crafting pixel-perfect, highly responsive interfaces utilizing functional components and utility-first CSS styling precision."
      },
      relatedProjects: ["p0", "p1", "p2", "p5"],
      relatedExperiences: ["exp0"]
    },
    { 
      name: { zh: "HTML5 / CSS3 / ES6+", en: "HTML5 / CSS3 / ES6+" }, 
      level: 88, 
      category: "Frontend",
      color: "#F59E0B",
      description: {
        zh: "扎实的切图与语义化网页渲染底盘，熟练操刀脱离框架的极速自适应布局和跨浏览器兼容处理。",
        en: "Rock-solid foundations in responsive layouts, semantic document markups, and pure native styling strategies bypassing frameworks."
      },
      relatedProjects: ["p0", "p1", "p2", "p6", "p7"],
      relatedExperiences: ["exp0", "exp1"]
    },
    { 
      name: { zh: "WebSocket 实时全双工协议", en: "WebSocket (Real-time Duplex)" }, 
      level: 92, 
      category: "Frontend",
      color: "#0EA5E9",
      description: {
        zh: "打通前后端多通道毫秒级长连接，轻松承载直播协同数据并保证前端应用侧即时状态无损分发。",
        en: "Bridging bi-directional real-time data streams for milliseconds-latency collaborative or live-update features seamlessly."
      },
      relatedProjects: ["p1", "p5", "p6", "p7", "p8"],
      relatedExperiences: ["exp0", "exp1", "exp2", "exp3"]
    },
    
    // Backend
    { 
      name: { zh: "C / C++ (STL / QT / Boost)", en: "C / C++ (STL / QT / Boost)" }, 
      level: 93, 
      category: "Backend",
      color: "#E11D48",
      description: {
        zh: "高并发无锁线程与指针安全设计，深入底层 STL 与极速响应的跨平台 QT 图形控制引擎架构研发。",
        en: "Concurrency and STL memory tuning, highly proficient in authoring multi-threaded cross-platform QT graphic control engines."
      },
      relatedProjects: ["p5", "p8", "p9"],
      relatedExperiences: ["exp2", "exp3"]
    },
    { 
      name: { zh: "PHP (ThinkPHP / Yii 框架)", en: "PHP (ThinkPHP / Yii)" }, 
      level: 90, 
      category: "Backend",
      color: "#7C3AED",
      description: {
        zh: "极速输出商业中后台 CRUD 系统及电商复杂派单核销逻辑，驾驭海量单表存储及多表动态全连接查询。",
        en: "Efficient production of ERP and eCommerce backends, mastering huge-scale table associations and high-traffic order logic."
      },
      relatedProjects: ["p6", "p7"],
      relatedExperiences: ["exp1"]
    },
    { 
      name: { zh: "TCP/IP & 高速套接字网络编程", en: "TCP/IP & High-Speed Sockets" }, 
      level: 91, 
      category: "Backend",
      color: "#EA580C",
      description: {
        zh: "果断剥离臃肿的传统 HTTP 头部封装，采用 C++ 生套接字原语处理严苛的医疗及工业级数据链路稳定通信。",
        en: "Stripping overheads with raw customized Sockets to guarantee nano-second industrial/medical hardware telemetry stability."
      },
      relatedProjects: ["p5", "p8", "p9"],
      relatedExperiences: ["exp2", "exp3", "exp7"]
    },
    { 
      name: { zh: "Node.js (Express / Koa API)", en: "Node.js (Express / Koa API)" }, 
      level: 89, 
      category: "Backend",
      color: "#16A34A",
      description: {
        zh: "深拓中间件鉴权拦截机制，借助事件驱动与非阻塞 I/O 构建优异的高并发 BFF 微服务 API 代理网关。",
        en: "Designing event-driven, non-blocking microservices and robust API gateways scaling flexibly tailored for Frontend-centric requests."
      },
      relatedProjects: ["p0", "p1", "p2", "p3"],
      relatedExperiences: ["exp0"]
    },
    { 
      name: { zh: "MySQL, Redis & SQL 慢查询调优", en: "MySQL, Redis & Slow SQL Tuning" }, 
      level: 88, 
      category: "Backend",
      color: "#2563EB",
      description: {
        zh: "精于分析大宽表的执行计划路径、设计并重构 B+ 树索引结构，运用 Redis 热点穿透技术大幅降级数据库压力。",
        en: "Profiling slow query execution plans, caching high-concurrency read layers, and fortifying transactional database index structures."
      },
      relatedProjects: ["p6", "p7", "p9"],
      relatedExperiences: ["exp1", "exp3", "exp7"]
    },
    { 
      name: { zh: "Linux & LNMP 全套生产环境运维", en: "Linux & LNMP Environment Ops" }, 
      level: 87, 
      category: "Backend",
      color: "#475569",
      description: {
        zh: "积淀多年的 CentOS/Ubuntu 实操配置部署经验，可单兵完成负载均衡隔离及一键式可扩展集群服务器上架搭建。",
        en: "Seasoned headless Ubuntu environment configuration, scripting fast automated deployments, and tuning clustered reverse proxy routings."
      },
      relatedProjects: ["p6", "p7"],
      relatedExperiences: ["exp1", "exp3", "exp7"]
    },
    { 
      name: { zh: "Python / Data Scripting", en: "Python / Data Scripting" }, 
      level: 84, 
      category: "Backend",
      color: "#D97706",
      description: {
        zh: "灵活采用 Python 撰写多线程并行爬虫、定制数据切洗分类工作流，并在模型训练期进行多参实验与图谱输出。",
        en: "Employing robust automated extraction pipelines, data sanitation scripts, and executing parameter orchestrator batch processes."
      },
      relatedProjects: ["p3", "p4", "p9"],
      relatedExperiences: ["exp6"]
    },

    // AI & Data
    { 
      name: { zh: "AI 智能体开发 & 敏捷工作流编排", en: "AI Agents & Workflow Orchestration" }, 
      level: 95, 
      category: "AI / Data",
      color: "#9333EA",
      description: {
        zh: "熟练将大模型拆解为具身独立 Agent，结合知识图谱完成从自由上下文语境检索到最终外部应用功能准确投递流。",
        en: "Orchestrating autonomous LLMs into embodied Agents, closing the loop from logical NLP reasoning to real-world function calling validations."
      },
      relatedProjects: ["p0", "p1", "p2", "p4"],
      relatedExperiences: ["exp0"]
    },
    { 
      name: { zh: "Vibe Coding 协同人机交互与提示词优化", en: "Vibe Coding & Prompt Optimization" }, 
      level: 96, 
      category: "AI / Data",
      color: "#0D9488",
      description: {
        zh: "紧追前沿的创新型人机交互编码范式，深度适配并极限利用当下生成引擎，跨栈极速完成高门槛系统交付。",
        en: "Pioneering Human-AI symbiosis and prompt contextual designs, dramatically amplifying engineering delivery capabilities transcending traditional limits."
      },
      relatedProjects: ["p0", "p1", "p2", "p3"],
      relatedExperiences: ["exp0"]
    },
    { 
      name: { zh: "OpenCV (工业图像检测与目标分类)", en: "OpenCV (Industrial Insp. & Class.)" }, 
      level: 92, 
      category: "AI / Data",
      color: "#E11D48",
      description: {
        zh: "专研解决复杂工业环境打光盲拍缺陷，组合运用算子针对不规则目标做边缘抽离提取、色彩自动补偿校正与降噪。",
        en: "Formulating optical exposure adjustments, sub-pixel edge detection, and noise-filtering formulas to conquer extreme industrial lighting inconsistencies."
      },
      relatedProjects: ["p4", "p5", "p8", "p9"],
      relatedExperiences: ["exp2", "exp3", "exp6"]
    },
    { 
      name: { zh: "PCL (三维工业点云拼接与法向计算)", en: "PCL (3D Point Cloud Processing)" }, 
      level: 85, 
      category: "AI / Data",
      color: "#2563EB",
      description: {
        zh: "驾驭严苛结构的三维空间点群匹配算法，能够快速计算外轮廓法向参数在柔性抓取堆叠乱序场景下提供决定性锚定点。",
        en: "Registering complex 3D point clouds and normal parameter estimations for rapid spatial anchor matching in chaotic unstructured robotic picking modules."
      },
      relatedProjects: ["p8"],
      relatedExperiences: ["exp2"]
    },
    { 
      name: { zh: "Gemini / OpenAI API 整合与中转", en: "Gemini / OpenAI API Integration" }, 
      level: 93, 
      category: "AI / Data",
      color: "#F59E0B",
      description: {
        zh: "精通各大原厂闭源及开源模型多模态通信集成，娴熟控制流式输出延时截断，并完美搭建结合私有数据的 RAG 链路增强机制。",
        en: "Expertly integrating cloud-hosted conversational endpoints, managing fast streaming sockets, and architecting RAG pipelines using specific vector database contexts."
      },
      relatedProjects: ["p0", "p1", "p2", "p3"],
      relatedExperiences: ["exp0"]
    },
    { 
      name: { zh: "OpenClaw (AI Agent 框架)", en: "OpenClaw (AI Agent Framework)" }, 
      level: 94, 
      category: "AI / Data",
      color: "#3B82F6",
      description: {
        zh: "利用 OpenClaw 高度模块化的智能体架构，实现零售巡检、视觉分析与企业工作流机器人的快速闭环研发与部署。",
        en: "Leveraging OpenClaw's modular agent architecture to rapidly architect and deploy retail supervision, visual inspection, and enterprise automation bots."
      },
      relatedProjects: ["p4"],
      relatedExperiences: ["exp0"]
    },

    // Tools & Design
    { 
      name: { zh: "Git / Gitee 团队协作版本控制", en: "Git / Gitee Team VC" }, 
      level: 94, 
      category: "Tools & Design",
      color: "#DC2626",
      description: {
        zh: "恪守多分支规范化开发基准线，熟练拆解并解决交叉冲突，保证团队长期项目维护期的无缝溯回和清爽代码审查流。",
        en: "Mastering rigorous branching paradigms across teams, managing conflict resolution gracefully, and assuring highly readable clean version tracebacks over iterations."
      },
      relatedProjects: ["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"],
      relatedExperiences: ["exp0", "exp1", "exp2", "exp3"]
    },
    { 
      name: { zh: "Postman API 接口单元联调测试", en: "Postman API Unit Testing" }, 
      level: 92, 
      category: "Tools & Design",
      color: "#CA8A04",
      description: {
        zh: "在前置开发周期高频采用 Mock 隔离模拟请求，进行并发压测分析，从而输出规范且可自解释的全栈交互接驳文档规范。",
        en: "Accelerating decoupled parallel team cycles via isolated Mock servers and comprehensive generation of self-explanatory interactive API docs."
      },
      relatedProjects: ["p0", "p1", "p2", "p3", "p6", "p7"],
      relatedExperiences: ["exp0", "exp1"]
    },
    { 
      name: { zh: "Jira / Wiki 敏捷开发流管理", en: "Jira / Wiki Agile Management" }, 
      level: 89, 
      category: "Tools & Design",
      color: "#2563EB",
      description: {
        zh: "强烈推崇并深度践行敏捷迭代准则，科学拆解并分发 Sprint 池权重颗粒，推动业务从原始概念至技术文档落地的极速固化。",
        en: "Championing cross-functional Scrum sprints, dividing tasks into granular backlog queues, and fostering centralized technical corporate-knowledge preservation."
      },
      relatedProjects: ["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"],
      relatedExperiences: ["exp0", "exp1", "exp2", "exp3"]
    },
    { 
      name: { zh: "CMake & Linux 编译底层构建工具", en: "CMake & Linux Build Tools" }, 
      level: 86, 
      category: "Tools & Design",
      color: "#059669",
      description: {
        zh: "游刃有余地管控重型 C++ 项目依赖地狱拓扑图，通过精密的底层脚本设计消除多系统的二次编译移植壁垒。",
        en: "Engineering intricate native cross-platform compilations, alleviating heavy dependency hell topological structures utilizing modular Makefile directives."
      },
      relatedProjects: ["p8"],
      relatedExperiences: ["exp7", "exp2"]
    },
    { 
      name: { zh: "Linux网络与IO", en: "Linux Network & IO" }, 
      level: 85,
      category: "Backend",
      color: "#64748B",
      description: {
        zh: "掌握Linux底层网络套接字编程、IO多路复用及定时器算法。",
        en: "Proficient in low-level Linux socket programming, IO multiplexing, and timer algorithm optimizations."
      },
      relatedProjects: ["p8"],
      relatedExperiences: ["exp7", "exp2"]
    },
    { 
      name: { zh: "TensorFlow模型训练", en: "TensorFlow Model Training" }, 
      level: 80,
      category: "AI / Data",
      color: "#FF6F00",
      description: {
        zh: "应用TensorFlow及Inception-v3模型进行图像特征提取与训练。",
        en: "Practical experience using TensorFlow and Inception-v3 models for image feature extraction and training."
      },
      relatedProjects: ["p4", "p9"],
      relatedExperiences: ["exp6"]
    }
  ],
  experiences: [
    {
      id: "exp0",
      role: {
        zh: "AI智能体架构师 & 独立开发者",
        en: "AI Agent Architect & Independent Developer"
      },
      company: {
        zh: "AI智能体开发与数字化顾问 (自由执业/独立开发)",
        en: "AI Agent Solutions & Digital Consultant (Independent)"
      },
      period: "2025.12 - 2026.05",
      description: {
        zh: [
          "聚焦先进大语言模型(LLM)智能体、自动化工作流与微服务架构开发，主导了 Career AI 留学/求职、EduCare AI 及 PetCare AI 等多款极客型垂直场景 Agent 系统落地",
          "熟练设计和调优场景提示词工程（Prompt Engineering），结合 RAG 向量智囊基础，打通微信/Web控制终端与自动化 RPA 网页及后端数据库的实时闭环接口",
          "彻底践行人机无缝协作 Vibe Coding，采用 Cursor / Claude / GPT 各大生产力模型缩减 70% 编码时长，深度解耦轻量 Serverless APIs 模块，达成高敏捷的前后端极致体验"
        ],
        en: [
          "Focused on premium LLM-driven agents, automation workflows, and lightweight micro-services, bringing Career AI, EduCare AI, and PetCare AI vertical setups into highly functional products.",
          "Synthesized context-aware Prompt Engineering coupled with RAG vector search mechanisms, building cohesive pipelines routing real-time conversations to backend relational databases or Selenium-based RPA wrappers.",
          "Implemented pure human-AI Vibe Coding workflows via Cursor and Claude, cutting development timelines by 70% and managing serverless API structures for absolute operational lightness."
        ]
      },
      skills: ["LLM Agents", "Prompt Engineering", "TypeScript", "Vibe Coding", "Serverless API", "Node.js", "HTML5 / CSS3 / ES6+", "Git / Gitee Team VC", "Postman API Unit Testing", "Jira / Wiki Agile Management"]
    },
    {
      id: "exp1",
      role: {
        zh: "数字化转型负责人",
        en: "Director of Digital Transformation & Tech Head"
      },
      company: {
        zh: "长沙客就来网络科技有限公司 (软件服务)",
        en: "Changsha Kejiulai Network Technology Co., Ltd. (SaaS)"
      },
      period: "2023.12 - 2025.11",
      description: {
        zh: [
          "全面统筹「智慧宠物门店收银管理系统」（策雄 POS/ERP）的二次全周期开发设计、核心数据库重整与技术总落地执行",
          "使用 Flutter 完美设计高性能跨平台 PC 收银端，基于 uniapp 开发微信电商小程序及 Vue.js+Element UI 支撑的 ERP 后端数据后台，实现多端秒级长链数据同步",
          "采用 ThinkPHP 框架完成高可靠、低延迟业务服务端逻辑及高内聚 API 设计，采用 MySQL 优化复杂多表聚合 SQL，通过 Redis 缓解高频报表统计运算压力",
          "主导敏捷迭代，管理多渠道跨国协作与系统规范落地，极力护航 20+ 个大中型连锁宠物店顺利上线部署，实现单月销售营业总额突破 200 万大关"
        ],
        en: [
          "Directed the custom secondary development, database architecture refactoring, and general system delivery of the flagship 'Kejiulai Pet SaaS POS & ERP' platform.",
          "Coded desktop-grade POS checkout applications using Flutter, and crafted client eCommerce portals on WeChat mini-programs using uniapp linked with React/Vue management dashboards.",
          "Engineered backend servers with ThinkPHP, optimizing heavily nested SQL queries while offloading analytics reporting pipelines to Redis caching structures.",
          "Championed Scrum conventions to govern cross-functional teams, overseeing deployments in 20+ flagship retail outlets and safely handles monthly sales exceeding ¥2,000,000."
        ]
      },
      skills: ["Flutter", "uniapp", "ThinkPHP", "MySQL", "Redis", "WebSocket", "Vue.js", "Element UI"]
    },
    {
      id: "exp2",
      role: {
        zh: "机器视觉工程师",
        en: "Machine Vision Engineer"
      },
      company: {
        zh: "深圳市大族机器人有限公司 (智能制造)",
        en: "Shenzhen Han's Robot Co., Ltd. (Industrial Automation)"
      },
      period: "2022.05 - 2023.06",
      description: {
        zh: [
          "参与大族 Elfin 系列 6 轴协作工业机械臂的部分核心视觉寻源算法与 AGV 随动巡航机器人的姿态轨迹算法预研工作",
          "利用 OpenCV 与 PCL 建立精密的三维空间点云对齐与特征提取骨架，毫米级精确提取手眼视觉（Eye-in-Hand）抓取位置，解决强反光材质零件辨识难题",
          "主导建立模块化插件式框架，支持 ROS 操作系统下机器人视觉和避障算法的动态加载热插拔，提高算法集成和现场调试频次超 50%",
          "使用 Boost.Asio 构建线程安全的高并发 C++ 异步 Socket 通信栈，结合 gRPC 和 WebSocket 降低 AGV 底座与中央工控端通信时延，时延完美控制在 100ms 以内"
        ],
        en: [
          "Contributed to visual tracking algorithms and mobile AGV coordinate conversions for the high-end industrial Elfin 6-axis collaborative robotic arm.",
          "Constructed rigorous 3D point cloud alignment and edge descriptors with OpenCV/PCL, achieving sub-millimeter precision in Hand-Eye calibration.",
          "Engineered fully modular hot-pluggable plugin containers inside ROS environment, decreasing site testing cycles and compilation friction by 50%.",
          "Architected thread-safe networking backends in C++ via Boost.Asio, optimizing gRPC/WebSocket queues to enforce robotic roundtrip latency under 100ms."
        ]
      },
      skills: ["C++", "OpenCV", "PCL", "ROS", "Boost.Asio", "gRPC", "WebSocket", "CMake"]
    },
    {
      id: "exp3",
      role: {
        zh: "C++ 开发工程师",
        en: "C++ Software Engineer"
      },
      company: {
        zh: "北京医准智能科技有限公司 (智能医疗/AI辅助诊断)",
        en: "Beijing Yizhun Intelligent Technology Co., Ltd. (AI MedTech)"
      },
      period: "2020.06 - 2022.04",
      description: {
        zh: [
          "投身国内首款医学超声影像实时陈列的 AI 辅助病变快速检出系统，实现对乳腺病灶结节的高精自动描边分割与良恶性程度多层评级判定",
          "使用 QT 设计整套极简视窗，OpenCV 实现超声视频帧极速捕获、录屏截图与渲染机制，精简医师日常交互步骤，阅片耗时缩短 25%",
          "抛弃高能耗 HTTP 套接字，采用原生态 TcpSocket 直联医学工作机视频流，有效抑制音视频丢帧和高频断流重试异动，提升图传极速与稳定性",
          "引入 Base64 编码并组合 MD5 对关键患者、医院隐私元数据进行密级加盐安全混淆保护，顺利通过医疗器械及院方安全机密合规范审查"
        ],
        en: [
          "Pioneered China's first regulatory-compliant MedTech software for ultrasound tumor boundaries detection and automated BI-RADS classification.",
          "Authored QT visual diagnostics workspace, wrapping high-speed OpenCV decoders to render video screenshots, which reduced overall clinical click counts by 25%.",
          "Developed high-performance raw TcpSocket message loops to fetch ultrasound streams, bypassing high overhead HTTP request routines and avoiding frame dropouts.",
          "Incorporated cryptographic schemes based on multi-salt MD5 and Base64 headers to secure patient datasets, passing strict hospital auditing with flying colors."
        ]
      },
      skills: ["C++", "QT", "OpenCV", "Socket", "rapidjson", "log4qt", "Cryptography", "MySQL"]
    },
    {
      id: "exp6",
      role: {
        zh: "毕业设计 (核心负责人)",
        en: "Core Developer (Graduation Project)"
      },
      company: {
        zh: "基于深度学习的“两步路”近景标注模型",
        en: "DL-based 'Two-Step Road' Annotation Model"
      },
      period: "2020.01 - 2020.06",
      description: {
        zh: [
          "对森林景观图片进行深度视觉识别与分类，提供林学与旅游信息化智能化科研支撑。",
          "采用 Selenium 自动化模拟操作，配合 BeautifulSoup4 解析器高效抓取海量网页样本数据。",
          "基于 Hashlib MD5 算法对数据去重清洗，导入 TensorFlow 与 Inception-v3 模型训练框架，实现复杂景观图片的特征精细化提取与表征分析。"
        ],
        en: [
          "Executed deep visual recognition and classification task for forest landscape analysis to provide intelligent research support.",
          "Deployed Selenium automation and BeautifulSoup4 parsers to aggregate and sanitize massive web-based dataset samples.",
          "Engineered Hashlib-based MD5 deduplication pipelines and trained Inception-v3 models within TensorFlow for high-precision landscape element feature extraction."
        ]
      },
      skills: ["Python", "TensorFlow Model Training", "Inception-v3", "Selenium", "BeautifulSoup4", "Hashlib", "Pandas"]
    },
    {
      id: "exp7",
      role: {
        zh: "开发人员 (大学项目)",
        en: "Developer (University Project)"
      },
      company: {
        zh: "Linux 私有协议文件传输系统",
        en: "Linux Private Protocol File Transfer System"
      },
      period: "2019.06 - 2019.12",
      description: {
        zh: [
          "实现了一套高性能Linux服务器端传输系统，支持多客户端并发连接、用户注册登录与文件上传下载、增删操作。",
          "基于IO多路复用与高效线程池架构，利用mmap技术实现大文件极速传输，通过偏移量支持断点续传。",
          "集成MySQL加盐加密验证，利用MD5技术实现文件秒传，引入TimingWheel定时轮算法降低服务器连接开销与资源消耗。"
        ],
        en: [
          "Engineered a high-performance Linux server transmission system supporting multi-client concurrency, user auth, and file manipulation.",
          "Architecture built on IO multiplexing and thread pooling, utilizing mmap for large file transport and offset tracking for breakpoint resumption.",
          "Integrated salted MySQL authentication, MD5 hashes for instant file transfers, and TimingWheel algorithms to optimize server connection overhead."
        ]
      },
      skills: ["Linux Network & IO", "IO Multiplexing", "mmap", "Breakpoint Resumption", "File Hot Transfer", "TimingWheel", "MySQL", "Encryption"]
    }
  ],
  projects: [
    {
      id: "p10",
      title: {
        zh: "职面 AI",
        en: "BitQAI Career Matcher"
      },
      description: {
        zh: "为求职者打造的个人求职全流程管理 CRM，通过 AI 实现投递信息结构化与个性化话术优化。",
        en: "CRM for job seekers, optimizing job applications with structured data & AI-personalized outreach."
      },
      longDescription: {
        zh: "本系统是一款为求职者打造的个人求职全流程管理 CRM。它通过 AI 技术实现求职信息的结构化管理、个性化话术自动生成与简历投递跟踪，解决传统投递过程中信息碎片化、话术单一、跟进混乱的痛点，显著提升求职者的投递效率与面试转化率。",
        en: "This system is a personal job search CRM. It uses AI to structure job application data, automatically generate personalized scripts, and track resume applications, solving pain points like information fragmentation and inefficient follow-ups to improve interview conversion rates."
      },
      tags: {
        zh: ["求职管理", "CRM", "AI话术生成", "投递跟踪"],
        en: ["Job Search CRM", "AI Outreach", "Application Tracking", "Career Management"]
      },
      category: "ai",
      image: "https://files.bitqai.com/website/career_crm_cover.png",
      imageUrl: "https://files.bitqai.com/website/career_crm_cover.png",
      trialUrl: "https://sayhi.bitqai.com",
      demoUrl: "https://sayhi.bitqai.com",
      publishDate: "2026.06",
      logo: "Briefcase",
      keyFeatures: {
        zh: [
          "📊 求职投递管理 (CRM): 集成公司信息、状态、话术与面试记录",
          "✨ AI 智能 outreach: 根据岗位 JD 自动生成个性化打招呼话术",
          "🔄 智能化工作流: 手动录入，即时保存与云同步",
          "🎨 现代化界面风格: 采用微型交互与玻璃拟态风格"
        ],
        en: [
          "📊 Job Application CRM: Manage company info, status, notes, & interview records",
          "✨ AI Outreach: Generate personalized outreach scripts based on JD",
          "🔄 Smart Workflow: Immediate save & cloud sync",
          "🎨 Modern Design: Micro-interactions & Glassmorphism UI"
        ]
      }
    },
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
      tags: {
        zh: ["简历重构", "跨行业转型", "ATS语义匹配", "智能模拟面试"],
        en: ["Resume Refactoring", "Cross-Industry Transition", "ATS Semantic Matching", "AI Mock Interviews"]
      },
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
      tags: {
        zh: ["留学规划", "智能推荐", "金字塔院校组合", "背景提升建议"],
        en: ["Admissions Planning", "Smart Recommender", "Tiered Universities", "Profile Enhancement"]
      },
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
      tags: {
        zh: ["流程自动化", "RPA机器人", "微信控制端", "意图语义识别"],
        en: ["Workflow Automation", "RPA Bot", "WeChat Control", "Semantic Intent Parsing"]
      },
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
        zh: "基于 AI 智能体框架 OpenClaw 与飞书机器人实现的智能巡店、陈列货架数据自动审核与多模态数据定量分析。",
        en: "Intelligent store inspection & layout compliance audit bot built on OpenClaw AI Agent framework and Feishu enterprise integrations."
      },
      longDescription: {
        zh: "该项目是基于 OpenClaw 智能体开源框架与飞书工作流机器人构建的企业级闭环督导解决方案。巡检顾问或店员只需在飞书聊天窗口中发送实体陈列货架的照片，后台的 OpenClaw Agent 即可实时调用多模态大模型进行智能图像分析。系统会自动定位并计数货架上的各类 SKU、提取 OCR 价格信息、自动判断陈列占比和堆头饱满度，并根据品牌规范即时核算合规分数，一键推送到飞书卡片，从而将传统繁重的线下人工督导流程彻底实现智能化、轻量化与实时闭环。",
        en: "A cutting-edge retail supervision solution built on the OpenClaw AI Agent framework and integrated with Feishu (Lark) corporate workflows. Users simply take and send snapshots of store displays in a Feishu channel; the backend OpenClaw agent triggers multi-modal vision LLMs to identify specific SKUs, check price tags using high-performance OCR, judge spatial facing ratios, and compute real-time compliance scores. Feedback and corrective tasks are returned instantly via interactive Feishu cards, achieving seamless, fully integrated digital workflows."
      },
      tags: {
        zh: ["OpenClaw 智能体", "飞书机器人", "多模态大模型", "全自动陈列审核"],
        en: ["OpenClaw Agent", "Feishu Chatbot", "Multimodal LLMs", "Automatic Audit"]
      },
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
          "🤖 基于 OpenClaw 智能体框架，实现流式任务链编排与大模型灵活调用",
          "💬 深度融合飞书集成，发送货架实拍照即可在飞书群或单聊即时获取审核卡片",
          "👁️ 多模态视觉推理，全自动完成货架 SKU 检出、堆头饱满度以及价格吊牌 OCR 校验",
          "📊 自动化数据闭环，异常陈列一键生成飞书待办事项并自动派单责令整改"
        ],
        en: [
          "🤖 Powered by OpenClaw Agent framework for dynamic LLM chaining and scheduling.",
          "💬 Seamless Feishu chatbot integration rendering interactive audit cards inside chat rooms.",
          "👁️ Advanced multi-modal visual inference detecting SKUs, facing ratios, and OCR tags.",
          "📊 Closed-loop ticketing system converting audit failures into Feishu tasks for store leads."
        ]
      }
    },
    {
      id: "p6",
      title: {
        zh: "宠医健康聚合平台",
        en: "Youyang Pet Health"
      },
      description: {
        zh: "挂载高清、低时延实时音视频通话组件。用户可以按照品类标签、擅长科室速锁全国名医；医生可在后台根据细颗粒电子处方单（配合药品说明提示及配伍禁忌安全核对）出具非处方和处方建议，无缝对接物流速运或指引附近急救舱，贴心至极。",
        en: "Youyang Pet Health is a compliance-certified medical marketplace linking pet owners with emergency experts. Hosting WebRTC real-time audio-video integrations, owners get immediate digital triage. Vets utilize a custom structured diagnostic dashboard that handles safety boundaries for pharmaceutical dosages, streamlining home nursing and clinic referrals."
      },
      longDescription: {
        zh: "宠医健康聚合平台是一个面向宠主与急救专家的高可用远程医疗及问诊服务平台。系统挂载高清、低时延实时 WebRTC 音视频通话组件，用户可以按照品类标签、擅长科室秒级锁定全国持证名医。针对线上处方安全性，设计了细颗粒度数字电子处方单，配合药品禁忌自动交叉安全核对引擎，提供可靠用药建议。同时融合地理网格服务，可实时指引和一键导航至最近的宠物24小时急救舱或实体网点，极速化解宠物意外急症风控偏高痛点。",
        en: "Youyang Pet Health is a highly available virtual pet consultation and emergency marketplace. By integrating low-latency Adaptive WebRTC components, pet owners can connect instantly with credentialed veterinarians based on specialties and user ratings. To ensure safe prescribing, it incorporates cross-checking rules for drug-to-drug interactions. Additionally, by matching map grids, the system offers instant navigation directions guiding distressed owners to the nearest 24-hour veterinary facility."
      },
      tags: {
        zh: ["在线视频面诊", "宠物远程医疗", "规范化数字处方", "就近医疗网格"],
        en: ["Virtual Consultation", "Pet Telehealth", "Digital Prescriptions", "Local Med-Grid"]
      },
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
          "🏥 Local geo-grid mappings enabling one-touch emergency dispatch.",
          "📊 Performance-driven veterinarian grading metrics."
        ]
      }
    },
    {
      id: "p7",
      title: {
        zh: "策雄 POS/ERP 智慧宠物门店收银系统",
        en: "Kejiulai POS/ERP Pet System"
      },
      description: {
        zh: "基于 Flutter 跨平台的智慧宠物门店收银 SaaS 平台，涵盖多端 POS 销账与后台级距 ERP 盘点。",
        en: "Cross-platform POS and ERP SaaS solutions handling massive multi-store orchestrations, inventory, and point-of-sale activities."
      },
      longDescription: {
        zh: "全面统筹二次全周期开发设计的「智慧宠物门店收银管理系统」。利用 Flutter 开发高性能跨平台 PC 收银端，基于 uniapp 开发微信电商小程序及 Vue.js 支撑的 ERP 后台，实现多端长链数据同步。采用 ThinkPHP 框架提供高可靠、低延迟业务服务端逻辑及高内聚 API，利用 MySQL 和 Redis 保障超 20+ 个大中型连锁店同时平稳运行，单月营收流水超 200 万元。",
        en: "Oversaw the full lifecycle redesign of the Smart Pet Chain POS/ERP platform. Built high-performance multi-platform checkout terminals utilizing Flutter alongside uniapp WeChat programs. Backed by ThinkPHP and Vue.js panels, the platform scaled across 20+ national franchise branches, reliably clearing $300K in monthly regional transaction volumes via robust MySQL & Redis caches."
      },
      tags: {
        zh: ["SaaS门店系统", "多端同步", "Flutter 收银端", "全渠道订单"],
        en: ["Retail SaaS", "Multi-platform Sync", "Flutter POS", "Omnichannel"]
      },
      category: "software",
      image: "https://files.bitqai.com/website/proj-cexiong-FrontCover.png",
      imageUrl: "https://files.bitqai.com/website/proj-cexiong-FrontCover.png",
      trialUrl: "https://petpospal.com",
      detailImages: [
        "https://files.bitqai.com/website/proj-petpospal-4.png",
        "https://files.bitqai.com/website/proj-petpospal-3.png",
        "https://files.bitqai.com/website/proj-petpospal-2.png",
        "https://files.bitqai.com/website/proj-petpospal-1.png",
      ],
      publishDate: "2025.11",
      logo: "Store",
      keyFeatures: {
        zh: [
          "💳 Flutter 驱动多端丝滑流畅结账及扫码收银硬件无缝对接",
          "📦 ERP 层面高精度的跨门店进销存盘点与效期预警",
          "🔄 WebSocket 实时监听多终端云端库存与本地挂单流水",
          "📈 ThinkPHP 聚合支撑大量级并发报表运算与云端财务校对"
        ],
        en: [
          "💳 Cross-OS Flutter POS checkout UI enabling scanning peripherals.",
          "📦 Scalable ERP stock tracking coupled with shelf-life degradation monitors.",
          "🔄 Real-time WebSocket syncing preventing concurrent multi-store conflicts.",
          "📈 High-performance reporting ledgers backed by advanced MySQL aggregation."
        ]
      }
    },
    {
      id: "p8",
      title: {
        zh: "大族 Elfin 6轴协作机械臂",
        en: "Han's Elfin 6-Axis Robot"
      },
      description: {
        zh: "融合 OpenCV 与 PCL 建立精密三维点云对齐提取框架，实现在高精工业环境下柔性物料的动态寻轨和动作纠偏。",
        en: "Sub-millimeter algorithmic calibrations augmenting a 6-axis cooperative arm for heavy-duty industrial dynamic tracking."
      },
      longDescription: {
        zh: "该项目主要针对高端工业自动化场景，研发大族 Elfin 系列协作工业机械臂的核心视觉寻源算法与 AGV 随动巡航机器人动作路径。系统依托 OpenCV 与 PCL，建立精密的三维空间点云对齐与边缘轮廓特征模型，将手眼视觉（Eye-in-Hand）的抓取精确度强效控制在亚毫米级，解决强反光等疑难金属材质标件辨认障碍。通过搭建的热插拔 ROS 插件极大地化解了产线停机换型困境，并通过底层 Boost.Asio 高并发网络池，使协作机器网关连通时延极速降至 100ms 之内。",
        en: "Geared towards advanced automation manufacturing, this system developed core vision tracking integrations for the Han's Elfin 6-Axis bot. It implemented spatial OpenCV/PCL filters handling noisy 3D point cloud configurations, ensuring sub-millimeter precision for 'Eye-in-Hand' manipulation and overcoming shiny metal reflection interference. Enhanced hot-pluggable ROS components allow rapid debugging at factory deployment. Its deeply tuned C++ local queue reduces the gRPC & Websockets signaling wait strictly under 100ms."
      },
      tags: {
        zh: ["工业软体控制", "3D定位校准 PCL", "高速Boost网关", "毫米级误差补偿"],
        en: ["Industrial Control", "3D PCL Alignment", "Boost Network Gateway", "Sub-millimeter Calibration"]
      },
      category: "hardware",
      image: "https://files.bitqai.com/website/proj-elfin-FrontCover.png",
      imageUrl: "https://files.bitqai.com/website/proj-elfin-FrontCover.png",
      detailImages: [
        "https://files.bitqai.com/website/proj-elfin-4.png",
        "https://files.bitqai.com/website/proj-elfin-3.png",
        "https://files.bitqai.com/website/proj-elfin-2.png",
        "https://files.bitqai.com/website/proj-elfin-1.png",
      ],
      publishDate: "2023.06",
      logo: "Cpu",
      keyFeatures: {
        zh: [
          "🦾 ROS 算法容器设计，完美规避调测时的流水线产线休克",
          "👁️ OpenCV × PCL 双擎校准，突破高反光镜面抛光材质的扫描盲区",
          "⚡ 高并发底层 C++ 异步 Socket 架构成倍减小微秒级发版时延",
          "⚙️ 六自由度（6-DOF）全方位柔和平滑纠偏容错策略"
        ],
        en: [
          "🦾 Hot-pluggable ROS architecture minimizing downtime.",
          "👁️ Dual-engine PCL & OpenCV vision tracking escaping high-reflection limitations.",
          "⚡ Extreme low-latency asynchronous socket structures powering robotic telemetry.",
          "⚙️ Error tolerant 6-DOF precision compensations algorithms."
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
      tags: {
        zh: ["工业视觉", "VisionMaster", "亚像素定位", "工控联动PLC"],
        en: ["Industrial Vision", "VisionMaster", "Sub-pixel Align", "PLC Control"]
      },
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
      tags: {
        zh: ["宠物医疗", "风险分级评估", "多模态大模型", "急救分流红线"],
        en: ["Pet Healthcare", "Risk Triage", "Multi-modal LLM", "First-aid Triaging"]
      },
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
          "🩺 Domain-trained medical routing agent aligning specialized veterinary diagnostic logic for rapid triage.",
          "📸 Multimodal visual classification for skin lesions, ulcers, and revelations.",
          "📝 Clear tripartite urgency routing for home care vs. emergency guidance.",
          "🐾 Digitized lifetime health records and physiological tracking."
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
      tags: {
        zh: ["医学超声检测", "AI智能诊断辅佐", "脑神经结构搜索", "BI-RADS分类度"],
        en: ["Ultrasound Scan", "AI Diagnostics", "Neural Arch Search", "BI-RADS Scoring"]
      },
      category: "hardware",
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
          "🩺 Formal BI-RADS score generators for direct clinical referencing.",
          "🛡️ Double-blind tested alongside radiologists to ensure stellar consistency."
        ]
      }
    }
  ],
  diverseExperiences: [
    {
      id: "div5",
      title: {
        zh: "新西兰 Working Holiday & 深度多国游历探险",
        en: "New Zealand Working Holiday & Multi-Country Depth-Travel Adventure"
      },
      period: "2023.06 - 2023.12",
      description: {
        zh: "在**新西兰 Working Holiday**开启工作度假之旅，全面体验当地生活与职场节奏。这段深度沉浸之旅不仅锻炼了极强的异国环境适应力，同时也深度探访了**日本、新加坡、马来西亚、泰国、老挝、菲律宾、印度尼西亚、斯里兰卡**等十余个国家，极大拓展了国际化视野，深刻洞察不同文化下的用户行为与产品体验需求。",
        en: "Embarked on a **New Zealand Working Holiday**, fully engaging with local life and workspace rhythms. This deeply immersive journey not only built resilient cross-cultural adaptability but also featured extensive travels across **10+ countries**, including **Japan, Singapore, Malaysia, Thailand, Laos, Philippines, Indonesia, and Sri Lanka**. This broadened international perspective profoundly informs my user empathy and design thinking."
      }
    },
    {
      id: "div1",
      title: {
        zh: "湖南省中青旅  |  导游与策划 (拥有8年持证导游资历)",
        en: "Hunan CYTS | Tour Guide & Planner (8-Year Licensed)"
      },
      period: "2018.09 - 2020.01",
      description: {
        zh: "持有**全国导游资格证**（证号：BM11259Y），能够独立完成优质旅游线路设计、报价核算、行程策划及高品质的客户沟通。熟悉旅游产品策划与推广流程，能进行目的地品牌包装与线上线下整合营销；善于将短视频文案、数据分析与**两步路**结合，对客群画像、转化率进行精准研判规划。具有出色的境外全英文路书资料撰写与外宾接待能力。",
        en: "Licensed Tour Guide (No. BM11259Y) with **8 years of credentialed background**. Expert at independent itinerary design, cost accounting, and customer communication. Adept at creating targeted marketing packages, short-video scripts, and leveraging **AI (ChatGPT/DeepSeek)** for data-driven traveler profiling. Fully capable of hosting foreign tours and formulating comprehensive English exploration documents."
      }
    },
    {
      id: "div3",
      title: {
        zh: "大理古镇薇薇民居  |  民宿主理人",
        en: "Dali Weiwei Guesthouse | Boutique Homestay Manager"
      },
      period: "2015.06 - 2015.12",
      description: {
        zh: "脱产跨界投身住宿服务业，深度负责民宿的前后台日常精细化运营、多渠道线上直销获客引流及全程管家式招待。积累了深厚的**用户共情力**与敏锐的**体验侧设计直觉**，极大地提升了实战服务流程中的高维协同能力。",
        en: "Served as the core manager of a boutique homestay, handling end-to-end hospitality operations. Managed multi-channel online booking funnels, led offline guest curation, and cultivated a robust sense of **user empathy** which continuously inspires my **product/UX design thinking**."
      }
    },
    {
      id: "div6",
      title: {
        zh: "极限户外探险拓荒者 (藏地徒步/骑行)",
        en: "Extreme Outdoor Expedition Trailblazer (Tibet Trekking/Cycling)"
      },
      period: "2012.06 - 2013.12",
      description: {
        zh: "2012年独自**骑行拉萨318国道**，历经挑战与考验；2013年**徒步西藏214**并反串雅鲁藏布江腹地**墨脱**，完成极高难度的荒野徒步穿越。在极限环境中淬炼出极强的意志力、风险预见能力以及在复杂突发情况下的高压处理与资源统筹素养。",
        en: "Solo-cycled the **318 National Highway to Lhasa** in 2012, overcoming immense physical and mental challenges. In 2013, trekked the **214** and successfully traversed the remote hinterlands of **Medog, Yarlung Tsangpo Grand Canyon**. These extreme adventures forged unyielding perseverance, expert risk assessment, and high-pressure decision-making capabilities in complex, resource-scarce environments."
      }
    },
    {
      id: "div4",
      title: {
        zh: "户外探险组长、安全急救与特殊通行证牌",
        en: "Outdoor Expedition Leader, First Aider & Specialized Licenses"
      },
      period: "Certifications / 复合能力资格",
      description: {
        zh: "持有专业医护级急救证书（编号：CSSJJPX-25-1473419），熟练掌握急救心肺复苏（CPR）、AED 除颤设备使用及突发伤害管控。积累了丰富的徒步、露营及山地向导经验，体能出色且具备优异的风险预见与野外生还能力。同时持有标准 **C1 驾照**（熟悉 7 座 MPV 车队驾驶）、**D照摩托车驾照**、**香港区域机动车驾照**（熟练右舵行驶），及 **PADI 国际潜水证**。",
        en: "Certified First Aider (No. CSSJJPX-25-1473419) proficient in CPR, AED life support, and emergency injury treatments. Boasting extensive mountaineering, camping, and trekking experiences with tremendous stamina and wilderness survival skills. Fully licensed for standard MPVs (**C1 manual driving**), motorcycle operation (**D-class license**), Hong Kong right-hand-drive vehicles, alongside holding professional **PADI Scuba Diving** certifications."
      }
    }
  ],
  experiencesHeader: {
    title: {
      zh: "职业生涯履历",
      en: "Technical Chronicle"
    },
    subtitle: {
      zh: "在海量业务淬炼中锤炼的成长图景",
      en: "A timeline of growth refined through large scale business demands"
    },
    clickHint: {
      zh: "提示：点击下方任一高亮履历卡片，即可展开/折叠详细的业绩成就与技术栈",
      en: "Tip: Click any credential card below to expand/collapse detailed achievements & tech stack"
    }
  },
  education: {
    header: {
      zh: "教育及通用学术底座",
      en: "Education & Foundations"
    },
    degree: {
      zh: "全日制本科 · 信息化技术与管理",
      en: "Full-time Bachelor's in Information Tech & Management"
    },
    school: {
      zh: "中南林业科技大学 (国内一流大学建设高校)",
      en: "Central South University of Forestry and Tech (CSUFT)"
    },
    period: "2016.09 - 2020.06",
    languageHeader: {
      zh: "语言能力 (CET-6)",
      en: "Language Capability (CET-6)"
    },
    languageLevel: {
      zh: "具有境外旅居跨国协作沟通经验。英文技术文档阅读与学习能力出众。",
      en: "Overseas living/collaboration experience. Superb English technical reading and learning proficiency."
    }
  },
  contact: {
    header: {
      title: { zh: "联系我", en: "Get in Touch" },
      subtitle: { zh: "期待交流，探讨合作并探索更多技术可能", en: "Let's connect and explore potential technical collaborations." }
    },
    labels: {
      coordinates: { zh: "联系方式", en: "COORDINATES" },
      location: { zh: "地点", en: "LOCATION" },
      email: { zh: "邮箱", en: "DIRECT EMAIL" },
      phone: { zh: "联系电话", en: "TELEPHONE" },
      wechatQr: { zh: "添加微信", en: "WECHAT QR CODE" },
      socialMedia: { zh: "社交媒体", en: "SOCIAL MEDIA" }
    },
    actions: {
      copyEmail: { zh: "复制邮箱", en: "Copy Email" },
      copyPhone: { zh: "复制电话", en: "Copy Phone" },
      wechatSync: { zh: "微信同号", en: "WeChat Sync" },
      wechatSameNumber: "微信同号码"
    },
    details: {
      location: { zh: "中国 广东省深圳市 / 云南省普洱市", en: "Shenzhen, Guangdong / Pu'er, Yunnan, China" },
      email: "guoxin@bitqai.com",
      phoneLabel: "15323411996",
      wechatQrUrl: "https://files.bitqai.com/website/wechat-qrcode.jpg",
      githubUrl: "https://github.com/BitQAI",
      linkedinUrl: "https://linkedin.com"
    },
    form: {
      name: { zh: "您的尊称", en: "Full Name" },
      namePlaceholder: { zh: "例如：埃隆 · 马斯克", en: "e.g. Elon Musk" },
      email: { zh: "电子邮箱", en: "Email Address" },
      emailPlaceholder: { zh: "例如: guoxin@bitqai.com", en: "e.g. guoxin@bitqai.com" },
      phone: { zh: "联系电话 (可选)", en: "Phone Number (Optional)" },
      phonePlaceholder: { zh: "例如：153 2341 1996", en: "e.g. +1 (555) 000-0000" },
      type: { zh: "合作意向", en: "Collaboration Intent" },
      typeConsulting: { zh: "项目顾问 / 咨询", en: "Consulting / Contract" },
      typeFulltime: { zh: "全职契机", en: "Full-time Opportunities" },
      typeSaaS: { zh: "AI Agent 定制开发", en: "AI Agent Solutions" },
      message: { zh: "留言内容", en: "Message" },
      messagePlaceholder: {
        zh: "写下您的项目大纲或合作意向，我会尽快回复您。",
        en: "Please briefly describe your requirements or intent, and I will get back to you soon."
      },
      submit: { zh: "发送消息", en: "Send Message" },
      sending: { zh: "发送中...", en: "Sending..." },
      successTitle: { zh: "发送成功！", en: "Message Sent!" },
      successDesc: {
        zh: "感谢您的联络，您的信息已成功发出，我将尽快回复。",
        en: "Thank you for reaching out. Your message has been sent successfully, and I will get back to you soon."
      }
    }
  },
  latestNews: [
    {
      id: "news15",
      date: "2026.06",
      title: {
        zh: "✨ 职面 AI [智能投递话术生成与求职流程管理](https://sayhi.bitqai.com) 正式上线",
        en: "✨ BitQAI Career Matcher Launched"
      },
      description: {
        zh: "专为求职者打造的个人求职全流程管理 CRM，通过 AI 实现投递信息结构化与个性化话术优化，显著提升面试转化率。",
        en: "CRM for job seekers, optimizing job applications with structured data & AI-personalized outreach to boost interview rates."
      },
      status: "completed",
      link: "https://sayhi.bitqai.com",
      relatedProjects: ["p10"]
    },
    {
      id: "news16",
      date: "2026.05",
      title: {
        zh: "🌐 个人全栈数字名片站点 [resume.bitqai.com](https://resume.bitqai.com) 正式上线",
        en: "🌐 Personal Full-Stack Digital Portfolio [resume.bitqai.com](https://resume.bitqai.com) is Live"
      },
      description: {
        zh: "基于React + Vite全栈架构构建，全面整合个人项目积淀与AI Agent交互体验，打造极致响应的数字简历名片。",
        en: "Built on React + Vite full-stack architecture, integrating personal project portfolios with seamless AI Agent interactions for an ultimate digital resume experience."
      },
      status: "completed",
      link: "https://resume.bitqai.com"
    },
    {
      id: "news1",
      date: "2026.05",
      title: {
        zh: "🚀 Career AI [智能求职客户端 2.0](https://career.bitqai.com) 正式发布",
        en: "🚀 Career AI Client 2.0 Officially Released"
      },
      description: {
        zh: "合并简历重构与智能面试功能，通过多智能体自适应拟真技术极速提升通过率，并全面开源核心交互组件。",
        en: "Integrated resume reconfiguration and AI-driven mock interviews using adaptive multi-agent technology. Core components now open-sourced."
      },
      status: "completed",
      link: "https://career.bitqai.com",
      relatedProjects: ["p0"]
    },
    {
      id: "news13",
      date: "2026.06",
      title: {
        zh: "🎯 高考志愿AI填报助手上线",
        en: "🎯 AI-Powered Gaokao Volunteer Helper Launched"
      },
      description: {
        zh: "接入全国高校历史录取数据，结合用户分数与倾向精准推荐[高概率录取方案](https://gaokao.bitqai.com)，大幅规避志愿填报偏差风险。",
        en: "Integrated historic admission data to provide accurate recommendation [plans](https://gaokao.bitqai.com), minimizing risk in volunteer application."
      },
      status: "in_progress",
      link: "https://gaokao.bitqai.com"
    },
    {
      id: "news14",
      date: "2026.06",
      title: {
        zh: "💰 个人负债清零记录小工具",
        en: "💰 Personal Debt-Free Tracker Tool"
      },
      description: {
        zh: "极简记账与智能策略规划工具，通过[债项拆解与进度可视化](https://debt.bitqai.com)，实时监控并加速财务自由进程。",
        en: "A minimalist [finance tracking and smart debt-reduction](https://debt.bitqai.com) planner to visualize progress toward financial freedom."
      },
      status: "in_progress",
      link: "https://debt.bitqai.com"
    },
    {
      id: "news3",
      date: "2026.04",
      title: {
        zh: "🎓 EduCare AI [智能留学](https://edu.bitqai.com) PS/CV 助手联动院校库",
        en: "🎓 EduCare AI Dynamic Academy CV Recommender Connected"
      },
      description: {
        zh: "覆盖全球数千所高校招生档案库，支持个人陈述 & 简历深度对比并在数秒内输出定制化评级。",
        en: "Covers admission profiles for global universities, micro-tuning Resume/PS feedback in seconds."
      },
      status: "completed",
      link: "https://edu.bitqai.com",
      relatedProjects: ["p2"]
    },
    {
      id: "news4",
      date: "2026.03",
      title: {
        zh: "🤖 RPA 微信闭环机器人 [上线🔥](https://files.bitqai.com/website/bitqai_rpa_demo.mp4)",
        en: "🤖 RPA WeChat Automation Bot Repo Open-Sourced"
      },
      description: {
        zh: "支持微信消息流多路由调起网页，静默执行对账流程与异常安全预警，大幅拉升中小零售端对账效率。",
        en: "Supports parsing secure WeChat signals to directly execute background booking and push safety alerts."
      },
      status: "completed",
      link: "https://files.bitqai.com/website/bitqai_rpa_demo.mp4",
      relatedProjects: ["p3"]
    },

    {
      id: "news5",
      date: "2026.02",
      title: {
        zh: "📡 AI巡店督导助手端全面精简弱网上传时延",
        en: "📡 AI Retail Inspector Minimizes Upload Overhead"
      },
      description: {
        zh: "更新智能视频/图像片段上行多参压缩序列，在 3G/4G 信号偏弱环境使图片上行响应度拔高 45%，保障业务可用性。",
        en: "Optimized upstream telemetry queues, saving up to 45% bandwidth over weak signals for seamless on-site safety inspection."
      },
      status: "completed"
    },
    {
      id: "news6",
      date: "2025.12",
      title: {
        zh: "💼 开启自由执业，布局大模型 Agent 落地咨询",
        en: "💼 Multi-agent Consulting & Solopreneur Journey Started"
      },
      description: {
        zh: "专耕复杂工作流智能体编排设计、企业 RAG 多模态垂直检索增强，以及 Node.js / React 全栈原型快速闭环交付。",
        en: "Deep-diving into complex langchain/autogen node orchestration, active corporate RAG, and high-fidelity fullstack prototype delivery."
      },
      status: "completed"
    },
    {
      id: "news7",
      date: "2025.11",
      title: {
        zh: "🏪 策雄 POS/ERP 智慧宠物连锁管理系统平稳交接",
        en: "🏪 Kejiulai Pet Shop POS/ERP System Smooth Handoff"
      },
      description: {
        zh: "统筹设计多门店高稳定性 WebSocket 状态同步，主导研发覆盖超 20+ 连锁加盟门店，平稳处理月超 200 万元流水。",
        en: "Led architectural sync for 20+ local outlets, scaling concurrent websocket requests with ¥2M+ monthly transaction throughput."
      },
      status: "completed"
    },
    {
      id: "news8",
      date: "2025.08",
      title: {
        zh: "📱 重构策雄小程序，全面拥抱 Vue 3 Composition",
        en: "📱 Retail SaaS WeChat Mini-app Fully Refactored with Vue 3"
      },
      description: {
        zh: "从旧 H5 页面升级至 Uni-app 并彻底重组为 Composition 架构，在全系列手机上有效减少冷启动白屏返回延迟 35%。",
        en: "Migrated legacy mobile templates to modern Composition API constructs, rendering views 35% faster on low-end screen devices."
      },
      status: "completed"
    },
    {
      id: "news9",
      date: "2024.12",
      title: {
        zh: "⚡ 自研高抗扰双通道 WebSocket 自动重连机制",
        en: "⚡ High-Resilience WebSocket Dual-Channel Engine"
      },
      description: {
        zh: "重点解决商场及地下店铺信号漂移导致的数据错位，通过可靠指令退避重试队列，保障门店交易收银无感继续。",
        en: "Guarantees zero payment sequence loss during heavy brick-and-mortar radio dropouts via exponential retry buffer queues."
      },
      status: "completed"
    },
    {
      id: "news10",
      date: "2023.06",
      title: {
        zh: "🦾 大族 Elfin 协作机械手避障标定项目工厂交付",
        en: "🦾 Han's Elfin Robot Arm Calibration Factory Launch"
      },
      description: {
        zh: "融合 OpenCV、PCL 等视觉标定算法进行柔性物料寻轨，高精毫米级机械臂动作纠偏在全球知名华南厂房中平稳运行。",
        en: "Engineered sub-millimeter vision alignment solver coupled with PCL point-cloud tracking, enabling reliable automation pick-and-place."
      },
      status: "completed"
    },
    {
      id: "news11",
      date: "2022.04",
      title: {
        zh: "🏥 医学超声辅助 AI 病变检出系统多院线试运行",
        en: "🏥 Breast Tumor Ultrasound AI CAD Pilot Commenced"
      },
      description: {
        zh: "实现超声实时影像乳腺结节边缘自动搜寻，结合客户端图物一键拼接评判，协助影像科临床医生审片时数平均缩短约 25%。",
        en: "Achieved real-time ultrasound lump contour extraction algorithms alongside customized clinical reports, shaving 25% reading time."
      },
      status: "completed"
    },
    {
      id: "news12",
      date: "2020.06",
      title: {
        zh: "🎓 高校本科毕业，凭借优秀毕业论文开启研发之路",
        en: "🎓 Undergraduate Graduation, Research Journey Commenced"
      },
      description: {
        zh: "凭借森林景观识别标注研究论文，获得校级优秀毕业论文，开启了作为C++工程师在AI MedTech领域的系统研发实践。",
        en: "Graduated with honors, thesis on DL-based landscape annotation receiving top-tier distinctions, formally entering C++ AI MedTech R&D."
      },
      status: "completed"
    }
  ]
};
