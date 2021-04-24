import react from 'react'
import './styles/message.css'
import data from '../Data.json'
import Contact from '../components/Contacts/Contact'
import Layout from '../components/Layout';
import Loading from '../components/Loading';


class Messages extends react.Component
{
    constructor()
    {
       super()
       this.state = {
          "loading":true,
          "data":[]
         };
    }
    
    componentDidMount()
    {
      fetch("http://localhost:3000/user")
        .then(data => data.json())
        .then(data=>{
         this.setState({
            ...this.state,
            "loading":false,
            "data": data.body,
           })
        })
        .catch(err => console.log(err))
    }
     
    render()
    {
       return (
         <Layout title="Contacts">
          <div className="Page__Contacts">
          <ul className="Contacts">
          {this.state.loading === true && <Loading class="Loading"/>}
          {this.state.data.map(person=>{
             return <Contact key={person._id} id={person._id} userName={person.username} />
          })}
        </ul>
          </div>
          </Layout>
       )
    }
}

export default Messages