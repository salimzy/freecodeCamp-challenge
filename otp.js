let generateOtp=() =>{
  const otpLength = 6
  const  otp =Math.floor(100000+Math.random()*900000);
  document.getElementById("DisplYOtp").innerText=`${otp}`;
  setTimeout(()=>{
    document.getElementById("otpDisplay").innerText="Expired";
    
  },15000);
  
};
document.getElementById("generateBtn").addEventListener('click',generateOtp);
window.addEventListener("load",generateOtp);
