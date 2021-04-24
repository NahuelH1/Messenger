function Register(prop)
{

   return(
    <div className="Loggin">
       <div className="Loggin_containter">
         <h1>Hello. <br></br>Welcome!</h1>
         <form className="Loggin_form" onSubmit={prop.handleSubmit}>
          
          <label>email</label>
          <input className="form_text" type="text" name="email" onChange={prop.handleChange}/>

          <label>Username</label>
          <input className="form_text" type="text" name="username" onChange={prop.handleChange}/>
    
          <label>password</label>
          <input className="form_text" type="text" name="password" onChange={prop.handleChange}/>

          <label>repeat password</label>
          <input className="form_text" type="text" name="password_confirm" onChange={prop.handleChange}/>

          <input type="submit" value="Register" onClick={prop.handleClick}/>
        </form>
         <p>Log In</p>
       </div> 
       
    </div>
   )
}

export default Register;