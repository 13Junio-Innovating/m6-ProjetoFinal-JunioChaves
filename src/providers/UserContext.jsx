import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(false);

   const { state } = useLocation();

   const navigate = useNavigate();

   //acontece na inicialização
   const pathname = window.location.pathname;

   useEffect(() => {
      const token = localStorage.getItem("@TOKEN");
      const userId = localStorage.getItem("@USERID");      

      const getUser = async () => {
         try{
            setLoading(true);
            const { data } = await api.get(`/users/${userId}`, {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            });
            setUser(data);
            navigate(pathname);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      }

      if(token && userId){
         getUser();
      }
   }, [])

   const userLogin = async (formData, setLoading, reset) => {
      try {
         setLoading(true);
         const { data } = await api.post("/api/amanhecer/login/", formData);
         // const { data } = await api.post("/login", formData);
         console.log(data);
         setUser(data.user);
         localStorage.setItem("@TOKEN", data.accessToken);
         localStorage.setItem("@USERID", data.user.id);
         reset();
         navigate(state?.lastRoute ? state.lastRoute : pathname);
      } catch (error) {
         console.log(error);
         if (error.response?.data === "Incorrect password") {
            toast.error("O e-mail e a senha não correspondem.");
         }
      } finally {
         setLoading(false);
      }
   };

   const userRegister = async (formData, setLoading) => {
      try {
         setLoading(true);
         await api.post("/api/amanhecer/users/", formData); 
         // await api.post("/users", formData);
         navigate("/");
         toast.success("Cadastro realizado com sucesso!");
      } catch (error) {
         console.log(error);
         if (error.response?.data === "Email already exists") {
            toast.error("Usuário já cadastrado");
         }
      } finally {
         setLoading(false);
      }
   };

   const userLogout = () => {
      setUser(null);
      navigate("/");
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
      toast.warning("Deslogando...")
   };

   return (
      <UserContext.Provider value={{ loading, user, userLogin, userRegister, userLogout }}>
         {children}
      </UserContext.Provider>
   );
};