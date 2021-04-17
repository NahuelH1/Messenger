import react from 'react';
import Register_form from '../components/Register/Register_form'
import { Redirect} from 'react-router-dom'
import ModalWarning from '../components/ModalWarning'
const URL_LOGIN = "http://localhost:3000/user_register"

class Register extends react.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      form:{
            email: undefined,
            username: undefined,
            password: undefined,
            password_confirm: undefined,
           },
    redirect_join: false,
    ModalWarningVisible: false,
    };
  }
  handleSubmit = e=>{
    e.preventDefault();

  }

   handleClick = async e=>{
      await fetch(URL_LOGIN, {
      method: 'POST',
      body: JSON.stringify({userData: {
                               username:this.state.form.username,
                               email:this.state.form.email,
                               password:this.state.form.password
                            }
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
               ModalWarningVisible : true,
               }
            );
        }
      )
       .catch(e=>{console.log(e)});
  }

  handleClickModal = e => {
      this.setState({
        ...this.state,
        redirect_join:true,
      })
  } 


  handleChange = e=>{
  this.setState({
      form: { 
     ...this.state.form,
      [e.target.name]: e.target.value,
     } 
    }, ()=>{console.log(this.state)})
  }

  render(){
   return (
   <react.Fragment>
     { this.state.redirect_join && <Redirect to="/login" />} 
       <Register_form 
       handleChange={this.handleChange}
       handleClick={this.handleClick}
       handleSubmit={this.handleSubmit}
       />

       <ModalWarning isOpen={this.state.ModalWarningVisible} handleClick={this.handleClickModal}  title={"Well Done!"}>You are already registered. Plese login</ModalWarning>
   </react.Fragment>
   )
  }
}

export default Register;