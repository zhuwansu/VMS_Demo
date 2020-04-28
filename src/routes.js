import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import A from './views/nav1/A.vue'
import B from './views/nav1/B.vue'
import C from './views/nav1/C.vue'
import D from './views/nav1/D.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import mainTable from './views/nssb/mainTable.vue'
import table1 from './views/nssb/table1.vue'
import table2 from './views/nssb/table2.vue'
import table3 from './views/nssb/table3.vue'
import table4 from './views/nssb/table4.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '纳税申报',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/t1', component: mainTable, name: '主表' },
            { path: '/t2', component: table1, name: '附表一' },
            { path: '/t3', component: table2, name: '附表二' },
            { path: '/t4', component: table3, name: '附表三' },
            { path: '/t5', component: table4, name: '附表四' },
        ]
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '规则管理与原始数据',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/A', component: A, name: '销项涉税规则维护' },
            { path: '/B', component: B, name: '涉税规则与计税要素匹配' },
            { path: '/C', component: C, name: '销售交易接口表' },
            { path: '/D', component: D, name: '销售交易匹配结果表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '销项管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/E', component: Page4, name: '销项发票取数台账' } 
        ]
    },
    {
        path: '/',
        component: Home,
        name: '未开票收入汇总底稿',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/F', component: Page4, name: '已发生纳税义务但未开票收入台账' } ,
            { path: '/G', component: Page4, name: '前期已申报当期开票收入台账' } ,
            { path: '/H', component: Page4, name: '视同销售台账' } ,
        ]
    },
    {
        path: '/',
        component: Home,
        name: '一般计税收入汇总底稿',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/j', component: Page4, name: '纳税检查调整一般计税收入台账' } ,
        ]
    },
    {
        path: '/',
        component: Home,
        name: '税收优惠台账',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/k', component: Page4, name: '免税项目台账' } ,
            { path: '/l', component: Page4, name: '金融商品转让台账' } ,
            { path: '/z', component: Page4, name: '减税明细管理台账' } ,
            { path: '/x', component: Page4, name: '免税明细管理台账' } ,
        ]
    },
    {
        path: '/',
        component: Home,
        name: '进项税管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/c', component: Page4, name: '增值税专用发票台账' } ,
            { path: '/v', component: Page4, name: '海关进口增值税专用缴款书台账' } ,
            { path: '/b', component: Page4, name: '道路、桥、闸通行费抵扣凭证台账' } ,
            { path: '/n', component: Page4, name: '代扣代缴税收缴款凭证台账' } ,
            { path: '/m', component: Page4, name: '农产品收购发票或销售发票台账' } ,
            { path: '/q', component: Page4, name: '加计扣除农产品进项税额台账' } ,
            { path: '/w', component: Page4, name: '购建不动产专用发票' } ,
            { path: '/e', component: Page4, name: '从不可抵扣项目改为可抵扣项目台账（不含不动产）' } ,
        ]
    },
    {
        path: '/',
        component: Home,
        name: '进项税转出管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/r', component: Page4, name: '进项税额转出汇总底稿',children:[
                { path: '/t', component: Page4, name: '用于集体福利、个人消费台账' } ,
                { path: '/y', component: Page4, name: '非正常损失进项转出台账' } ,
                { path: '/u', component: Page4, name: '免税项目进项转出台账' } ,
                { path: '/i', component: Page4, name: '简易计税方法进项转出台账' } ,
                { path: '/o', component: Page4, name: '纳税检查调减进项税额台账' } ,
                { path: '/aa', component: Page4, name: '红字专用发票信息表注明的进项税额台账' } ,
                { path: '/ss', component: Page4, name: '其他应作进项税额转出的情形台账' } ,
            ] } ,
            { path: '/dd', component: Page4, name: '从可抵扣项目改为不可抵扣项目汇总底稿（不含不动产）',children:[
                { path: '/ff', component: Page4, name: '从可抵扣项目改为不可抵扣项目台账（不含不动产）' } ,
            ] } ,
            { path: '/gg', component: Page4, name: '从可抵扣项目改为不可抵扣项目汇总底稿（不动产）',children:[
                { path: '/hh', component: Page4, name: '从可抵扣项目改为不可抵扣项目台账（不动产）' } ,
            ] } ,
        ]
    },
    {
        path: '/',
        component: Home,
        name: '税额抵减管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/qq', component: Page4, name: '增值税税控系统专用设备费台账' } ,
            { path: '/ww', component: Page4, name: '增值税税控系统技术维护费台账' } ,
            { path: '/ee', component: Page4, name: '分支机构预征缴纳税款台账' } ,
            { path: '/rr', component: Page4, name: '建筑服务预征缴纳税款台账' } ,
            { path: '/tt', component: Page4, name: '销售不动产预征缴纳税款台账' } ,
            { path: '/yy', component: Page4, name: '出租不动产预征缴纳税款台账' } ,
        ]
    },
    {
        path: '/',
        component: Home,
        name: '不动产分期抵扣管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/zz', component: Page4, name: '购建不动产专用发票' } ,
            { path: '/xx', component: Page4, name: '销售分期抵扣中的不动产台账' } ,
            { path: '/cc', component: Page4, name: '从不可抵扣项目改为可抵扣项目台账（不动产）' } ,
            { path: '/vv', component: Page4, name: '前期购入并全额抵扣货物、服务转用于不动产台账' } ,
        ]
    },
    {
        path: '/',
        component: Home,
        name: '代扣代缴业务管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/vvv', component: Page4, name: '扣缴义务人信息维护' } ,
            { path: '/ccc', component: Page4, name: '非居民企业信息维护' } ,
            { path: '/xxx', component: Page4, name: '非贸付汇合同基本信息管理' } ,
            { path: '/zzz', component: Page4, name: '代扣代缴支付台账管理' } ,
            { path: '/aaa', component: Page4, name: '代缴代缴申报管理' } ,
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
