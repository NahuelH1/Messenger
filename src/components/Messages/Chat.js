import react from 'react'
import './styles/Chat.css'

class Chat extends react.Component
{
    render()
    {
        const {userName, lastMessage, timeLastMessage, countMessages, urlProfilePhoto}  = this.props;

        return (
          <div className="chat">
              <img className="chat__photo" src={urlProfilePhoto} width="50"/>
              <div className="chat__text">
                <h5 className="chat__name">{userName}</h5>
                <p className="chat__lastMessage">{lastMessage}</p>
              </div>
              <div className="chat__text2">
                <p className="chat__timeLastMessage">{timeLastMessage}</p>
                <p className="chat__countMessages">{countMessages}</p>
              </div>
          </div> 
       )
    }
}

export default Chat