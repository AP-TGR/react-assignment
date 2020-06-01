import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../actions'

class UserCreate extends React.Component {

    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.createUser(formValues);
    }

    render() {
        return(
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field name="name" component={this.renderInput} label="Name"/>
                <Field name="job" component={this.renderInput} label="job"/>
                <button className="ui button primary">Create</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.name) {
        errors.name = "The name is required."
    }

    if (!formValues.job) {
        errors.job = "The job is required."
    }

    return errors;
}

const formWarpped = reduxForm({
    form:'userCreate',
    validate
})(UserCreate);

export default connect (null, { createUser })(formWarpped);