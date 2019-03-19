import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

class SignUp extends React.Component {
    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">{label}</label>
            <div className="col-sm-10">
                <input className="form-control" {...input} placeholder={label} type={type} />
                {touched && error && <span>{`${label} is required`}</span>}
            </div>
        </div>
    )
    handleSubmit = (formvalues) => {

    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.handleSubmit)} className="form-horizontal">
                    <Field
                        name="username"
                        type="text"
                        component={this.renderField}
                        label="User Name"
                    />
                     <Field
                        name="email"
                        type="text"
                        component={this.renderField}
                        label="Email"
                    />
                    <Field
                        name="password"
                        type="password"
                        component={this.renderField}
                        label="Passord"
                    />
                    <Field
                        name="repeatpassword"
                        type="password"
                        component={this.renderField}
                        label="Repeat Password"
                    />
                   <button type="submit" className="btn btn-primary">Submit</button>
                   <button className="btn btn-warning" onClick={() => this.props.history.push('/signin')}>Sign in</button>

                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    if(!values.repeatpassword) {
        errors.repeatpassword = 'Required';
    }
    if(values.password !==values.repeatpassword) {
        errors.repeatpassword = 'Password not match';
    }
    if(!values.email) {
        errors.email = 'Required';
    }
    if ( ! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "Wrong format"
    }
   return errors
}
const form =  reduxForm({
    form: 'SignUp',
    validate
})(SignUp);

export default connect(null,null)(form);
