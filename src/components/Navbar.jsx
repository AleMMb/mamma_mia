import { NavLink } from 'react-router-dom'


function Navbar() {

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'notActive')

  return (
      <div className="nav_bar">
        <NavLink className={setActiveClass} id="nav_brand"  to='/'>
          <img src="/pizza.svg" alt="" />
          <h4 className="text-xl">Mamma Mia!</h4>
        </NavLink>
        <NavLink className={setActiveClass} to='/carrito'>
        <div className="cart_info">
          <img src="/cart.svg" alt="carro de compras" />
          <span>$</span>
        </div>
        </NavLink>
      </div>
  )
}
export default Navbar