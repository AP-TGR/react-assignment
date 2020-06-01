import React from 'react';
import { Field, reduxForm } from 'redux-form';


class LoginPage extends React.Component {

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
        console.log(meta);
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return(
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field name="email" component={this.renderInput} label="Email"/>
                <Field name="password" component={this.renderInput} label="Password"/>
                <button className="ui button primary">Login</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.email) {
        errors.email = "The email is required."
    }
    
    if (!formValues.password) {
        errors.password = "The password is required."
    }

    return errors;
};

export default reduxForm({
    form:'login',
    validate
})(LoginPage);