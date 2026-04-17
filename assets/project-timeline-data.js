/**
 * project-timeline-data.js — 项目时间线数据配置
 *
 * 使用方法：
 * 1. 复制本文件到你的项目目录
 * 2. 修改 PROJECT_CONFIG 对象中的所有数据
 * 3. 在 project-timeline.html 之前引入：
 *   <script src="project-timeline-data.js"></script>
 *
 * 页面会自动读取 window.PROJECT_CONFIG 并渲染所有内容。
 */

window.PROJECT_CONFIG = {

  // ========== 项目基本信息 ==========
  projectName: '我的项目',
  projectSubtitle: '产品设计协作时间线',

  // 项目状态：'进行中' | '已完成' | '已发布'
  status: '进行中',

  // 项目时间范围
  startDate: '2026.04.07',
  endDate: '2026.05.31',
  totalWeeks: 8,

  // ========== Hero 区域高亮文案 ==========
  heroBadge: '交互 + 视觉 已完成',          // 状态徽章文字
  heroPhase: '当前阶段：交互 + 视觉全部完成，进入评审 & 用户测试', // 阶段说明

  // ========== Overview 四宫格 ==========
  // 每个格子：date=日期/版本号, label=说明文字, color=颜色主题
  overview: [
    { date: '4.13', label: '交互稿完成', color: 'blue' },
    { date: '4.14', label: '视觉稿完成', color: 'purple' },
    { date: '4.18', label: '用户测试', color: 'cyan' },
    { date: '5月底', label: '正式发布', color: 'rose' }
  ],

  // ========== 关键节点（Key Nodes） ==========
  // 每个节点：
  //   date        — 显示日期（如 '4.09'，可加后缀如 '4.15'）
  //   title       — 节点标题
  //   subtitle    — 副标题/日期范围
  //   color       — 颜色主题：blue/purple/green/cyan/amber/rose
  //   badge       — 右上角徽章文字
  //   open        — 是否默认展开（true/false）
  //   active      — 是否当前进行中（显示呼吸灯）
  //   detail      — 展开后的子项列表
  //     subLabel  — 子项名称
  //     subDate   — 子项日期（如 '4.09'，用于自动判断 today/done/soon/later）
  //
  // 自动状态判断规则（基于当前日期）：
  //   today — 日期 = 今天
  //   done  — 日期 < 今天
  //   soon  — 日期 > 今天 且 距离 ≤ 3 天
  //   later — 日期 > 今天 且 距离 > 3 天
  keyNodes: [

    {
      date: '4.09', title: '交互设计启动', subtitle: '4.07 → 4.09 · 首批交互稿完成',
      color: 'blue', badge: '交互', open: false, active: false,
      detail: [
        { subLabel: '影视译制交互稿', subDate: '4-9' },
        { subLabel: '作品列表交互稿', subDate: '4-9' }
      ]
    },

    {
      date: '4.10', title: '视觉设计启动 + 直播剪辑交互', subtitle: '4.10 · 首页/影视译制视觉 + 直播剪辑交互',
      color: 'purple', badge: '视觉+交互', open: false, active: false,
      detail: [
        { subLabel: '首页视觉设计', subDate: '4-10' },
        { subLabel: '影视译制视觉设计', subDate: '4-10' },
        { subLabel: '直播剪辑交互稿', subDate: '4-10' }
      ]
    },

    {
      date: '4.11', title: '测试工具搭建', subtitle: '4.10 → 4.11 · Demo 真实可用 + 测试中心',
      color: 'green', badge: '工具', open: false, active: false,
      detail: [
        { subLabel: 'Demo 接入真实 API（MPS 视频译制）', subDate: '4-10' },
        { subLabel: '测试中心搭建（生成链接 + 数据看板）', subDate: '4-10' },
        { subLabel: '埋点系统（行为追踪 + COS 存储）', subDate: '4-10' },
        { subLabel: '完善用户测试工具', subDate: '4-11' }
      ]
    },

    {
      date: '4.13', title: '交互设计全部完成', subtitle: '4.07 → 4.13 · 4 个模块交互稿齐备',
      color: 'blue', badge: '交互', open: false, active: false,
      detail: [
        { subLabel: '影视译制', subDate: '4-9' },
        { subLabel: '作品列表', subDate: '4-9' },
        { subLabel: '直播剪辑', subDate: '4-10' },
        { subLabel: '视频制作', subDate: '4-13' }
      ]
    },

    {
      date: '4.14', title: '视觉设计全部完成', subtitle: '4.09 → 4.14 · 全部 5 个模块视觉交付',
      color: 'purple', badge: '视觉', open: false, active: false,
      detail: [
        { subLabel: '首页', subDate: '4-10' },
        { subLabel: '影视译制', subDate: '4-10' },
        { subLabel: '直播剪辑', subDate: '4-13' },
        { subLabel: '视频制作', subDate: '4-14' },
        { subLabel: '作品列表 + 加载视频', subDate: '4-14' }
      ]
    },

    {
      date: '4.15', title: '视觉稿前端还原', subtitle: '4.14 → 4.15 · 基于视觉稿的代码还原',
      color: 'purple', badge: '还原', open: false, active: false,
      detail: [
        { subLabel: '创作页配置栏重设计（8px圆角/SVG图标/来源弹窗）', subDate: '4-15' },
        { subLabel: '视频来源三Tab弹窗（上传/导入任务/项目文件）', subDate: '4-15' },
        { subLabel: '精调页视觉还原（点阵背景/鼠标亮光/黑色毛玻璃卡片）', subDate: '4-15' },
        { subLabel: '工作室背景改为视频', subDate: '4-15' },
        { subLabel: '全局去 emoji 规则 → SVG icon', subDate: '4-15' },
        { subLabel: '对话状态持久化（sessionStorage 多任务）', subDate: '4-15' }
      ]
    },

    {
      date: '4.16', title: '微动效 + API联调 + 后台任务（进行中）', subtitle: '4.16 · 体验打磨 + 真实 API 对接',
      color: 'green', badge: '打磨', open: true, active: true,
      detail: [
        { subLabel: '全站入场微动效（首页/作品页/译制页/登录页）', subDate: '4-16' },
        { subLabel: 'COS 上传 CORS 修复 + SCF CORS 修复', subDate: '4-16' },
        { subLabel: 'AIGC 视频生成 API 联调（VOD FileInfos 适配）', subDate: '4-16' },
        { subLabel: '后台任务：三种类型区分 + 状态保存恢复', subDate: '4-16' },
        { subLabel: 'CDN 优化（图片压缩 46MB→9MB + preconnect + async）', subDate: '4-16' }
      ]
    },

    {
      date: '4.17', title: '评审会', subtitle: '开发排期 + 埋点方案 · 会后启动开发 + 招募用户',
      color: 'amber', badge: '评审', open: false, active: false,
      detail: [
        { subLabel: '交互稿 + 视觉稿对齐，定开发排期', subDate: '4-17' },
        { subLabel: '同步埋点方案（指标体系 + 采集方式）', subDate: '4-17' },
        { subLabel: '同步用户测试计划，产品协助找用户', subDate: '4-17' }
      ]
    },

    {
      date: '4.18', title: '第一轮用户测试', subtitle: '4.16 → 4.18 · 基于交互原型，快速验证',
      color: 'cyan', badge: '测试', open: false, active: false,
      detail: [
        { subLabel: '1v1 可用性测试（5-8人，每人 30-45min）', subDate: '4-18' },
        { subLabel: '四维体验验证（信任·掌控·找到·共鸣）', subDate: '4-18' },
        { subLabel: '输出测试报告 + P0/P1 问题清单', subDate: '4-18' },
        { subLabel: '反馈指导视觉设计 + 开发优先级', subDate: '4-18' }
      ]
    },

    {
      date: '5月底', title: '灰度 → 正式发布', subtitle: '灰度上线，观察核心指标，全量发布',
      color: 'rose', badge: '发布', open: false, active: false,
      detail: []
    },

    {
      date: '发布后', title: '埋点数据分析', subtitle: '发布后 2 周出首份报告，持续迭代',
      color: 'green', badge: '数据', open: false, active: false,
      detail: [
        { subLabel: '发布后 3 天：核心漏斗 + 异常监控速查', subDate: 'post' },
        { subLabel: '发布后 2 周：首份数据分析报告', subDate: 'post' },
        { subLabel: '发布后 1 月：体验指标深度分析 + 迭代建议', subDate: 'post' }
      ]
    }

  ],

  // ========== Gantt 甘特图 ==========
  // ganttStart / ganttEnd — 日期范围（只支持同一年内的整数日期）
  // colorMap — 类型 → 颜色类名映射
  // data — [模块名, [{t:类型, f:起始日, to:结束日}, ...]]
  //   类型：ix=交互(蓝)  vis=视觉(紫)  tool=工具(绿)
  ganttStart: 7,
  ganttEnd: 22,
  ganttColorMap: {
    ix:   { label: '交互', cls: 'ix' },
    vis:  { label: '视觉', cls: 'vis' },
    tool: { label: '工具', cls: 'tool' }
  },
  ganttData: [
    ['首页',       [{t:'vis', f:9,  to:10}]],
    ['影视译制',   [{t:'ix',  f:7,  to:9 }, {t:'vis', f:9,  to:10}]],
    ['直播剪辑',   [{t:'ix',  f:7,  to:10},{t:'vis', f:11, to:13}]],
    ['视频制作',   [{t:'ix',  f:7,  to:13},{t:'vis', f:13, to:14}]],
    ['作品列表',   [{t:'ix',  f:7,  to:9 }, {t:'vis', f:13, to:14}]],
    ['测试工具',   [{t:'tool',f:10, to:11}]],
    ['视觉还原',   [{t:'vis', f:14, to:15}]],
    ['微动效+API', [{t:'tool',f:16, to:16}]]
  ],

  // ========== 待办清单（To-Do） ==========
  // 每组：
  //   period  — 时间段标题（如 '4.07 — 4.11 第一周'）
  //   count   — 事项数量（显示在标签上）
  //   items   — [{text: 事项描述, tag: 'ix'|'vis'|'plan'|'collab'|'tool', done: bool}, ...]
  //     tag: ix=交互  vis=视觉  plan=规划  collab=协作  tool=工具
  todos: [
    {
      period: '4.07 — 4.11 第一周',
      count: 9,
      items: [
        { text: '影视译制交互稿（4.09）', tag: 'ix',     done: true },
        { text: '作品列表交互稿（4.09）', tag: 'ix',     done: true },
        { text: '首页视觉设计（4.10）',   tag: 'vis',    done: true },
        { text: '影视译制视觉设计（4.10）', tag: 'vis',  done: true },
        { text: '直播剪辑交互稿（4.10）', tag: 'ix',     done: true },
        { text: 'Demo 接入真实 MPS API（4.10）', tag: 'collab', done: true },
        { text: '测试中心搭建：生成链接 + 数据看板（4.10）', tag: 'collab', done: true },
        { text: '埋点系统搭建：行为追踪 + COS 存储（4.10）', tag: 'collab', done: true },
        { text: '完善用户测试工具（4.11）', tag: 'collab', done: true }
      ]
    },
    {
      period: '4.13 — 4.16 第二周',
      count: 10,
      items: [
        { text: '视频制作交互稿（4.13）→ 交互稿全部完成', tag: 'ix',   done: true },
        { text: '直播剪辑视觉设计（4.13）', tag: 'vis',    done: true },
        { text: '视频制作视觉设计（4.14）', tag: 'vis',    done: true },
        { text: '作品列表 + 加载视频视觉（4.14）→ 视觉稿全部完成', tag: 'vis', done: true },
        { text: '视觉稿前端还原（4.14-4.15）', tag: 'vis', done: true },
        { text: '全站微动效（4.16）', tag: 'vis',          done: true },
        { text: 'COS/SCF CORS 修复 + AIGC API 联调（4.16）', tag: 'collab', done: true },
        { text: '后台任务三类型区分 + 状态恢复（4.16）', tag: 'ix', done: true },
        { text: 'CDN 优化：图片压缩 + preconnect + async（4.16）', tag: 'collab', done: true },
        { text: '启动用户测试策划（任务脚本 + 测试维度）', tag: 'plan', done: false }
      ]
    },
    {
      period: '4.17 — 4.19 评审+测试',
      count: 4,
      items: [
        { text: '4.17 评审会：交互+视觉对齐，定开发排期', tag: 'collab', done: false },
        { text: '4.17 评审会：同步埋点方案 + 招募用户', tag: 'plan', done: false },
        { text: '4.16-4.18 执行第一轮用户测试', tag: 'plan', done: false },
        { text: '4.18 输出测试报告 + P0/P1 问题清单', tag: 'plan', done: false }
      ]
    },
    {
      period: '4月下旬 — 5月',
      count: 4,
      items: [
        { text: '视觉走查 & 标注交付开发', tag: 'collab', done: false },
        { text: '逐模块验收设计还原度', tag: 'vis', done: false },
        { text: '灰度上线 → 全量发布', tag: 'collab', done: false },
        { text: '发布后 2 周：首份埋点数据分析报告', tag: 'plan', done: false }
      ]
    }
  ],

  // ========== Extras 区域 ==========
  extras: {
    testing: {
      label: '用户测试',
      content: '<strong>4.14</strong> 交互+视觉完成后立即策划：目标用户画像、测试脚本、维度设计<br><strong>4.16-4.18</strong> 第一轮 1v1 可用性测试（5-8人），基于交互原型快速验证，输出报告指导后续开发'
    },
    status: {
      label: '当前状态',
      type: 'ok',
      content: '交互稿 4 模块 <strong>全部完成</strong>（4.13）<br>视觉稿 5 模块 <strong>全部完成</strong>（4.14）<br>视觉还原 <strong>已完成</strong>（4.15）<br>微动效 + API联调 <strong>进行中</strong>（4.16）'
    },
    tracking: {
      label: '埋点规划',
      content: '页面 PV/UV · 核心漏斗转化 · 功能使用偏好 · 精调行为 · 异常监控'
    }
  }

};
