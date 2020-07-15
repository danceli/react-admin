import Loading from '@/components/loading/';
import Loadable from 'react-loadable';

const Home=Loadable({loader:()=>import('@/views/home/'),loading:Loading});
const Doc = Loadable({loader: () => import(/*webpackChunkName:'Doc'*/'@/views/doc'),loading: Loading});
const Guide = Loadable({loader: () => import(/*webpackChunkName:'Guide'*/'@/views/guide'),loading: Loading});
const Explanation = Loadable({loader: () => import(/*webpackChunkName:'Explanation'*/'@/views/permission'),loading: Loading});
const AdminPage = Loadable({loader: () => import(/*webpackChunkName:'AdminPage'*/'@/views/permission/adminPage/'),loading: Loading});
const GuestPage = Loadable({loader: () => import(/*webpackChunkName:'GuestPage'*/'@/views/permission/notAdminPage/'),loading: Loading});
const RichTextEditor = Loadable({loader: () => import(/*webpackChunkName:'RichTextEditor'*/'@/views/components-demo/richTextEditor'),loading: Loading});
const Markdown = Loadable({loader: () => import(/*webpackChunkName:'Markdown'*/'@/views/components-demo/Markdown'),loading: Loading});
const Draggable = Loadable({loader: () => import(/*webpackChunkName:'Draggable'*/'@/views/components-demo/draggable'),loading: Loading});
const KeyboardChart = Loadable({loader: () => import(/*webpackChunkName:'KeyboardChart'*/'@/views/charts/keyboard'),loading: Loading});
const LineChart = Loadable({loader: () => import(/*webpackChunkName:'LineChart'*/'@/views/charts/line'),loading: Loading});
const MixChart = Loadable({loader: () => import(/*webpackChunkName:'MixChart'*/'@/views/charts/mixChart'),loading: Loading});
const Menu1_1 = Loadable({loader: () => import(/*webpackChunkName:'Menu1_1'*/'@/views/nested/menu1/menu1-1'),loading: Loading});
const Menu1_2_1 = Loadable({loader: () => import(/*webpackChunkName:'Menu1_2_1'*/'@/views/nested/menu1/menu1-2/menu1-2-1'),loading: Loading});
const Table = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/table'),loading: Loading});
const ExportExcel = Loadable({loader: () => import(/*webpackChunkName:'ExportExcel'*/'@/views/excel/exportExcel'),loading: Loading});
const UploadExcel = Loadable({ loader: () => import(/*webpackChunkName:'UploadExcel'*/'@/views/excel/uploadExcel'),loading: Loading });
const Zip = Loadable({loader: () => import(/*webpackChunkName:'Zip'*/'@/views/zip'),loading: Loading});
const Clipboard = Loadable({loader: () => import(/*webpackChunkName:'Clipboard'*/'@/views/clipboard'),loading: Loading});
const Error404 = Loadable({loader: () => import(/*webpackChunkName:'Error404'*/'@/views/error/404'),loading: Loading});
const User = Loadable({loader: () => import(/*webpackChunkName:'User'*/'@/views/user'),loading: Loading});
const About = Loadable({loader: () => import(/*webpackChunkName:'About'*/'@/views/about'),loading: Loading});

export default [
  { path: "/home", component: Home, requiresAuth: true },
  { path: "/doc", component: Doc, requiresAuth: true },
  { path: "/guide", component: Guide,requiresAuth: true },
  { path: "/permission/explanation", component: Explanation,requiresAuth: true},
  { path: "/permission/adminPage", component: AdminPage, requiresAuth: true },
  { path: "/permission/notAdminPage", component: GuestPage, requiresAuth: true },
  { path: "/components/richTextEditor", component: RichTextEditor, requiresAuth: true },
  { path: "/components/Markdown", component: Markdown, requiresAuth: true },
  { path: "/components/draggable", component: Draggable, requiresAuth: true },
  { path: "/charts/keyboard", component: KeyboardChart, requiresAuth: true },
  { path: "/charts/line", component: LineChart, requiresAuth: true },
  { path: "/charts/mix-chart", component: MixChart, requiresAuth: true },
  { path: "/nested/menu1/menu1-1", component: Menu1_1, requiresAuth: true },
  { path: "/nested/menu1/menu1-2/menu1-2-1", component: Menu1_2_1, requiresAuth: true },
  { path: "/table", component: Table, requiresAuth: true },
  { path: "/excel/export", component: ExportExcel, requiresAuth: true },
  { path: "/excel/upload", component: UploadExcel, requiresAuth: true },
  { path: "/zip", component: Zip, requiresAuth: true },
  { path: "/clipboard", component: Clipboard, requiresAuth: true },
  { path: "/user", component: User, requiresAuth: true },
  { path: "/about", component: About, requiresAuth: true },
  { path: "/error/404", component: Error404 },
];
