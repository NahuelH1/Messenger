import react from 'react'
import Chat from './Chat'
import './styles/chats.css'
import data from '../../Data.json'
class Chats extends react.Component
{
   constructor()
   {
      super()
      this.state = {"data":[]};
   }
  componentDidMount()
  {
     this.setState({
      "data": data,
     })
  }

    render()
    {
       return (
       <div className="chats">
          {this.state.data.map(person=>{
         return <Chat 
                   userName={person.userName}
                   lastMessage={person.lastMessage} 
                   timeLastMessage={person.timeLastMessage}
                   countMessages={person.countMessages}  
                   urlProfilePhoto={person.urlProfilePhoto}
               />
          })}
        </div>
       )
    }
}

export default Chats