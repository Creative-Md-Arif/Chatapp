/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";



const Registration = () => {
let [name , setName] = useState("");
let [email, setEmail] = useState ("");
let [password , setPassword] = useState ("");
const [userError , setUserError] = useState ({
    nameError : '',
    emailError : '',
    passwordError  : '',
});


const auth = getAuth();



const handleSubmit = ()=> {
    
    if(!name){
        console.log("Name Is Required");
    }    

    createUserWithEmailAndPassword( auth , email, password)
      .then(() => {
         console.log("Registration Successful!");
      })
      .catch((error) => {
        console.log(error.code);
      });

};


    return (
        <section className="bg-[#F0F2F5] h-[100vh]">
            <div className="container flex flex-col justify-center items-center h-[100%]">
               <div className="registration border border-white rounded-xl bg-white pt-4 pb-6 px-7 ">
               <div className="text-center pb-8">
                 <h3 className=" text-blue-500 font-primary font-bold text-[24px]">Get started with easily register</h3>
                 <p className=" font-primary font-normal text-black text-[16px]">Free register and you can enjoy it</p>
                </div>
                <div className="flex flex-col w-[400px] gap-5">
                    <input onChange={ (e) => setName (e.target.value)}
                     type="text"
                     placeholder="Full Name"
                     className="py-3 pl-2 border border-[#DDDFE2] rounded-md" />

                    <input onChange={ (e) => setEmail (e.target.value)}
                     type="email"
                     placeholder="E-mail" 
                     className="py-3 pl-2 border border-[#DDDFE2] rounded-md" />

                    <input onChange={ (e) => setPassword (e.target.value)}
                     type="text"
                     placeholder="Password"
                     className="py-3 pl-2 border border-[#DDDFE2] rounded-md"/>
                    <button onClick={handleSubmit} className="text-center font-primary text-primary font-bold py-3 bg-[blue] rounded-md ">Sign Up</button>
                    <p className="text-center text-[#1C8AC6]">
                        Alerady Have an account ? {""}
                        <Link className="text-black" to="/login">Sign In</Link>
                    </p>
                </div>
                <div>
                </div>
               </div>
            </div>
        </section>
    );
};

export default Registration;