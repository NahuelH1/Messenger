import react from 'react'
import './styles/Layout.css'
import Header from './Header'
import Footer from './Footer'


const Layout = (prop)=>
{
      return(
         <div class="Layout">
           <Header>
              {prop.title}
           </Header>
            {prop.children}
            <Footer/>
         </div>
     )
   
}

export default Layout