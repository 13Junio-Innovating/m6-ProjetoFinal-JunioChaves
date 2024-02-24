import { Navigate, Outlet } from "react-router";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { AmanhecerProvider } from "../../providers/AmanhecerContext";


export const PrivateRoutes = () => {
   const { user } = useContext(UserContext);

   return user ? <AmanhecerProvider><Outlet /></AmanhecerProvider> : <Navigate to="/" />;
};