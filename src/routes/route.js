import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import Profile from '../pages/Profile/Profile'
import Contact from '../pages/Contact/Contact'
import ProductDetail from '../pages/ProductDetail/ProductDetail'

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/products', component: Products, layout: Products},
    {path: '/profile', component: Profile, layout: Profile},
    {path: '/contact', component: Contact, layout: Contact},
    {path: '/products/:productID', component: ProductDetail, layout: ProductDetail},
]

export {publicRoutes}
