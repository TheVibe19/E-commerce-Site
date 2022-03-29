import React from "react";
 import './sign.scss';
 
import SignIn from "../../../Components/sign-in/signin";
import SignUp from "../../../Components/sign-up/signup";
 const Sign =()=>(
     <div className='sign-in-and-sign-up'>
         <SignIn />
         <SignUp />
     </div>

 )
 export default Sign;