import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const AmanhecerContext = createContext({});

// localStorage.setItem("userId", response.data.userId);

export const AmanhecerProvider = ({ children }) => {
   const { user } = useContext(UserContext);

   const [amanhecerList, setAmanhecerList] = useState([]);
   const [editingAmanhecer, setEditingAmanhecer] = useState(null);

   const navigate = useNavigate();

   useEffect(() => {
      const getAmanhecer = async () => {
         try {
            const { data } = await api.get(`/contact/${id}`); 
            console.log('cheguei aqui', data);
            setAmanhecerList(data);
         } catch (error) {
            console.log(error);
         }
      };
      getAmanhecer();
   }, []);
   
   const createAmanhecer = async (formData) => {
      try {
         const token = localStorage.getItem("TOKEN");

         const newAmanhecer = {
            author: user.name,
            email: user.email,
            userId: user.id,
            ...formData,
         };

         //Atualizando o servidor (back-end)
         const { data } = await api.post(`/contact/${id}`, newAmanhecer, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         //Atualizar o front-end com manipulação de estado
         setAmanhecerList([...amanhecerList, data ]);

         toast.success("Adicionado com sucesso!");

         navigate(`/contact/${id}`); 
      } catch (error) {
         console.log(error);
      }
   };

   const deleteAmanhecer = async (deletingId) => {
      try {
         const token = localStorage.getItem("TOKEN");

         await api.delete(`/contact/${deletingId}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })

         const newAmanhecerList = amanhecerList.filter(amanhecer => amanhecer.id !== deletingId);
         setAmanhecerList(newAmanhecerList);
         toast.success("Excluido com sucesso!");
      } catch (error) {
         console.log(error);
      }
   }

   const editAmanhecer = async (formData) => {
      try {
         const token = localStorage.getItem("TOKEN");
         
         const { data } = await api.patch(`/contact/${editingAmanhecer.id}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })

         const newAmanhecerList = amanhecerList.map(amanhecer => {
            //Uma nota que eu quero mudar
            if(amanhecer.id === editingAmanhecer.id){
               return data;
            } else {
               return amanhecer;
            }
         })

         setAmanhecerList(newAmanhecerList);         
         setEditingAmanhecer(null);

         toast.success("Editado com sucesso!");

         navigate("/user");


      } catch (error) {
         console.log(error)
      }
   }

   return <AmanhecerContext.Provider value={{ amanhecerList, createAmanhecer, deleteAmanhecer, editAmanhecer, editingAmanhecer, setEditingAmanhecer }}>{children}</AmanhecerContext.Provider>;
};
