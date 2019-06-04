import React, { Component } from 'react'
import './styles/login.scss';
import LoginForm from './container/LoginForm';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginDetails : {
                phone : '',
                password :''
            },
            values : {
                showPassword : false,
                username : '',
                password :''
            }
        }
        this.onFocusHandle = this.onFocusHandle.bind(this);
        this.onBlurHandle = this.onBlurHandle.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
        
    }
    onFocusHandle() {

    }
    onBlurHandle() {

    }
    onInputChange() {

    }
    onsubmit() {
        
    }
    render() {
        return (
            <div>
                {/* <Button>Submit</Button>
                <Input /> */}
                <LoginForm 
                    values={this.state.values}
                />
            </div>
        )
    }
}
