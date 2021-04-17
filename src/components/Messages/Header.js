import react from 'react'
import lupa from '../../images/lupa.png'
import './styles/Header.css'
class Header extends react.Component
{
    render()
    {
       return (
           <header>
               
            <h2>Messages</h2>

            <div className="seach_message">
                <img src={lupa} width="24"></img>
            </div>

           </header>
       )
    }
}

export default Header