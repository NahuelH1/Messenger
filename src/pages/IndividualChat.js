import react from 'react'
import './styles/Chat.css'
import TextMessages from '../components/TextMessages'
import Layout from '../components/Layout';
import Cookies from 'universal-cookie'

class IndividualChat extends react.Component
{
    constructor(props)
    {
       super(props)
       this.state = {
                      "data":[],
                      "messageSend":undefined,
                      "cookies": new Cookies()
                    };
    }
    componentDidMount()
    {
      this.searchMessages()


    }
    componentDidUpdate()
    {

    }
   
    handleChange = (e)=>{
      const value = e.target.value == "" ? undefined : e.target.value;
      this.setState({
          ...this.state,
          "messageSend": value
       }) 

    }
    handleClick = (e) => {
      fetch('http://localhost:3000/message', {
         method: 'POST',
         body: JSON.stringify({
            "user":this.state.cookies.get("ID"),
            "message":this.state.messageSend,
            "IDChat":this.props.location.state.idChat
                             }),
        headers:{
          'Content-Type': 'application/json'
        }
       }).then(res=>res.json())
         .then(
           ()=>{
              this.setState(
                  {
                  ...this.state,
                  messageSend: "",
                  }
               );
          this.searchMessages()
              
           }
         ).then(()=>{ let chatBox = document.querySelector('.messages__container');
         chatBox.scrollTop = chatBox.scrollHeight; })
          .catch(e=>{console.log(e)});
    }

    handleSubmit = (e)=>{
    e.preventDefault();
    }
searchMessages()
{
   fetch(`http://localhost:3000/message?chat=${this.props.location.state.idChat}`)
       .then(data => data.json())
       .then(messages => {
          this.setState({
             ...this.state,
            "data": messages.body,
           })
      })
}

    render()
    {
       return (
         <Layout title={`${this.props.location.state.userName}`}>
           <div className="container">
              <div className="messages__container">
               {this.state.data.map((message)=>{
                  if(this.state.cookies.get("ID") == message.userId)
                  {
                     return <TextMessages key={message._id} sender="I">{message.message}</TextMessages>
                  }else{
                    return <TextMessages key={message._id} sender="He">{message.message}</TextMessages>
                  } 
               })}
              </div>
            <div >
               <form className="input__container" onSubmit={this.handleSubmit}>
                   <input type="text" value={this.state.messageSend} onChange={this.handleChange}></input>
                   <button class="input_btn" onClick={this.handleClick}>Send</button>
               </form>
            
            </div>
           </div>
         </Layout>
       )
    }
}

export default IndividualChat