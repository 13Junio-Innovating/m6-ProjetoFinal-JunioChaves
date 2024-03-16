import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const AmanhecerContext = createContext({});

export const AmanhecerProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [amanhecerList, setAmanhecerList] = useState([]);
  const [editingAmanhecer, setEditingAmanhecer] = useState(null);

  useEffect(() => {
    const getAmanhecer = async () => {
      try {
        const token = localStorage.getItem("TOKEN");
        const userId = localStorage.getItem("userId");
        console.log(userId);

        const { data } = await api.get(`/contact/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAmanhecerList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAmanhecer();
  }, [user]);

  const createAmanhecer = async (formData) => {
    try {
      const token = localStorage.getItem("TOKEN");

      const newAmanhecer = {
        userId: user.id,
        name: user.name,
        email: user.email,
        ...formData,
      };
      const { data } = await api.post(`/contact`, newAmanhecer, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAmanhecerList([...amanhecerList, data]);
      localStorage.setItem("userId", data.id);
      toast.success("Adicionado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAmanhecer = async (deletingId) => {
    try {
      const token = localStorage.getItem("TOKEN");
      await api.delete(`/contact/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newAmanhecerList = amanhecerList.filter(
        (amanhecer) => amanhecer.id !== deletingId
      );
      setAmanhecerList(newAmanhecerList);
      toast.success("Excluido com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const editAmanhecer = async (formData) => {
    try {
      const token = localStorage.getItem("TOKEN");
      const { data } = await api.patch(
        `/contact/${editingAmanhecer.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newAmanhecerList = amanhecerList.map((amanhecer) => {
        if (amanhecer.id === editingAmanhecer.id) {
          return data;
        } else {
          return amanhecer;
        }
      });
      setAmanhecerList(newAmanhecerList);
      setEditingAmanhecer(null);
      toast.success("Editado com sucesso!");
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AmanhecerContext.Provider
      value={{
        amanhecerList,
        editingAmanhecer,
        createAmanhecer,
        deleteAmanhecer,
        editAmanhecer,
        setEditingAmanhecer,
      }}
    >
      {children}
    </AmanhecerContext.Provider>
  );
};
