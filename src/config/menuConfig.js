
// icon是菜单栏
// requiresAuth是否需要超级管理员admin

const menuList=[
  {
    title:'首页',
    path:'/home',
    icon:'icon-cangkucunchu',
    requiresAuth:false
  },
  {
    title: "开发文档",
    path: "/doc",
    icon: "icon-wendang",
    requiresAuth:false
  },
  {
    title: "引导页",
    path: "/guide",
    icon: "icon-chakanchaosong",
    requiresAuth:false
  },
  {
    title: "权限测试",
    path: "/permission",
    icon: "icon-suodingi",
    children: [
      {
        title: "权限说明",
        path: "/permission/explanation",
        requiresAuth:true
      },
      {
        title: "admin页面",
        path: "/permission/adminPage",
        requiresAuth:true
      },
      {
        title: "guest页面",
        path: "/permission/notAdminPage",
        requiresAuth:false
      },
    ],
  },
  {
    title: "组件",
    path: "/components",
    icon: "icon-gongnengjiaosequanxianguanli",
    requiresAuth:false,
    children: [
      {
        title: "富文本",
        path: "/components/richTextEditor",
        requiresAuth:false
      },
      {
        title: "Markdown",
        path: "/components/Markdown",
        requiresAuth:false
      },
      {
        title: "拖拽列表",
        path: "/components/draggable",
        requiresAuth:false
      },
    ],
  },
  {
    title: "图表",
    path: "/charts",
    icon: "icon-tubiao",
    requiresAuth:false,
    children: [
      {
        title: "键盘图表",
        path: "/charts/keyboard",
        requiresAuth:false
      },
      {
        title: "折线图",
        path: "/charts/line",
        requiresAuth:false
      },
      {
        title: "混合图表",
        path: "/charts/mix-chart",
        requiresAuth:false
      },
    ],
  },
  {
    title: "路由嵌套",
    path: "/nested",
    icon: "icon-luyou",
    requiresAuth:false,
    children: [
      {
        title: "菜单1",
        path: "/nested/menu1",
        children: [
          {
            title: "菜单1-1",
            path: "/nested/menu1/menu1-1",
            requiresAuth:false
          },
          {
            title: "菜单1-2",
            path: "/nested/menu1/menu1-2",
            children: [
              {
                title: "菜单1-2-1",
                path: "/nested/menu1/menu1-2/menu1-2-1",
                requiresAuth:false
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "表格",
    path: "/table",
    icon: "icon-biaoge",
    requiresAuth:false
  },
  {
    title: "Excel",
    path: "/excel",
    icon: "icon-excel",
    requiresAuth:false,
    children: [
      {
        title: "导出Excel",
        path: "/excel/export",
        requiresAuth:false
      },
      {
        title: "上传Excel",
        path: "/excel/upload",
        requiresAuth:false
      }
    ],
  },
  {
    title: "Zip",
    path: "/zip",
    icon: "icon-yasuo",
    requiresAuth:false
  },
  {
    title: "剪贴板",
    path: "/clipboard",
    icon: "icon-niantie",
    requiresAuth:false
  },
  {
    title: "用户管理",
    path: "/user",
    icon: "icon-shujujiaosequanxianguanli",
    requiresAuth:true
  },
  {
    title: "关于作者",
    path: "/about",
    icon: "icon-wodezhanghu",
    requiresAuth:false
  },
]
export default menuList;
