import React, { Component } from 'react'
import './styles/login.scss';
import LoginForm from './container/LoginForm';
import Contants from '../../constants';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginDetails : {
                username : '',
                password : ''
            },
            values : {
                showPassword : false,
                username : '',
                password :''
            },
            hasFocused : {
                username : false,
                password : false
            },
            isFocused : {
                username : false,
                password :false
            },
            showError : {
                username : false,
                password : false
            },
            errorMessage:{
                username : Contants.INCORRECT_USERNAME,
                password : Contants.INCORRECT_PASSWORD
            },
            isValid:{
                username : false,
                password : false
            },
            isSubmitting : false
        }
        this.onFocusHandle = this.onFocusHandle.bind(this);
        this.onBlurHandle = this.onBlurHandle.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
    }
    onFocusHandle(e, name) {
        let isFocused = {...this.state.isFocused}
        isFocused[name] = true
        this.setState({isFocused})
        console.log("isFocused username:-" + isFocused.username)
        console.log("isFocused password:-" + isFocused.password)
    }
    onBlurHandle(e, name) {
        let showError = {...this.state.showError};
        let isValid = {...this.state.isValid};
        let inputValue = e.target.value.trim();
        debugger;
        if(name === 'username' && inputValue.length >= 8){
            showError[name] = false;
        } else {
            showError[name] = true;
        }
        this.setState({showError});
        console.log(showError.username);
        if(name === 'password'){
            if(inputValue.length >= 8){
                showError[name] = false;
                isValid[name] = true;
                console.log(showError.password);
            } else {
                showError[name] = true;
                isValid[name] = false;
                console.log(showError.password);
            }
        }
        this.setState({showError, isValid});
    }
    onInputChange(e, name) {
        let loginDetails = {...this.state.loginDetails};
        let showError = {...this.state.showError};
        let isValid = {...this.state.isValid};
        let inputValue = e.target.value.trim();
        if(name === 'username' && inputValue.length >= 7){
                showError[name] = false;
                isValid[name] = true;
        } 
        else{
            if(name ==='password' && inputValue.length > 7){
                showError[name] = false;
                isValid[name] = true;
            }else{
                 showError[name] = false;
                 isValid[name] = false;
            }
        } 
        this.setState({loginDetails, showError, isValid})
    }
    onsubmit(e) {
        e.preventDefault();
        this.setState({isSubmitting: true})
    }

    render() {
        return (
            <div>
                <LoginForm 
                    values={this.state.values}
                    loginDetails={this.state.loginDetails}
                    hasFocused={this.state.hasFocused}
                    isFocused={this.state.isFocused}
                    showError={this.state.showError}
                    errorMessage={this.state.errorMessage}
                    isValid={this.state.isValid}
                    onFocusHandle={this.onFocusHandle}
                    onBlurHandle={this.onBlurHandle}
                    onInputChange={this.onInputChange}
                    onsubmit={this.onsubmit}
                />
            </div>
        )
    }
}
