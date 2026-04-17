---
name: tideo-project-timeline
description: "This skill provides a project timeline management page with Gantt chart, key milestones tracking, todo lists, and status overview. Use this skill when the user needs to create a project progress dashboard, milestone tracker, release planner, sprint board, or any time-based project visualization for product development, design handoff, or engineering coordination."
---

# Tideo Project Timeline Skill — 项目时间线管理看板 v2（数据驱动版）

## 概述

本 Skill 提供一个**完全数据驱动的项目时间线页面**，所有内容由 `project-timeline-data.js` 配置，无需修改 HTML。

四大模块：
1. **Key Nodes** — 可折叠时间轴节点，自动判断 today/done/soon/later
2. **Gantt Chart** — 可视化排期，支持任意模块和日期范围
3. **Todo List** — 按周分组，checkbox 切换完成状态
4. **Status Overview** — 四宫格数字卡片 + 信息 Callout

---

## 快速使用（3 步完成）

### Step 1: 引入数据配置

```html
<!-- 在 project-timeline.html 之前引入 -->
<script src="project-timeline-data.js"></script>
```

然后编辑 `project-timeline-data.js`，修改 `window.PROJECT_CONFIG` 中的所有数据。

### Step 2: 引入页面

```html
<script src="project-timeline-data.js"></script>
<script src="project-timeline.html"></script>
<script src="render-from-config.js"></script>
<!-- render-from-config.js 会自动读取 PROJECT_CONFIG 并渲染 -->
```

### Step 3: 修改数据

编辑 `project-timeline-data.js`，只需改配置数据，页面自动更新。

预计定制时间：**10-15 分钟**

---

## 文件结构

```
tideo-project-timeline/
├── SKILL.md                          # 本文档
├── references/
│   └── timeline-css.md              # CSS 变量速查表
└── assets/
    ├── project-timeline.html         # 页面骨架（含所有 CSS，可直接浏览器打开）
    ├── project-timeline-data.js      # 项目数据配置（即改即用）
    └── render-from-config.js         # 数据驱动渲染器（自动读取配置）
```

---

## PROJECT_CONFIG 完整字段说明

### 基本信息

```javascript
window.PROJECT_CONFIG = {

  // 项目名称（显示在 Hero 标题）
  projectName: '我的项目',
  projectSubtitle: '产品设计协作时间线',

  // 项目状态：'进行中' | '已完成' | '已发布'
  status: '进行中',

  // 时间范围（显示在 Hero 元信息）
  startDate: '2026.04.07',
  endDate:   '2026.05.31',
  totalWeeks: 8,

  // Hero 区域高亮文案
  heroBadge: '交互 + 视觉 已完成',           // 状态徽章
  heroPhase: '当前阶段：...',                // 阶段说明

  // ...
};
```

### Overview 四宫格

```javascript
overview: [
  { date: '4.13', label: '交互稿完成', color: 'blue'   },
  { date: '4.14', label: '视觉稿完成', color: 'purple' },
  { date: '4.18', label: '用户测试',   color: 'cyan'  },
  { date: '5月底', label: '正式发布',  color: 'rose'  }
]
```

颜色可选：`blue` / `purple` / `green` / `cyan` / `amber` / `rose`

### Key Nodes（关键节点）

```javascript
keyNodes: [
  {
    date:    '4.09',                                // 显示日期
    title:   '交互设计启动',                         // 节点标题
    subtitle:'4.07 → 4.09 · 首批交互稿完成',        // 副标题
    color:   'blue',                               // 颜色主题
    badge:   '交互',                               // 右上角徽章
    open:    false,                                 // 是否默认展开
    active:  false,                                 // 是否当前进行中（呼吸灯）
    detail:  [                                     // 展开的子项
      { subLabel: '影视译制交互稿', subDate: '4-9' },
      { subLabel: '作品列表交互稿', subDate: '4-9' }
    ]
  },
  // ...
]
```

**subDate 格式**：`'M-D'`（月-日），用于自动判断 today/done/soon/later
- `today` — 日期 = 今天
- `done` — 日期 < 今天（自动加 ✓）
- `soon` — 日期 > 今天 且 距离 ≤ 3 天
- `later` — 日期 > 今天 且 距离 > 3 天
- `'post'` — 始终显示 later（用于"发布后"类节点）

