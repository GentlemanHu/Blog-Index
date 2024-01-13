const WEBSITE_SORTS: WebsiteSort[] = [
  {id: 1, title: "我的"},
  {id: 2, title: "管理"},
  {id: 3, title: "AI&GPT"},
  {id: 4, title: "Subtle"},
];

const WEBSITE_ITEMS: WebsiteItem[] = [
    {
      sortId: 1,
      title: "我的博客",
      description: "GodLin’s Blog",
      url: "https://crushing.xyz",
      icon: "https://img.icons8.com/glyph-neue/128/the-flash-head.png"
    },
    {
      sortId: 1,
      title: "笔记本",
      description: "Jupyter Lab",
      url: "https://jupyter.crushing.xyz",
      icon: "https://img.icons8.com/nolan/96/spiral-bound-booklet.png"
    },
    {
      sortId: 1,
      title: "书库",
      description: "Calibre-Web Library",
      url: "https://store.crushing.xyz",
      icon: "https://img.icons8.com/nolan/96/library.png"
    },
    {
      sortId: 2,
      title: "服务器状态",
      description: "Status",
      url: "https://status.crushing.xyz",
      icon: "https://img.icons8.com/nolan/128/ok.png"
    },
    {
      sortId: 2,
      title: "站点状态",
      description: "UpTime",
      url: "https://up.crushing.xyz",
      icon: "https://img.icons8.com/nolan/96/monitor.png"
    },
    {
      sortId: 2,
      title: "Docker管理",
      description: "Portainer Tecent 25",
      url: "https://docker.crushing.xyz",
      icon: "https://img.icons8.com/nolan/128/docker.png"
    },
    {
      sortId: 3,
      title: "Next Chat",
      description: "Own ChatGPT",
      url: "https://gpt.crushing.xyz",
      icon: "https://img.icons8.com/nolan/128/chatgpt.png"
    },
    {
      sortId: 3,
      title: "ComfyUI Remote",
      description: "ComyUI",
      url: "https://comfy.crushing.xyz",
      icon: "https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/external-Painter-carpentry-tools-icongeek26-outline-colour-icongeek26.png"
    },
    {
      sortId: 3,
      title: "AI 工作流",
      description: "AI Flowise",
      url: "https://aiflow.crushing.xyz",
      icon: "https://img.icons8.com/color/96/tree-structure.png"
    },
    {
      sortId: 3,
      title: "Lob Chat",
      description: "Lob Chat",
      url: "https://bot.crushing.xyz",
      icon: "https://img.icons8.com/color/96/tree-structure.png"
    },
    {
      sortId: 3,
      title: "Gemini Chat",
      description: "gemini chat",
      url: "https://gemini.crushing.xyz",
      icon: "https://img.icons8.com/color/96/tree-structure.png"
    },
    {
      sortId: 3,
      title: "Ai Web Chat",
      description: "AI web chat",
      url: "https://aiweb.crushing.xyz",
      icon: "https://img.icons8.com/color/96/tree-structure.png"
    },
    {
      sortId: 4,
      title: "WeChat Blog",
      description: "WeChat Blog",
      url: "https://ai.crushing.xyz",
      icon: "https://img.icons8.com/nolan/128/wordpress.png"
    },
    {
      sortId: 2,
      title: "FRP 面板",
      description: "Frp",
      url: "https://frp.crushing.xyz",
      icon: "https://img.icons8.com/nolan/96/speed.png"
    },
    {
      sortId: 2,
      title: "青龙 面板",
      description: "QL",
      url: "https://ql.crushing.xyz",
      icon: "https://img.icons8.com/nolan/96/control-panel.png"
    },
    {
      sortId: 1,
      title: "个人网盘集合",
      description: "Alist",
      url: "https://yun.crushing.xyz",
      icon: "https://img.icons8.com/nolan/96/cloud.png"
    },
    {
      sortId: 4,
      title: "GitHub 加速",
      description: "GitHub Proxy",
      url: "https://ghproxy.crushing.xyz",
      icon: "https://img.icons8.com/nolan/128/github.png"
    },
    {
      sortId: 4,
      title: "Docs 笔记文档",
      description: "Gitbook",
      url: "https://docs.crushing.xyz",
      icon: "https://img.icons8.com/nolan/128/google-docs.png"
    }
  ]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "主页",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://crushing.xyz",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: "https://raw.githubusercontent.com/GentlemanHu/GentlemanHu.github.io/f749d825f1f18a014803b0bb77c40e22016b18c0/img/favicon.png",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/GentlemanHu",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "豫ICP备2021003027",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * 网站分类列表
   */
  WEBSITE_SORTS,
  /**
   * 网站分类列表
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "GentlemanHu's Web Home",
    keywords: "Blog, Index, Index Page",
    description: "Personal web site stuff, self hosted",
  },
};


export default GLOBAL_CONFIG;