import React, { Component } from 'react'; 
import { Redirect} from "react-router-dom"; 
import firebase from 'firebase';
import { setUser } from '../actions/authActions';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: false, login: false }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);

        var firebaseConfig = {
            apiKey: "AIzaSyAVPMya1OC6CzLWgaJX7_uSPb_Wmw_6YHk",
            authDomain: "neami-developer-test.firebaseapp.com",
            databaseURL: "https://neami-developer-test.firebaseio.com",
            projectId: "neami-developer-test",
            storageBucket: "",
            messagingSenderId: "1047177511332",
            appId: "1:1047177511332:web:9256771003bbc159c5c131"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);

          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                return <Redirect to='/dashboard' />
            } else {
              console.log("User not logged in");
            }
          });
    }
    submitForm(e) {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((res)=> {
            console.log(res.user.email);
            this.props.setUser(res.user.email);
            this.setState({login: true});
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            console.log(errorCode + " : " + errorMessage);
          });
    }

    setEmail(val) {
       this.setState({ email: val.target.value })
    }

    setPassword(val) {
        this.setState({ password: val.target.value })
    }
    render() {
        if(this.state.login === true) {
            return <Redirect to='/logged' />
        }
        return (
            <div>
                <div className="Aligner login-background">
                    <div className="Aligner-item">
                        <p className="login-title">Login</p>
                        <div className="input-box">
                            <img className="form-icon" src={require('./../images/mail.jpg')} alt="mail" />
                            <input className="input" value={this.state.email} type="text" placeholder="Email Address" onChange={this.setEmail}/>
                        </div>
                        <div className="input-box2">
                            <img className="form-icon2" src={require('./../images/alert.jpg')}  alt="alert"/>
                            <input className="input" value={this.state.password} type="password" placeholder="Password" onChange={this.setPassword}/>
                            <button className="form-button" onClick={this.submitForm.bind(this)}>LOGIN</button> 
                        </div>
                    </div>
                </div>
                {this.state.error === true ? <p className="error-message">There was an error</p> : <p></p>}
            </div>
            
        )
    }
}

const mapStateToProps = (state => {
    return {
        
    }
});

export default connect(mapStateToProps, { setUser })(Login);