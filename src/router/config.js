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
            { key: '/ui/buttons', title: '按钮', component: 'Buttons' },
            { key: '/ui/icons', title: '图标', component: 'Icons' },
            { key: '/ui/spins', title: '加载中', component: 'Spins' },
            { key: '/ui/modals', title: '对话框', component: 'Modals' },
            { key: '/ui/notifications', title: '通知提醒框', component: 'Notifications' },
            { key: '/ui/tabs', title: '标签页', component: 'Tabs' },
            { key: '/ui/banners', title: '轮播图', component: 'Banners' },
            { key: '/ui/wysiwyg', title: '富文本', component: 'WysiwygBundle' },
            { key: '/ui/drags', title: '拖拽', component: 'Drags' },
            { key: '/ui/gallery', title: '画廊', component: 'Gallery' },
            { key: '/ui/map', title: '地图', component: 'MapUi' },
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
                component: 'BasicAnimations',
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
    },
    {
        key: '/extension',
        title: '功能扩展',
        icon: 'bars',
        subs: [
            {
                key: '/extension/queryParams',
                title: '问号形式参数',
                component: 'QueryParams',
                query: '?param1=1&param2=2',
            },
        ],
    }
];

export default Menu;
