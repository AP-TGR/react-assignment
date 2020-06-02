import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { showUser, editUser } from '../../actions';
import UserForm from './UserForm';

class UserEdit extends React.Component {
    componentDidMount() {
        this.props.showUser(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editUser(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.user) {
            return "<div>Loading.....</div>";
        }
        return (
            <div>
                <h3>Edit User</h3>
                <UserForm
                    initialValues={_.pick(this.props.user, 'name', 'email')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { showUser, editUser }
)(UserEdit);