### Gantt 甘特图

```javascript
// 日期范围（只支持同一年内的整数日期）
ganttStart: 7,    // 4月7日
ganttEnd:   22,   // 4月22日

// 类型 → 颜色/标签映射
ganttColorMap: {
  ix:   { label: '交互', cls: 'ix' },
  vis:  { label: '视觉', cls: 'vis' },
  tool: { label: '工具', cls: 'tool' }
},

// 数据：[模块名, [{t:类型, f:起始日, to:结束日}, ...]]
gantt: [
  ['首页',    [{t:'vis',  f:9, to:10}]],
  ['影视译制', [{t:'ix',   f:7, to:9 }, {t:'vis', f:9, to:10}]],
  ['直播剪辑', [{t:'ix',   f:7, to:10},{t:'vis', f:11,to:13}]],
  // ...
]
```

### Todo 待办清单

```javascript
todos: [
  {
    period: '4.07 — 4.11 第一周',   // 分组标题
    count: 9,                        // 显示在标签上
    items: [
      { text: '影视译制交互稿（4.09）', tag: 'ix',     done: true  },
      { text: '启动用户测试策划',        tag: 'plan',   done: false }
    ]
  }
]
```

**tag 类型**：`ix`(交互) / `vis`(视觉) / `plan`(规划) / `collab`(协作) / `tool`(工具)

### Extras 区域

```javascript
extras: {
  testing: {
    label: '用户测试',
    content: '<strong>4.14</strong> ...'    // 可含 HTML
  },
  status: {
    label: '当前状态',
    type: 'ok',                            // 颜色：空='' / 'ok'='绿' / 'info'='蓝' / 'warn'='黄'
    content: '...'
  },
  tracking: {
    label: '埋点规划',
    content: '...'
  }
}
```

---

## 页面结构

```
┌─────────────────────────────────────────────────────────┐
│  Hero 区域                                                 │
│  · 状态 Badge  · 项目名称  · 阶段说明  · 时间范围           │
├─────────────────────────────────────────────────────────┤
│  Overview 四宫格                                            │
│  [4.13 交互稿] [4.14 视觉稿] [4.18 测试] [5月底 发布]      │
├─────────────────────────────────────────────────────────┤
│  01 Key Nodes — 关键节点                                   │
│  · 时间轴 + 彩色圆点连线                                    │
│  · 点击展开详情，自动标注 today/done/soon/later chip        │
├─────────────────────────────────────────────────────────┤
│  02 Gantt — 排期甘特图                                     │
│  · 蓝色=交互 紫色=视觉 绿色=工具                           │
│  · 红色竖线=今日线                                         │
├─────────────────────────────────────────────────────────┤
│  03 To-Do — 待办清单                                       │
│  · 按周分组 · checkbox 切换 done                           │
├─────────────────────────────────────────────────────────┤
│  04 Extras — 测试 & 埋点 Callout                           │
└─────────────────────────────────────────────────────────┘
```

---

## 纯 HTML 使用（无需 JS 配置）

如果不引入 `project-timeline-data.js` 和 `render-from-config.js`，页面会保留 HTML 中的原始内容（也是 Tideo 项目数据）。

这适合：
- 想保留现成内容作为参考直接复制使用
- 想在 HTML 内联数据做小幅修改

---

## CSS 设计规范

参考 `references/timeline-css.md`

核心 CSS 变量：
```css
--bg:#fff; --bg-2:#f8f9fb; --bg-3:#f1f3f6;
--border:#e5e7eb;
--text:#1a1a2e; --text-2:#4b5563; --text-3:#9ca3af;
--blue:#2563eb; --purple:#7c3aed; --rose:#e94560;
--green:#059669; --amber:#d97706; --cyan:#0891b2;
--font:'Noto Sans SC', sans-serif;
--font-display:'Noto Serif SC', serif;
--mono:'JetBrains Mono', monospace;
--max-w:820px;
```

---

## 发布到 GitHub

```bash
cd ~/.codebuddy/skills/tideo-project-timeline
git init
git add .
git commit -m "feat: tideo-project-timeline v2 data-driven"
git remote add origin https://github.com/YOUR_USERNAME/tideo-project-timeline.git
git push -u origin main
```
