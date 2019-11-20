import Loading from '../component/Loading'
import LoadingPage from '../page/dome/loading.jsx'
import UI from '../page/UI'

const Home = Loading(() => import('../page/home'))
const Swiper = Loading(() => import('../page/swiper'))
const Echarts_China = Loading(() => import('../page/chart/echarts_China'))
const Draw = Loading(() => import('../page/chart/Draw_Galaxy'))
const BasicAnimation = Loading(() => import('../page/Animation/BasicAnimation'))

export default {
    Home,
    Swiper,
    Echarts_China,
    Draw,
    LoadingPage,
    Bottons: UI.Buttons,
    Icons: UI.Icons,
    Dropdown: UI.Dropdown,
    Comment: UI.Comment,
    PageHeader: UI.PageHeader,
    Steps: UI.Steps,
    Tabs: UI.Tabs,
    Editor: UI.Editor,
    Drag: UI.Drag,
    BasicAnimation
}
