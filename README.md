# Yin Yiguo personal homepage

一个简约的中文个人静态主页，使用 Vite + 原生 JavaScript 构建。

网页作者、内容提供者及版权所有者：尹伊果本人。

## 本地实时预览

1. 安装 Node.js 18+。
2. 在项目目录执行 `npm install`，安装 Vite。
3. 执行 `npm run dev`。
4. 打开终端显示的本地地址（通常是 `http://localhost:5173`）。修改 `src/` 内的文件后，浏览器会自动刷新。

常用命令：

- `npm run build`：生成生产版本到 `dist/`。
- `npm run preview`：预览生产版本。

## 快速替换内容

- 尹伊果的个人资料、经历、档案和照片配置：编辑 `src/data.js`。
- 当前页面和数据文件均使用中文。
- 页面结构与顶部导航 hash 路由：编辑 `src/main.js`。当前导航页面为 `#home`、`#about`、`#info`、`#photos`。
- 颜色、排版、响应式布局和照片墙占位背景：编辑 `src/styles.css`。
- 头像默认读取 `public/images/yin-yiguo/avatar/home/` 或 `public/images/yin-yiguo/avatar/overview/` 下配置的图片；如果图片缺失，会回退到姓名缩写占位。
- 每位成员都有独立素材目录：`public/images/<member-id>/`。
- 尹伊果头像分别放在 `public/images/yin-yiguo/avatar/home/` 和 `public/images/yin-yiguo/avatar/overview/`：每个文件夹中 `1.*` 为默认显示，`2.*` 为鼠标悬停时显示；具体路径在 `src/data.js` 的 `media.avatar` 中配置。
- 个人信息页档案图片放在 `public/images/<member-id>/credentials/`：现在固定为四类，依次是 1. 身份信息 2. 学籍信息 3. 工作信息 4. 社交媒体。每类图片按 `1-1`、`1-2`、`2-1`、`2-2` 这样的编号方式命名，并在 `src/data.js` 的对应分类 `images` 数组中控制顺序。
- 照片墙图片放在 `public/images/<member-id>/photos/`：按 `src/data.js` 的 `media.photoFiles` 顺序显示。照片流为三行 justified gallery：每行从右向左循环，图片宽度随原始宽高比动态变化，行间距和卡片间距保持一致；鼠标悬停时暂停。
- 当前站点不再显示语言切换按钮，页面固定为中文。

当前主页为尹伊果个人站，直接刷新 `#home`、`#about`、`#info`、`#photos` 任一路由都可以访问对应静态状态。
