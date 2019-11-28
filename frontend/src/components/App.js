import React, {Component} from 'react';
import '../style/App.css';
import Login from "./Login";
import {Switch,Route,Redirect} from 'react-router-dom'
import SignUp from "../SignUp";
import history from '../history';
import {Router} from "react-router-dom";
import {GC_USER_ID, RESET_TOKEN} from '../constants'
import MenuUser from "../menu/MenuUser";
import ResetPassword from "./ResetPassword";
import ForgotPassword from "./ForgotPassword";
class App extends Component {

    render() {

        const userId = localStorage.getItem(GC_USER_ID);
        return (

            <div className="App">
                <div className="App-header">
                    <Switch>
                        <Router history={history}>
                            <Route exact path="/" component={Login} />
                            <Route path={"/reset-password"} component={ResetPassword}/>
                            <Route exact path={"/forgot-password"} component={ForgotPassword}/>
                            <Route exact path="/signup" component={SignUp} />

                            {userId ? (<Redirect to='/user'/>

                            ):(<Redirect to='/' />)
                            }
                            <Route exact path="/user" component={MenuUser}>
                            </Route>
                        </Router>
                    </Switch>

                </div>
            </div> )
    }
}


export default App;
