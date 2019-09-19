import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {
   
    
    render() {
        return (
            <div>
                <p className="welcome-message">Welcome {this.props.auth}</p>
            </div>
            
        )
    }
}

const mapStateToProps = (state => {
    return {
        auth : state.auth
    }
})

export default connect(mapStateToProps)(Login);