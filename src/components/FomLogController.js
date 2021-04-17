import Context from '../Context';
import LogginForm from '../components/Loggin/Loggin_Form';
import react from 'react';


 export const FomLogController = (prop)=>( 
    <Context.Provider>
    {
       ({activateAuth})=>{
        return( 
          <LogginForm 
             handleChange = {prop.handleChange}
             handleSubmit = {prop.handleSubmit}
             handleClick = {prop.handleClick}
          />)
       }
    }
   </Context.Provider> 
 )