import Products from './pages/Products'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import SignIn from './pages/SignIn'

const routes = [
  {
    path: '/login',
    component: SignIn,
  },
  {
    path: '/produtos',
    component: Products,
    title: 'Produtos',
    subtitle: 'Tabela com os produtos cadastrados no sistema',
  },
  {
    path: '/carrinho',
    component: Cart,
    title: 'Carrinho',
    subtitle: 'Tabela com os produtos cadastrados no carrinho',
  },
  {
    path: '/compras',
    component: Purchases,
    title: 'Compras',
    subtitle: 'Tabela com o histórico de compras do usuário no sistema',
  },
]

export default routes
