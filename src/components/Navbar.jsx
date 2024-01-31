import { NavLink } from 'react-router-dom'
import logo from "../icons/vite_5-main.jpeg"
import { useSelector } from 'react-redux'
import "../App.css"


const Navbar = () => {
  const productData = useSelector(state => state.stateCount.count)

    const click = () => {
        location.reload(true)
    }


  return (
    <nav>
      <ul>
        <li>
            <NavLink to="/" className="navbar-link">Магазин</NavLink>
        </li>
        <li>
            <NavLink to="/basket" className="navbar-link">Корзина</NavLink>
        </li>
      </ul>
      <div className='li'>&#128722; {productData}</div>
      <img onClick={click} src={logo} alt="mem veka)" className="logo" />
    </nav>
  )
}

export default Navbar