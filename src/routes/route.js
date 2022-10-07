import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import Profile from '../pages/Profile/Profile'
import Feed from '../pages/Feed/Feed'
import Contact from '../pages/Contact/Contact'
import Viewmore from '../pages/ViewMore/Viewmore'
import ProductDetail from '../pages/ProductDetail/ProductDetail'

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/products', component: Products, layout: Products},
    {path: '/profile', component: Profile, layout: Profile},
    {path: '/feed', component: Feed, layout: Feed},
    {path: '/contact', component: Contact, layout: Contact},
    {path: '/view-more', component: Viewmore, layout: Viewmore},
    {path: '/products/:productID', component: ProductDetail, layout: ProductDetail},
]

export {publicRoutes}
