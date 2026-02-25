export const photos = [
    "https://cdn.jsdelivr.net/gh/WENHAO-SHEN320/portfolio-assets/images/IMG_3975.JPG",
    "https://cdn.jsdelivr.net/gh/WENHAO-SHEN320/portfolio-assets/images/IMG_7828.jpg",
    "https://cdn.jsdelivr.net/gh/WENHAO-SHEN320/portfolio-assets/images/9941bdce14dd278543d21f1238f21cf6.JPG"
];

export const projects = [
    { id: 6, title: "自适应电影推荐系统", subtitle: "基于用户分层的的个性化系统设计", description: "面向用户活跃度差异，构建多模型加权融合框架，引入动态权重与特征缩放机制，优化高活跃用户稀疏问题，完成端到端实验Pipeline构建与自动化评估。", role: "算法设计", date: "2025.09 - 2026.01", tags: ["推荐系统", "多模型融合", "Pipeline"] },
    { id: 7, title: "智能知识服务系统", subtitle: "企业级客服解决方案", description: "基于用户调研梳理三类核心需求，构建RAG检索增强与Agent工具链协同框架，设计角色化Prompt与自动化报告生成流程，支持多轮语境理解与复杂业务处理，稳定提升服务覆盖。", role: "智能体构建", date: "2025.04 - 2025.06", tags: ["RAG", "Agent", "Prompt"] },
    { id: 8, title: "LDPC译码优化研究", subtitle: "信道编码算法优化实践（Nokia合作）", description: "主导SPA与改进Min-Sum算法对比实验，构建多参数仿真环境并进行归一化与偏移系数优化。在目标BER下实现约7.6dB编码增益，并验证图像传输场景稳定性。", role: "仿真建模", date: "2025.03 - 2025.08", tags: ["LDPC", "仿真建模", "算法优化"] },
    { id: 9, title: "学生实习匹配平台", subtitle: "双边信息系统需求建模与架构设计实践", description: "围绕学生与企业实习匹配场景，主导从需求调研到系统设计的全流程建模。构建岗位发布、申请与确认流程，使用UML建模核心交互逻辑，完成需求与设计文档交付，覆盖功能需求、性能与安全约束。", role: "产品设计", date: "2024.10 - 2025.02", tags: ["需求建模", "架构设计", "UML"] },
    { id: 10, title: "雷达目标检测优化", subtitle: "自动驾驶感知系统深度学习研究", description: "围绕毫米波雷达在复杂环境下语义信息不足的问题，设计融合3D CNN与Transformer自注意力机制的目标检测模型。基于40万帧雷达数据集进行消融实验，完成模型优化与结果可视化。", role: "模型优化", date: "2023.08 - 2024.06", tags: ["深度学习", "目标检测", "Transformer"] }
];

export const papers = [
    { id: 1, title: "奥林匹克广播服务公司（OBS）", venue: "内容标注 · 实时协作 · 广播流程支持", role: "Video Logger", date: "2025.12-2026.02", desc: "参与大型国际赛事官方转播内容记录与标注工作，协同技术与内容团队优化日志结构与标签标准。" },
    { id: 2, title: "好多素教（浙江）网络科技有限公司", venue: "模型评测 · Agent设计 · 多模态产品落地 · Midjourney", role: "AIGC大模型应用运营", date: "2024.05-2024.08", desc: "负责公司在教育行业的AI大模型应用运营与落地，聚焦学习场景和内容生产效率，推动AI产品赋能业务。" },
    { id: 3, title: "广州视源电子科技股份有限公司（CVTE）", venue: "质量保障 · 接口兼容 · 测试自动化", role: "软件测试", date: "2023.09-2023.12", desc: "负责MNT显示器产品的接口检验与质量保障，通过优化测试流程，保障产品量产交付的质量与稳定性。" },
    { id: 4, title: "马瑞利汽车电子（广州）有限公司（Marelli）", venue: "软件质量 · 流程管理 · 指标量化", role: "软件质量工程师", date: "2023.06-2023.09", desc: "负责软件质量保证SQA流程落地，参与从需求到交付的全流程评审，推动跨部门质量管理与交付合规。" }
];

