export const LoginForm = () => {
  return (
    <>
      <div className={"block"}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="text" placeholder="Enter your email here" />
            <p className="text-red-500 text-xs italic">Please provide a valid email.</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="******************" />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>

        <button className="w-full bg-black hover:bg-dark-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </>
  );
};
