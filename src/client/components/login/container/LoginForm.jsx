import React from 'react'
import './styles/login-form.scss';


export default function LoginForm (props) {
    let{
        values,
        onFocusHandle,
        onBlurHandle,
        onInputChange,
        onsubmit
    } =  props;
    
    return (
        <div>
            <form>
                <input
                    type="text"
                    id="username"
                    placeholder="User Name"
                    maxLength="10"
                    value={values.username}
                    onFocus={(event) => onFocusHandle(event, 'username')}
                    onBlur={(event) => onBlurHandle(event, 'username')}
                    onChange={(event) => onInputChange(event, 'username')}
                    required
                />
                <label htmlFor="username">Username</label>
                <input
                    type={values.showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="password"
                    maxLength="10"
                    value={values.password}
                    onFocus={(event) => onFocusHandle(event, 'password')}
                    onBlur={(event) => onBlurHandle(event, 'password')}
                    onChange={(event) => onInputChange(event, 'password')}
                    required
                />
                <label htmlFor="password">Password</label>
                <button
                    type="submit"
                    onClick={(e)=>onsubmit(e)}
                >Login</button>
            </form>
        </div>
    )
}

