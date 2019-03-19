import React from 'react';
import {connect} from 'react-redux';
import {AuthenticationReducer} from "../reducer";

const RequireAuth = (ComposedComponent) => {
    class Authenticate extends React.Component {

        render() {
            const isAuth = this.props.isAuthenticated || localStorage.getItem('token')
            return (
                <div>
                    {isAuth? <ComposedComponent {...this.props} /> : this.props.history.push('/signin')}
                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        const {isAuthenticated} = state.AuthenticationReducer;
        return {
            isAuthenticated
        };
    };
    return connect(mapStateToProps, null)(Authenticate);
}

export default RequireAuth;
