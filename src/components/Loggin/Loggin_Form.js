import './styles/Loggin_form.css'

function Loggin_Form(prop)
{
   return(
    <div className="Loggin">
       <div className="Loggin_containter">
         <h1>Hello. <br></br>WelcomeBack</h1>

         <form className="Loggin_form" onSubmit={prop.handleSubmit}>
          
          <label>email</label>
          <input className="form_text" onChange={prop.handleChange} type="text" name="email"/>
       
    
          <label>password</label>
          <input className="form_text" onChange={prop.handleChange} type="password" name="password"/>
  
          <p className="form_forgot">Forgot Password?</p>
          <input type="submit" value="Loggin" onClick={prop.handleClick}/>
        </form>
         <p>Create Account</p>
       </div> 
</div>
   )
}

export default Loggin_Form;