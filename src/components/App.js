import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';
import UserDelete from './users/UserDelete';
import UserList from './users/UserList';
import UserShow from './users/UserShow';
import Header from './Header';
import LoginPage from './LoginPage';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/"  exact component={ UserList }/>
                    <Route path="/user/new"  exact component={ UserCreate }/>
                    <Route path="/user/edit"  exact component={ UserEdit }/>
                    <Route path="/user/delete"  exact component={ UserDelete }/>
                    <Route path="/user/show"  exact component={ UserShow }/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;