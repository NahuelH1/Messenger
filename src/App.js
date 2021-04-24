import ChatList from './pages/ChatList';
import Loggin from './pages/Loggin';
import Register from './pages/Register' 
import Contacts from './pages/Contacts'
import react from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound' 
import Socket from './components/Socket'
import IndividualChat from './pages/IndividualChat'
function App() {
  Socket.emit('conectado', "hola desde el cliente");
  Socket.on('message', (data)=>{console.log(data)})
  return (
    <react.Fragment>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Loggin}/>
                <Route exact path="/register" component={Register}/>
                 <Route path="/loged/:page">
                   <Switch>
                  <Route  exact path="/loged/contacts" component={Contacts}/>
                  <Route  path="/loged/chatlist" exact component={ChatList}/>
                  <Route  path="/loged/chat" exact component={IndividualChat}/>
                        
                      <Route component={NotFound}/>
                    </Switch>
                  </Route>
                 <Route component={NotFound}/>

            </Switch>
         </BrowserRouter>


    </react.Fragment>
  );
}

export default App;
/*
import Messages from './pages/Messages';
import Loggin from './pages/Loggin';
import Register from './pages/Register' 

import Layout from './components/Layout';
import react from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound' 
const  UserLogged = ({children}) => {
   return children({ isAuth: false})
}

function App() {
  return (
    <react.Fragment>
          <BrowserRouter>
            <Switch>
              <UserLogged>
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
              </UserLogged>
            </Switch>
           </BrowserRouter>


    </react.Fragment>
  );
}

export default App;

*/