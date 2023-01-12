import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import PizzasContext from '../context/PizzasContext'


function Navbar() {

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'notActive')

  const { carrito } = useContext(PizzasContext)
    const total = carrito.reduce(
        (a, { count, price }) => a + price * count, 0)

  return (
      <div className="nav_bar">
        <NavLink className={setActiveClass} id="nav_brand"  to='/'>
          <img src="/pizza.svg" alt="logo pizza" />
          <h4 className="text-xl">Mamma Mia!</h4>
        </NavLink>
        <NavLink className={setActiveClass} to='/Carrito'>
        <div className="cart_info">
          <img src="/cart.svg" alt="carro de compras" />
          <span>${total}</span>
        </div>
        </NavLink>
      </div>
  )
}
export default Navbar