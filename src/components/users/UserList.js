import React from 'react';
import { connect } from 'react-redux';
import { listUser } from '../../actions';

class UserList extends React.Component {
    componentDidMount() {
        this.props.listUser();
    }

    renderList() {
        return this.props.users.map(user => {
            return (
                <tr key={user.id}>
                    <td data-label="Name">{ user.first_name + ' ' +user.last_name }</td>
                    <td data-label="Email">{ user.email }</td>
                    <td data-label="Action">
                        <i className="plus square icon"></i>
                        <i className="edit icon"></i>
                        <i className="trash icon"></i>
                    </td>
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
    return { users: Object.values(state.users) };
};

export default connect(
    mapStateToProps,
    { listUser }
)(UserList);