import Loading from '../component/Loading'
import LoadingPage from '@/page/Dome/Loading'
import UI from '@/page/UI'

const Home = Loading(() => import('@/page/Home'))
const Swiper = Loading(() => import('@/page/Swiper'))
const Echarts_China = Loading(() => import('@/page/Chart/echarts_China'))
const Draw = Loading(() => import('@/page/Chart/Draw_Galaxy'))

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
    Drag: UI.Drag
}
