import {Navbar} from "@/components/navar";
import {LoginForm} from "@/components/forms/login.form";

export default function Login() {
  return (
    <>
      <Navbar/>
      <div className="w-full flex h-100 items-center justify-center login-page" >
        <div className={"border rounded-md "} style={{width: '505px', height: '70%', padding: '2%', marginLeft: '5%'}}>
          <p className={"text-lg-r mb-10"}>Welcome !</p>
          <p className={"text-xl-b"}>Sign in to</p>
          <p className={"text-r mb-20"}>Lorem Ipsum is simply</p>
          <LoginForm/>
        </div>
        <div className={"w-full flex items-center justify-right"}>
          <img src={"/images/small-team-discussing-ideas.png"}/>
        </div>
      </div>
    </>
  );
}
