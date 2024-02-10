import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// app.get("/",(req,res)=>{
//   let suggest1=req.query.suggest;
//   res.render('index',{suggest:suggest1})
// })

//  // Handle POST request to "/sign-up" for user registration/signup
// app.post("/sign-up", async (req,res)=>{
//     const userEmail=req.body.email;
//     const userPassword=req.body.password;
//     try{
//         const existingUser= await User.findOne({email :userEmail})
//         if(existingUser)
//         {
//            res.redirect("/?suggest=User all ready exist");

//         }else{
//           const otp= otp1.otp_generate();
//           mail.send_mail(userEmail,otp);

//             ob.otp = otp
//             ob.email = userEmail
//             ob.password = userPassword
//             console.log("3...")
//             res.render('verify_otp',{otp1:"otp send successfully ",email:userEmail,redirect:"/signup/dashboard"});
         
//       }
//     }
//     catch(error)
//     {
//       console.log(error);
//      res.status(404).send("<h1>Error occur</h1>")
//     }  
// })
//  // Handle POST request to "/login" for user login
// app.post("/login",async (req,res)=>{
//   const email=req.body.email;
//     const userPassword=req.body.password;
    
//     try{
//       const validemail= await User.findOne({email :email})
//       if(validemail)
//       {
//         if(validemail.password ==userPassword)
//         {
//           const otp = otp1.otp_generate();
//           await User.findOneAndUpdate({ email }, { otp });
//           mail.send_mail(email,otp);
//           res.status(200).render('verify_otp',{otp1:"otp send successfully ",email:email,redirect:"/login/dashboard"});
//         }
//         else{ 
//           res.redirect("/?suggest=Invalid  password"); 
//         }
//       }
//       else{
//         res.redirect("/?suggest=Invalid email");
//       }

//     }catch(error)
//     {
//      res.status(404).send("<h1>Error occur</h1>")
//     }
  
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
