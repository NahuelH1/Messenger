import react from 'react';
import Cookie from 'universal-cookie'
import LogginForm from '../components/Loggin/Loggin_Form';
import {Redirect} from 'react-router-dom'

const URL_LOGIN = 'http://localhost:3000/login';
const cookies = new Cookie();
class Loggin extends react.Component
{
constructor(props)
{
  super(props);
  this.state = {
    form:{
          email: undefined,
          password: undefined,
         },
         redirect_loged: false
  };
}

  handleSubmit = e =>{
    e.preventDefault();
  }

  handleClick = e => {
    fetch(URL_LOGIN, {
      method: 'POST',
      body: JSON.stringify({
                            email:this.state.form.email,
                            password:this.state.form.password
                          }),
     headers:{
       'Content-Type': 'application/json'
     }
    }).then(res=>res.json())
      .then(data => {
        cookies.set('KEY', data.body, {path:'/loged'})
        cookies.set('ID', data.body.id, {path: '/loged'})
        this.setState({
                   ...this.state,
                    redirect_loged:true
                   })
        console.log(data.body)
      }
      )
       .catch(e=>{console.log(e)})
 };




  handleChange = e => {
    this.setState({
      form: { 
     ...this.state.form,
      [e.target.name]: e.target.value,
     } 
    }, ()=>{console.log(this.state)})
  }

 render(){
   return(
     <react.Fragment> 
      { this.state.redirect_loged && <Redirect to="/loged/chatlist" />} 
        <LogginForm 
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
        handleClick = {this.handleClick}
        />
     </react.Fragment>
   )
 }
}

export default Loggin;