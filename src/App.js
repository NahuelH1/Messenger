import Messages from './pages/Messages';
import Loggin from './pages/Loggin';
import Register from './pages/Register' 

import Layout from './components/Layout';
import react from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound' 
import Context from './Context'
const  UserLogged = ({children}) => {
   return children({ isAuth: true})
}

function App() {
  return (
    <react.Fragment>
          <BrowserRouter>
            <Switch>
              <Context.Consumer>
                {
                   ({isAuth})=>
                   isAuth ? 
                   <Route path="/loged/:page">
                   <Layout>
                     <Switch>
                           <Route path="/loged/messages" component={Messages}/>
                            <Route component={NotFound}/>

                     </Switch>
                   </Layout>

                   </Route>
                   :

                   <Switch>
                      <Route exact path="/login" component={Loggin}/>
                      <Route exact path="/register" component={Register}/>
                     <Route component={NotFound}/>

                 </Switch>
                }
              </Context.Consumer>
            </Switch>
           </BrowserRouter>


    </react.Fragment>
  );
}

export default App;
