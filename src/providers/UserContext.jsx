import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState();
   const [loading, setLoading] = useState(false);

   const { state } = useLocation();

   const navigate = useNavigate();

   //acontece na inicialização
   const pathname = window.location.pathname;

   useEffect(() => {
      const token = localStorage.getItem("TOKEN");
      const userId = localStorage.getItem("userId"); 

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
            // setLoading(false);
         }
      }

      if(token && userId){
         getUser();
      }
   }, [])
   
   const userLogin = async (formData) => {
      const response = await api.post("/users/login", formData);
      setUser(response.data);
      localStorage.setItem("TOKEN", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      navigate(state?.lastRoute ? state.lastRoute : pathname);
   };
   

   const userRegister = async (formData) => {
      try {
         // setLoading(true);
         const response = await api.post("/users/register", formData); 
         setUser(response.formData)
         navigate("/");
         toast.success("Cadastro realizado com sucesso!");
      } catch (error) {
         console.log(error);
         if (error.response?.data === "Email already exists") {
            toast.error("Usuário já cadastrado");
         }
      } finally {
         // setLoading(false);
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