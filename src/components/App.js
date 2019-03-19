import React from 'react';
import {Router,Route,Redirect} from 'react-router-dom';
import history from '../history';

import SignIn from './SignIn';
import RequireAuth from './RequireAuth';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import Movie from './Movie';

class App extends React.Component {
    render() {
        return(
            <div className="container">
                <Router history={history}>
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/" component={RequireAuth(Dashboard)} />
                    <Route exact path="/movie/:id" component={Movie} />
                    <Route exact path="/movie/" component={Movie} />
                    <Route exact path="/logout" component={()=>{
                        localStorage.clear();
                        return <Redirect to={'/'}/>
                    }} />
                </Router>
            </div>
        );
    }
}

export default App;
