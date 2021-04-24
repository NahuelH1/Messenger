import react from 'react'
import './styles/message.css'
import Cookies from 'universal-cookie'
import Chat from '../components/ChatList/ChatBox'
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import {Redirect} from 'react-router-dom'

class ChatList extends react.Component
{
    constructor()
    {
       super()
       this.state = {
          "redirect_login": false,
          "loading":true,
          "chats":[],
          "cookies":  new Cookies()
         };
    }
    componentDidMount()
    {
       if(this.authenticate())
       {
           fetch(`http://localhost:3000/chatList?user=${this.state.User_ID}`)
           .then((data)=>data.json())
           .then((data)=>{
         this.setState({
            ...this.state,
            "loading": false,
            "chats":data.body,
           }
           )})
            }else
       {
         this.setState({
            ...this.state,
            "redirect_login":true,
           }
           )
       }
    }
    authenticate()
    {
      this.state.User_ID = this.state.cookies.get('ID');
      this.state.KEY = this.state.cookies.get('KEY');
      if(this.state.User_ID && this.state.KEY)
      {
         return true
      }
      return false
      
   }
    render()
    {
       return (
          <Layout title="Messages">
         { this.state.redirect_login && <Redirect to="/login" />} 
          <div className="Page__Messages">
          <ul className="chats"> 
          {this.state.loading === true && <Loading class="Loading"/>}
          {this.state.chats.map(chat=>{
         return <Chat 
                   userName={chat.contacto.username}
                   idChat = {chat.id_Chat}
                 /*  lastMessage={person.lastMessage} 
                   timeLastMessage={person.timeLastMessage}
                   countMessages={person.countMessages}  
                   urlProfilePhoto={person.urlProfilePhoto} */
                   key={chat.contacto._id}
               />
          })}
        </ul>
          </div>
          </Layout>
       )
    }
}

export default ChatList