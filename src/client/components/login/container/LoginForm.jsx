import React from 'react'
import './styles/login-form.scss';
import "../../shared/style/bootstrap.min.css";

function LoginForm (props) {
    let{
        values,
        onFocusHandle,
        onBlurHandle,
        onInputChange,
        onsubmit,
        showError,
        errorMessage,
        isSubmitting
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
                        className={`form-control" + ${(showError.username)  ? "red-border": ""}`}
                        placeholder="Enter your Username"
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
                        (showError.username) ? <span className="bmd-help">{errorMessage.username}</span> : <></>
                    }
                    
                    
                </div>
               <div className="form-group login-block">
                    <label htmlFor="password" className="bmd-label-floating">Password</label>
                    <input
                        type={values.showPassword ? 'text' : 'password'}
                        id="password"
                        className={`form-control" + ${(showError.password) ? "red-border": ""}`}
                        placeholder="Enter your Password"
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
                       (showError.password) ? <span className="bmd-help">{errorMessage.password}</span> : <></>
                    }                    
                </div>
                <input
                    type="checkbox"
                    id="saveDetails"
                    value="Keep me remember"
                    />
                <button
                    type="submit"
                    className="btn btn-primary btn-raised"
                     onClick={(e)=>onsubmit(e)}
                     disabled = {(showError.password) || (showError.username) || (isSubmitting)}
                >Login</button>
            </form>
        </div>
    )
}

export default LoginForm

