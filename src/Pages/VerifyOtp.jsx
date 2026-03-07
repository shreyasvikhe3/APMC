import React,{useState} from "react";
import axios from "axios";
import {useLocation,useNavigate} from "react-router-dom";

export const VerifyOtp = ()=>{

 const [otp,setOtp]=useState("");

 const location = useLocation();
 const navigate = useNavigate();

 const email = location.state.email;

 const handleVerify = async(e)=>{

  e.preventDefault();

  await axios.post("http://localhost:8000/api/verify-otp",{
   email,
   otp
  });

  alert("OTP verified");

  navigate("/reset-password",{state:{email}});

 };

 return(

 <form onSubmit={handleVerify}>

 <input
 type="number"
 placeholder="Enter OTP"
 onChange={(e)=>setOtp(e.target.value)}
 />

 <button type="submit">Verify OTP</button>

 </form>

 );
};