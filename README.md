# Flow｜312 心理学单机复习冒险

一款面向 312 心理学强化阶段的中英双语、单人、离线优先 PWA。首案《错位的学者档案》把理论沿革、实验设计、人物辨析与 1/3/7 天复习调度编成一段 15–20 分钟的调查故事。

## 已实现

- 16 个计分节点，每节点 3 个预制双语变式，共 48 题；答错会给出人物—理论—证据链并在本局稍后重测。
- 普通、社会、发展、教育、实验、统计、测量七个模块；120 位规范人物档案，人物身份与贡献关系分开建模。
- 12 条“提出—局限—修正/扩展/替代”理论演进故事；6 份九阶段实验手账，覆盖问题、假设、操作化、变量、障碍、修正、结果、边界与伦理。
- IndexedDB 本机存档、四级箱式调度、卡牌解锁、到期复习、校验后覆盖恢复与版本迁移。
- iPhone/Android 竖屏优先与 macOS 宽屏布局；触控、键鼠、减少动态和静音设置。
- 原创视觉、程序化 Web Audio 环境声与静态 PWA；不依赖账号、后端或运行时出题。

## 本地运行

要求 Node.js 22.13 或更新版本。

```bash
npm install
npm run dev
```

默认开发地址为 `http://localhost:3000/`。生产检查：

```bash
npm run typecheck
npm test
npm run lint
npm run build
```

静态产物固定写入 `dist/`。`NEXT_PUBLIC_BASE_PATH` 可在构建时指定子路径；GitHub Pages 工作流会按仓库名自动设置。

`npm run build:sites` 仅供账户私有的 Sites HTTPS 预览打包；默认交付与持续部署仍使用上面的静态构建。

## 内容与存档

- `content/`：人物、关系、题目、理论演进、实验手账、来源与授权登记。
- `src/`：应用、内容/存档类型、IndexedDB、复习调度与声音逻辑。
- `public/`：PWA manifest、service worker 与原创运行时素材。
- `tests/`：内容完整性、七科覆盖、调度、迁移、损坏备份拒绝及 PWA 静态契约。
- `scripts/`：只处理项目内构建产物的可重复维护脚本。

外部 2026 考纲结构文件仅作为只读范围基线，未复制进构建产物，也未被修改。2027 官方版发布后，应先更新 `content/provenance.ts` 的审计记录，再逐条复核差异。

## 部署

推送 `main` 后，`.github/workflows/deploy-pages.yml` 会执行类型检查、测试和静态构建，再发布 `dist/` 到 GitHub Pages。首次在线完整加载后，service worker 会缓存应用壳、哈希脚本、样式和原创素材，供后续离线启动。

素材与第三方依赖说明见 [`content/ASSET_LICENSES.md`](content/ASSET_LICENSES.md)。
