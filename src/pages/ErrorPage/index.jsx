import { useEffect } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
   const navigate = useNavigate();

   useEffect(() => {
      setTimeout(() => {
         navigate("/")
      }, 3000)
   }, []);
   
   return (
      <main>
         <h1>Erro: 404</h1>
         <p>Não foi possível encontrar a página!</p>
      </main>
   );
};