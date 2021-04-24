import react from 'react'
import './styles/ChatBox.css'
import Imagen from '../../images/user_profile.jpg'
import {Link} from 'react-router-dom'
class ChatBox extends react.Component
{
    render()
    {
        const {userName, idChat }  = this.props;
        return (
          <Link style={{textDecoration:'none' }} to={ 
            {pathname:"/loged/chat", 
            state: {
                     idChat: idChat,
                     userName: userName
                     }
             }}>
          <li id = {this.props.key} className="chat">
              <img className="chat__photo" src={Imagen} width="50"/>
              <div className="chat__text">
                <h5 className="chat__name">{userName}</h5>
                <p className="chat__lastMessage">{}</p>
              </div>
              <div className="chat__text2">
                <p className="chat__timeLastMessage">{}</p>
                <p className="chat__countMessages">{}</p>
              </div>
          </li> 
          </Link>
       )
    }
}

export default ChatBox