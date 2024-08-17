import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import {auth} from "../firebase.js"
import { RecaptchaVerifier } from 'firebase/auth'
import { signInWithPhoneNumber} from 'firebase/auth'


function App() {
 const [user,setuser]=useState(null)
 const [otp,setotp]=useState()
 const [otpverify,setotpverify]=useState(false)

 const sendOtp = async() => {
  try {
    const recaptcha = new RecaptchaVerifier(auth,'recaptcha', {});
    const confirmation= await signInWithPhoneNumber(auth,"+919302394860", recaptcha);
    setuser(confirmation)
    console.log(confirmation)
  } catch (error) {
    console.log(error);
  }
  
}



 const verifyOtp = async() => {
  try {
    await user.confirm(otp)
    otpverify(true)
  } catch (error) {
    console.log(error);
  }  
};

  return (
    <>
    <div id="recaptcha"></div>
    <button onClick={sendOtp}>signin </button>
    <input type="text" onChange={(e)=>{setotp(e.target.value)}} />
    <button onClick={verifyOtp}>submit</button>
    { otpverify && (
      <div> otp verified successfully</div>
    )
    }
    </>
  )
}

export default App
