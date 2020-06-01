import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to={`user/edit/${user.id}`}><i className="edit icon"></i></Link>
                        <Link to={`user/delete/${user.id}`}><i className="trash icon"></i></Link>
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