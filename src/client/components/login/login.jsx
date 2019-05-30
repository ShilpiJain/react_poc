import React, { Component } from 'react'
import '../Login/styles/style.scss';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


export default class Login extends Component {
    render() {
        return (
            <div>
                {/* <Button>Submit</Button>
                <Input /> */}
                <form>
                    <Input/>
                </form>
            </div>
        )
    }
}
