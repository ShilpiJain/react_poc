import React from 'react'
import './styles/login-form.scss';


export default function LoginForm (props) {
    let{
        values,
        onFocusHandle,
        onBlurHandle,
        onInputChange,
        onsubmit,
        isFocused,
        hasfocused,
        showError,
        errorMessage,
        isValid
    } =  props;
    
    return (
        <div className="col-4 login">
            <h1>Sign up / login</h1>
            <form>
                <div className="form-group login-block">
                    <label htmlFor="username" className="bmd-label-floating">Username</label>
                    <input
                        type="text"
                        id="username"
                        className={`form-control" + ${(showError.username && isFocused.username) || (showError.username && hasfocused.username)  ? "red-border": ""}`}
                        placeholder="Username"
                        maxLength="10"
                        onFocus={(event) => {
                            return onFocusHandle(event, 'username');
                        }}
                        onBlur={(event) => {
                            return onBlurHandle(event, 'username');
                        }}
                        onChange={(event) => {
                            return onInputChange(event, 'username');
                        }}
                        required
                    />
                    {
                        (isFocused.username && showError.username) || (showError.username && hasfocused.username) ? <span className="bmd-help">{errorMessage.username}</span> : <></>
                    }
                    
                    
                </div>
               <div className="form-group login-block">
                    <label htmlFor="password" className="bmd-label-floating">Password</label>
                    <input
                        type={values.showPassword ? 'text' : 'password'}
                        id="password"
                        className={`form-control" + ${(isFocused.password && showError.password) || (showError.password && hasfocused.password)  ? "red-border": ""}`}
                        placeholder="password"
                        maxLength="10"
                        onFocus={(event) => {
                            return onFocusHandle(event, 'password');
                        }}
                        onBlur={(event) => {
                            return onBlurHandle(event, 'password');
                        }}
                        onChange={(event) => {
                            return onInputChange(event, 'password');
                        }}
                        required
                    />
                    {
                       (isFocused.password && showError.password) || (showError.password && hasfocused.password) ? <span className="bmd-help">{errorMessage.password}</span> : <></>
                    }                    
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-raised"
                     onClick={(e)=>onsubmit(e)}
                >Login</button>
            </form>
        </div>
    )
}

