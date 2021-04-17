import react from 'react';
import {FomLogController} from '../components/FomLogController';

const URL_LOGIN = 'http://localhost:3000/login';

class Loggin extends react.Component
{
constructor(props)
{
  super(props);
  this.state = {
    form:{
          email: undefined,
          password: undefined,
         }
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
      .then(data => console.log(data))
       .catch(e=>{console.log(e)})
  };

  handleChange = e => {
    this.setState({
      form: { 
     ...this.state.form,
      [e.target.name]: e.target.value,
     } 
    }, (err, data)=>{console.log(this.state)})
  }

  render(){
    return <FomLogController handleChange={this.handleChange} handleClick={this.handleClick} handleSubmit={this.handleSubmit}/>
  }
}

export default Loggin;