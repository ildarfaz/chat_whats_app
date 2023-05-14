import { useRef } from "react";

export const Login = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const tokenRef = useRef<HTMLInputElement>(null);
  const handlerAuth = () => {
    const idValue = idRef.current?.value;
    const tokenValue = tokenRef.current?.value;
    if (idValue && tokenValue) {
      console.log(idValue, tokenValue);
    }
  };
  return (
    <div className="bg-gray-10 ">
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            Вход
          </h1>

          <div className="w-3/4 mb-6">
            <input
              type="text"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="IdInstance"
              ref={idRef}
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="ApiTokenInstance"
              ref={tokenRef}
            />
          </div>
          <div className="w-3/4 mt-4">
            <button
              type="submit"
              className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
              onClick={handlerAuth}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
