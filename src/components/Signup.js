import React ,{useRef}from 'react'
import { useUserContext } from "../context/userContext";
import { BsGoogle,BsGithub } from 'react-icons/bs';
import { Link } from "react-router-dom";
const Signup = (props) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser,error,signInWithGoogle,signInWithGithub} = useUserContext();
  const clicked = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };
  return (
    <div>
    <div className='login'>
    <div className="loginDetails">
    <p className="loginText">SIGN UP</p>
    <div className="error">
    {error}
    </div>
    <div className='name'>
    <input type="text" name="name" placeholder='Enter Name...' ref={nameRef}/>
    </div>
    <div className='userName'>
    <input type="email" name="email" placeholder='Enter Username...' ref={emailRef}/>
    </div>
    <div className="password">
    <input type="password" placeholder='Enter Password...' ref={psdRef}/>
    </div>
    <div className="loginButtonMain">
    <button className='loginButton' onClick={clicked}>Sign Up</button>
    </div>
    <div className="signUp">
     <p>Already Have an Account?<Link to="/"><span className='loginUpBtn' onClick={props.toggleIndex}>Login in</span></Link></p>
    </div>
    <p>Or</p>
    <div className='extraLogin'>
    <p>Login with</p>
    </div>
    <div>
    <BsGoogle onClick={signInWithGoogle} className="extraLoginLogo1 extraLoginLogo" />
    <BsGithub onClick={signInWithGithub} className="extraLoginLogo1 extraLoginLogo"/>
    </div>
    </div>

    </div>
    </div>
  )
}

export default Signup
