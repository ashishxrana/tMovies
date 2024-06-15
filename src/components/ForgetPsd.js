    import React , { useRef } from 'react'
    import { useUserContext } from "../context/userContext";
    import {AiOutlineArrowRight} from "react-icons/ai"
    import {Link} from"react-router-dom";
    import "../App.css"

    function ForgetPsd() {
        
        const emailRef = useRef();
        const {forgotPassword} = useUserContext();
        const forgotPasswordHandler = () => {
            const email = emailRef.current.value;
            if (email)
              forgotPassword(email).then(() => {
                emailRef.current.value = "";
              });
          };
    const showAlert=()=>{
        const email = emailRef.current.value;
        return alert("check "+email+" For further action")
    }
    return (
        <div>
            <div className='container forgetPass'>
                <div className="loginDetails">
                    <p className="loginText">Forget Password</p>
               <div>
                <div className='forgetpassEmail'>
                    <div className='userName'>
                        <input type="email" name="email" ref={emailRef} placeholder='Enter Username...' />
                        <Link to="/"><p className='backToLogin'>Back to login <AiOutlineArrowRight /></p></Link>
                    </div>
                </div>
               </div>
                <div className="loginButtonMain">
                    <button className='loginButton' type="submit"
                    onClick={()=>{showAlert();forgotPasswordHandler();}}>Forget Password</button>
                </div>
                </div>
            </div>
        </div>
    )
    }

    export default ForgetPsd
