import react from 'react'
import './styles/TextMessage.css'
 const TextMessages = (prop) =>
{
        return (
          <div className={`${prop.sender} Message`}>
             <p>{prop.children}</p>
          </div> 
       )
}

export default TextMessages;
