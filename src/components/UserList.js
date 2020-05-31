import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderList() {
        return this.props.users.map(user => {
            return (
                <tr key={user.id}>
                    <td data-label="Name">{ user.first_name + ' ' +user.last_name }</td>
                    <td data-label="Email">{ user.email }</td>
                    <td data-label="Action"><i className="plus square icon"></i></td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderList() }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { users: state.users }
};

export default connect (
    mapStateToProps,
    { fetchUsers }
)(UserList);