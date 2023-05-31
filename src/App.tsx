import { Login } from "./components/login/Login";
import { Wrapper } from "./components/wrapper/Wrapper";
import {  Route, Routes, useLocation, useNavigate } from "react-router-dom";

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Wrapper />} />
    </Routes>
  );
};
