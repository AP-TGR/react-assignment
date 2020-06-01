import React from 'react';
import { connect } from 'react-redux';
import { showUser } from '../../actions';

class UserEdit extends React.Component {
    componentDidMount() {
        this.props.showUser(this.props.match.params.id);
    }

    renderForm() {
        return this.props.user.map(userData => {
            return(
                <div key={userData.id}>{userData.first_name}</div>
            );
        });
    }

    render() {
        return (
            <div>{ this.renderForm() }</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: Object.values(state.users) };
};

export default connect(
    mapStateToProps,
    { showUser }
)(UserEdit);