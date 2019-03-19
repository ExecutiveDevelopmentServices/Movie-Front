import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {signIn} from '../action';

class SignIn extends React.Component {
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
        this.props.signIn(formvalues);
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
                        name="password"
                        type="password"
                        component={this.renderField}
                        label="Passord"
                    />
                   <button type="submit" className="btn btn-primary">Submit</button>

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
   return errors
}
const form =  reduxForm({
    form: 'signIn',
    validate
})(SignIn);

export default connect(null,{signIn})(form);
