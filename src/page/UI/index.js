import Loading from '@/component/Loading'

const Buttons = Loading(() => import('./Buttons'))
const Icons = Loading(() => import('./Icons'))

export default {
    Buttons,
    Icons
}