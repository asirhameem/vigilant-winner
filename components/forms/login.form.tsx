'use client'
import {useState} from "react";
import axiosInstance from "@/utils/request.helper";
import { redirect } from 'next/navigation';

export const LoginForm = () => {
  // const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const changeRoute = (url: string) => {
    // router.push(url);
  }
  const fetchUserInfo = async (email: string, password: string) => {
    const response : any = await axiosInstance.post("/users/login", {email: email, password: password});
    console.log(response?.data?.success);
    if (response?.data?.success) {
      redirect("/profile");
    }
  }

  return (
    <>
      <div className={"block"}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            value={email} onChange={handleEmailChange}
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="text" placeholder="Enter your email here" />
            {/*<p className="text-red-500 text-xs italic">Please provide a valid email.</p>*/}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            value={password} onChange={handlePasswordChange}
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="******************" />
          {/*<p className="text-red-500 text-xs italic">Please choose a password.</p>*/}
        </div>

        <button
          onClick={() => fetchUserInfo(email, password)}
          className="w-full bg-black hover:bg-dark-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </>
  );
};
