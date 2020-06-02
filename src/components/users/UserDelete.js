import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { showUser, deleteUser } from '../../actions';

class UserDelete extends React.Component{

    componentDidMount() {
        this.props.showUser(this.props.match.params.id);
    }

    renderActions () {
        const {id} = this.props.match.params;
        
        return (
            <React.Fragment>
                <button 
                    onClick = {() => this.props.deleteUser(id)}
                    className="ui button negative">Delete</button>
                <Link to={'/'} className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.user) {
            return 'Are you Sure, you want to delete the user?';
        }

        return `Are you Sure, you want to delete the user ${this.props.user.name}?`
    }

    render() {
        return (
            <Modal 
                title="Delete User"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { showUser, deleteUser }
)(UserDelete);