const Menu = [
    // 菜单相关路由
    {
        key: '/', title: '首页', icon: 'mobile', component: 'Home'
    },
    {
        key: '/ui',
        title: 'UI',
        icon: 'scan',
        subs: [
            { key: '/ui/buttons', title: '按钮', component: 'Bottons' },
            { key: '/ui/icons', title: '图标', component: 'Icons' },
            { key: '/ui/dropdown', title: '下拉菜单', component: 'Dropdown' },
            { key: '/ui/comment', title: '对话框', component: 'Comment' },
            { key: '/ui/pageHeader', title: '页头', component: 'PageHeader' },
            { key: '/ui/steps', title: '步骤条', component: 'Steps' },
            { key: '/ui/tab', title: '标签', component: 'Tabs' },
            { key: '/ui/Editor', title: '富文本', component: 'Editor' },
            { key: '/ui/drag', title: '拖拽', component: 'Drag' },
        ],
    },
    {
        key: '/animation',
        title: '动画',
        icon: 'rocket',
        subs: [
            {
                key: '/animation/basicAnimations',
                title: '基础动画',
                component: 'BasicAnimation',
            },
            {
                key: '/animation/exampleAnimations',
                title: '动画案例',
                component: 'ExampleAnimations',
            },
        ],
    },
    {
        key: '/table',
        title: '表格',
        icon: 'copy',
        subs: [
            { key: '/table/basicTable', title: '基础表格', component: 'BasicTable' },
            { key: '/table/advancedTable', title: '高级表格', component: 'AdvancedTable' },
            {
                key: '/table/asynchronousTable',
                title: '异步表格',
                component: 'AsynchronousTable',
            },
        ],
    },
    {
        key: '/form',
        title: '表单',
        icon: 'edit',
        subs: [{ key: '/form/basicForm', title: '基础表单', component: 'BasicForm' }],
    },
    {
        key: '/chart',
        title: '图表',
        icon: 'area-chart',
        subs: [
            { key: '/chart/echarts', title: 'echarts', component: 'Echarts_China' },
            { key: '/chart/Draw', title: '绘制', component: 'Draw' },
        ],
    },
    {
        key: '/demo',
        title: '演示',
        icon: 'safety',
        subs: [
            { key: '/demo/loading', title: '加载动画', component: 'LoadingPage' },
            {
                key: '/demo/routerEnter',
                title: '路由拦截',
                component: 'RouterEnter'
            },
        ],
    },
    {
        key: '/swiper',
        title: '轮播图',
        icon: 'star',
        component: 'Swiper',
        auth: true
    }
];

export default Menu;
