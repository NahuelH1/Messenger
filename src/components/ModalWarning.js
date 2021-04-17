import ReactDOM from 'react-dom'
import './styles/ModalWarning.css'

function ModalWarning(prop)
{
   if(!prop.isOpen)
   {
      return null
   }
   return ReactDOM.createPortal(
        <div className="Modal">
           <div className="Modal__container">
              <h4>{prop.title}</h4>
              <p>{prop.children}</p>
              <button className="Modal__close-button" onClick={prop.handleClick}>close</button>
              <button className="Modal__login-button" onClick={prop.handleClick}>Login</button>

           </div>
        </div>
        ,
        document.getElementById("modal")
        )
}

export default ModalWarning;



















     