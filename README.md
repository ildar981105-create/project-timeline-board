# tideo-project-timeline

数据驱动的项目时间线看板，只需修改配置即可适用于任何项目。

## 文件结构

```
assets/
├── project-timeline.html     # 页面（纯渲染引擎）
├── project-timeline-data.js  # 项目数据配置（你只需改这个）
└── render-from-config.js     # 渲染引擎（一般不需修改）
```

## 快速使用

1. 复制 `project-timeline.html` 和 `project-timeline-data.js` 到你的项目
2. 打开 `project-timeline-data.js`，修改 `PROJECT_CONFIG` 中的所有数据
3. 用浏览器打开 `project-timeline.html`

## 配置项（PROJECT_CONFIG）

```javascript
const PROJECT_CONFIG = {
  title: '项目名称',
  phase: '进行中',           // 进行中 / 已完成 / 规划中
  phaseColor: 'green',
  startMonth: '3月',
  endMonth: '6月',
  totalWeeks: 14,
  todayMonthDay: '4.17',     // 自动标注 today/done/soon/later 状态

  overview: [                // 四宫格关键日期
    { date:'3.10', label:'需求冻结', color:'blue' },
    { date:'3.24', label:'交互完成', color:'purple' },
    { date:'4.7', label:'视觉完成', color:'pink' },
    { date:'4.20', label:'发布上线', color:'orange' }
  ],

  keyNodes: [                // 可折叠时间轴节点
    { date:'3.4', title:'Kickoff', detail:[], color:'blue', chip:'done' },
    { date:'3.10', title:'需求评审', detail:['PRD对齐','技术方案'], color:'blue', chip:'done' }
    // ...
  ],

  gantt: [                   // 甘特图数据
    ['首页', [{t:'ix',f:3.1,to:3.8}, {t:'ui',f:3.8,to:4.2}]],
    ['视频译制', [{t:'ix',f:3.5,to:4.1}, {t:'ui',f:4.1,to:4.5}]]
    // ...
  ],

  todos: [                   // 按周分组的待办清单
    { week:'第一周', items:[
      { text:'完成 PRD', tag:'plan' },
      { text:'技术方案评审', tag:'done' }
    ]}
    // ...
  ],

  callouts: [                // 2×2 关注事项
    { title:'风险', content:'依赖 SCF 上线时间', icon:'⚠' },
    { title:'例外', content:'设计资源紧张', icon:'!' }
  ]
};
```

## 甘特图类型说明

| 类型 | 说明 |
|------|------|
| `ix` | 交互设计 |
| `ui` | UI 设计 |
| `fe` | 前端开发 |
| `be` | 后端开发 |
| `test` | 测试 |
| `deploy` | 部署 |

## 自动状态标注

JS 会根据 `todayMonthDay` 自动判断每个 chip 的状态：
- `chip:'done'` → 绿色
- `chip:'today'` → 红色
- `chip:'soon'` → 黄色（未来 7 天内）
- `chip:'later'` → 灰色
