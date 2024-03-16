import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState();

   const { state } = useLocation();

   const navigate = useNavigate();

   //acontece na inicialização
   const pathname = window.location.pathname;

   useEffect(() => {
      const token = localStorage.getItem("TOKEN");
      const userId = localStorage.getItem("userId"); 

      const getUser = async () => {
         try{
            const { data } = await api.get(`/users/${userId}`, {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            });
            setUser(data);
            navigate(pathname);
         } catch (error) {
            console.log(error);
         }
      }

      if(token && userId){
         getUser();
      }
   }, [])
   
   const userLogin = async (formData) => {
      const response = await api.post("/users/login", formData);
      setUser(response.data);
   
      const {token, userId} = response.data.token;
      window.localStorage.setItem("TOKEN", token);
      window.localStorage.setItem("userId", userId);
      navigate(state?.lastRoute ? state.lastRoute : pathname);
   };
   

   const userRegister = async (formData) => {
      try {
         const response = await api.post("/users/register", formData); 
         setUser(response.formData)
         navigate("/");
         toast.success("Cadastro realizado com sucesso!");
      } catch (error) {
         console.log(error);
         if (error.response?.data === "Email already exists") {
            toast.error("Usuário já cadastrado");
         }
      } 
   };

   const userLogout = () => {
      setUser(null);
      navigate("/");
      localStorage.removeItem("TOKEN");
      localStorage.removeItem("userId");
      toast.warning("Deslogando...")
   };

   return (
      <UserContext.Provider value={{ user, userLogin, userRegister, userLogout }}>
         {children}
      </UserContext.Provider>
   );
};