import react from 'react'
import Chats from '../components/Messages/Chats'
import './styles/message.css'

class Messages extends react.Component
{
    render()
    {
       return (
          <div className="Page__Messages">
              <Chats></Chats>
          </div>
       )
    }
}

export default Messages