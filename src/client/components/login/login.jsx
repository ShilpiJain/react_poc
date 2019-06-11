import React, { Component } from 'react'
import './styles/login.scss';
import LoginForm from './container/LoginForm';
import Contants from '../../constants';
import {checkIfMobNumber} from '../../utils/helper'
// import {
//     checkIfMobNumber
//     // OTPVerifier,
//     // sendOtp,
//     // getCookieByName,
//     // deleteCookieByName
// } from '../../utils/helper';
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
        let isFocused = {...this.state.isFocused}
        let showError = {...this.state.showError};
        let hasFocused = {...this.state.hasFocused};

        if(name === 'username'){
            
        }
        if(name === 'password'){

        }
    }
    onInputChange(e, name) {
        let loginDetails = {...this.state.loginDetails};
        let showError = {...this.state.showError};
        let isValid = {...this.state.isValid};
        let inputValue = e.target.value.trim();
        console.log(inputValue);
        // let regNumbers = /^\d{0,10}$/;
        let password = this.state.password;
        if(name === 'username' && inputValue.length >= 7){
            //if(checkIfMobNumber(inputValue)){
                showError[name] = false;
                isValid[name] = true;
                console.log(inputValue.length)
                console.log("1.1. showError username : -" + showError.username)
                console.log("isValid username : -" + isValid.username)
            // }else{
            //     showError[name] = true;
            //     isValid[name] = false;
            //        console.log("1.2. showError username : -" + showError.username)
            //        console.log(inputValue.length)
            //        console.log("isValid username : -" + isValid.username)
            // }
        } 
        else{
            if(name ==='password' && inputValue.length > 7){
                showError[name] = false;
                isValid[name] = true;
                   console.log("2.1. showError password : -" + showError.password)
                   console.log(inputValue.length)
                   console.log("isValid Password : -" + isValid.password)   
            }else{
                 showError[name] = false;
                 isValid[name] = false;
                   console.log("2.2 showError password : -" + showError.password)
                   console.log(inputValue.length)
                   console.log("isValid password : -" + isValid.password)
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
                {/* <Button>Submit</Button>
                <Input /> */}
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