export const philosophies = [
    { id: 1, category: "人生态度", title: "既然选择了远方，便只顾风雨兼程", content: "远方意味着不确定，也意味着可能性；风雨不是阻力，而是检验决心的方式。这是我对长期目标的理解——少一些摇摆，多一些前行；少一些抱怨，多一些承担。" },
    { id: 2, category: "学习方法", title: "构建认知，而非堆积知识", content: "学习不是收集信息，而是形成结构。我更关注底层逻辑与问题之间的连接，而不是碎片化记忆。当认知框架建立起来，新知识只是填充，而不是负担。" },
    { id: 3, category: "产品思维", title: "以用户为中心", content: "好的产品不是功能的堆砌，而是对用户需求的深刻理解。每一个设计决策都应该回答：这对用户有什么价值？" }
];

export const products = [
    { id: 1, name: "Claude Code", cat: "AI编程", logoUrl: "https://cdn.jsdelivr.net/gh/WENHAO-SHEN320/portfolio-assets/images/Claude_AI_symbol.svg", reason: "将常用逻辑封装为Skill，使智能体具备可调用、可组合的能力结构。", insight: "当能力被结构化，协作才会稳定。" },
    { id: 2, name: "Google生态", cat: "AI × Workspace", logoUrl: "https://cdn.jsdelivr.net/gh/WENHAO-SHEN320/portfolio-assets/images/gemini-color.png", reason: "从Gemini到NotebookLM，再到AI Studio，模型、知识与协作形成闭环。", insight: "真正的智能，在于无缝整合。" },
    { id: 3, name: "Manus", cat: "任务型智能体", logoUrl: "https://cdn.jsdelivr.net/gh/WENHAO-SHEN320/portfolio-assets/images/Manus.jpeg", reason: "围绕目标拆解步骤、调用工具、完成闭环，让执行更可控。", insight: "流程意识，是智能体走向成熟的标志。" },
    { id: 4, name: "Perplexity", cat: "检索增强问答", logoUrl: "https://cdn.jsdelivr.net/gh/WENHAO-SHEN320/portfolio-assets/images/Perplexity.jpeg", reason: "将问题转化为可追溯的答案，让信息获取更直接。", insight: "好的搜索，不只是给答案，而是给依据。" },
    { id: 5, name: "Lovable", cat: "AI原型工具", logoUrl: "https://cdn.jsdelivr.net/gh/WENHAO-SHEN320/portfolio-assets/images/lovable-color.png", reason: "在前端美学与交互体验上表现出色，适合快速构建精致原型。", insight: "设计，也可以即时验证。" },
    { id: 6, name: "Obsidian", cat: "知识管理", logoUrl: "https://cdn.jsdelivr.net/gh/WENHAO-SHEN320/portfolio-assets/images/Obsidian.jpeg", reason: "当结构化笔记接入AI，知识不再只是存储，而是可计算、可生成。", insight: "结构是基础，智能是放大器。" },
    { id: 7, name: "Runway", cat: "AI视频创作", logoUrl: "https://cdn.jsdelivr.net/gh/WENHAO-SHEN320/portfolio-assets/images/Runway.webp", reason: "在镜头控制与视觉实验上提供高度自由，适合快速生成社交内容与创意表达。", insight: "创意优先，而非真实优先。" },
    { id: 8, name: "Gamma", cat: "AI演示生成", logoUrl: "https://cdn.jsdelivr.net/gh/WENHAO-SHEN320/portfolio-assets/images/GAMA.L-fef5159f.png", reason: "以极快速度生成视觉统一的演示稿，强调叙事流而非页面堆叠。", insight: "好的表达，是对结构的提炼。" }
];
