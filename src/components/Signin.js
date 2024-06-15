import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import '../App.css'
import { BsGoogle,BsGithub } from 'react-icons/bs';
import { Link } from "react-router-dom";
  const Signin = (props) => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser,error,signInWithGoogle,signInWithGithub} = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };
  return (
    <div className='login'>
    <div className="loginDetails">
    <p className="loginText">LOGIN</p>
    <div className="error">
    {error}
    </div>
    <div className='userName'>
    <input type="email" name="email" placeholder='Enter Username...' ref={emailRef}/>
    </div>
    <div className="password">
    <input type="password" placeholder='Enter Password...' ref={psdRef}/>
    <Link to="/ForgetPsd"><p className="forgetPsd">Forget password?</p></Link>
    </div>
    <div className="loginButtonMain">
    <button className='loginButton' type="submit" onClick={onSubmit}>Login</button>
    </div>
    <div className="signUp">
    <p>Don't Have an Account?<Link to="/signup"><span className='SignUpBtn' onClick={props.toggleIndex}> Sign Up</span></Link></p>
    </div>
    <p>Or</p>
    <div className='extraLogin'>
    <p>Login with</p>
    <div>
    <BsGoogle onClick={signInWithGoogle} className="extraLoginLogo1 extraLoginLogo" />
    <BsGithub onClick={signInWithGithub} className="extraLoginLogo1 extraLoginLogo"/>
    </div>
    </div>
    </div>

    </div>
  )
}
export default Signin;