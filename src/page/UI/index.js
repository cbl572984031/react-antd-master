import Loading from '../../component/Loading'

const Buttons = Loading(() => import('./Buttons'))
const Icons = Loading(() => import('./Icons'))
const Dropdown = Loading(() => import('./Dropdown'))
const Comment = Loading(() => import('./Comment'))
const PageHeader = Loading(() => import('./PageHeader'))
const Steps = Loading(() => import('./Steps'))
const Tabs = Loading(() => import('./Tabs'))
const Editor = Loading(() => import('./Editor'))
const Drag = Loading(() => import('./Drag'))

export default {
    Buttons,
    Icons,
    Dropdown,
    Comment,
    PageHeader,
    Steps,
    Tabs,
    Editor,
    Drag
}