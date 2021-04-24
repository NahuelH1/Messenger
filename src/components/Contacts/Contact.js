import react from 'react'
import './styles/Contact.css'
import Imagen from '../../images/user_profile.jpg'
import {Link} from 'react-router-dom'

const Contact = (prop)=>
{
        return (
         <Link style={{textDecoration: 'none'}}
             to={ 
                    {pathname:"/loged/chat", 
                    state: {
                             hisID: prop.id
                             }
                     }}   id ={prop.key} className="user">
           <img className="user__photo" alt="FotosPerfil" src={Imagen} width="50"/>
           <div className="user__text">
           <h5 className="user__name">{prop.userName}</h5>
           </div>
         </Link> 
       )
}

export default Contact