import react from 'react'
import lupa from '../images/lupa.png'
import './styles/Header.css'

const Header = (prop) =>
{
       return (
           
            <header>
            <h2>{prop.children}</h2>
            <div className="seach_message">
                <img src={lupa} width="24"></img>
            </div>
           </header>
       )
}

export default Header