import React from 'react';
import {Field, reduxForm} from 'redux-form';


class MovieForm extends React.Component {
    renderInput = ({input, type, label, meta}) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input} type={type} className="form-control"/>
                {this.renderError(meta)}
            </div>

        );
    };
    renderError = ({touched, error}) => {
        if (touched && error) {
            return <div className="alert alert-danger">
                <strong>Error!</strong> {error}
            </div>;
        }
    }
    handleSubmit = formvalues => {
        this.props.submitCreateForm(formvalues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <Field name="name" label="Name" component={this.renderInput}/>
                <Field name="rating" type={'number'} label="Rating(1-10)" component={this.renderInput}/>
                <Field name="releaseDate" type={'date'} label="Date(MM/DD/YYYY)" component={this.renderInput}/>
                <Field name="directors" label="Directors(Eg:  dir1,dir2)" component={this.renderInput}/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const error = {};
    if (!formValues.name) {
        error.name = "We need Title";
    }
    if (!formValues.Rating) {
        error.Rating = "We need author";
    }

    return error;
};

export default reduxForm({
    form: 'MovieForm',
    validate
})(MovieForm);
