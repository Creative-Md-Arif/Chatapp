import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="bg-[#F0F2F5] h-[100vh]">
        <div className="container flex flex-col justify-center items-center h-[100%]">
           <div className="registration border border-white rounded-xl bg-white pt-4 pb-6 px-7 ">
           <div className="text-center pb-8">
             <h3 className=" text-blue-500 font-primary font-bold text-[24px] pb-4">Login</h3>
             <p  className=" font-primary font-normal text-black text-[16px]">Free register and you can enjoy it</p>
            </div>
            <form className="flex flex-col w-[400px] gap-5">
                <input type="text" placeholder="Full Name"
                 className="py-3 pl-2   border border-[#DDDFE2] rounded-md" />
                <input type="email" placeholder="E-mail" 
                className="py-3 pl-2   border border-[#DDDFE2] rounded-md" />
                <button className="text-center font-primary text-primary font-bold py-3 bg-[blue] rounded-md text-[] ">Sign In</button>
                <span className="text-center border-b-2 pb-4"><Link to="/">Forgotten password</Link></span>
                <p className="text-center font-primary font-normal text-[#1C8AC6]">
                 Alerady Have an account ? {""}
                 <Link className=" font-primary font-normal text-black" to="/registration">Create new account</Link>
                </p>
            </form>
            <div>
            </div>
           </div>
        </div>
    </section>
    );
};

export default Login;