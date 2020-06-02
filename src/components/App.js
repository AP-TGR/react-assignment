import React from 'react';
import { Router, Route } from 'react-router-dom';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';
import UserDelete from './users/UserDelete';
import UserList from './users/UserList';
import UserShow from './users/UserShow';
import Header from './Header';
import LoginPage from './LoginPage';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/"  exact component={ UserList }/>
                    <Route path="/user/new"  exact component={ UserCreate }/>
                    <Route path="/user/edit/:id"  exact component={ UserEdit }/>
                    <Route path="/user/delete/:id"  exact component={ UserDelete }/>
                    <Route path="/user/show"  exact component={ UserShow }/>
                </div>
            </Router>
        </div>
    );
};

export default App;