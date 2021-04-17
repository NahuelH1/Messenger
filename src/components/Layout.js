import react from 'react'
import './styles/Layout.css'
import Header from './Messages/Header'
import Footer from './Messages/Footer'
function Layout(props)
{
   return(
       <div class="Layout">
         <Header/>
          {props.children}
          <Footer/>
       </div>
   )
}

export default Layout