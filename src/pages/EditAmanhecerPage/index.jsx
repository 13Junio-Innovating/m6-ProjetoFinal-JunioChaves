import { useContext } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { AmanhecerContext } from "../../providers/AmanhecerContext";
import { Navigate, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { EditAmanhecerForm } from "../../components/forms/EditAmanhecerForm";
import styles from "./style.module.scss";

export const EditAmanhecerPage = () => {
   const { editingAmanhecer, setEditingAmanhecer } = useContext(AmanhecerContext);

   const navigate = useNavigate();

   return editingAmanhecer ? (
      <DefaultTemplate>
         <main className={styles.editAmanhecerPage}>
            <div className="container sm">
               <button
                  onClick={() => {
                     setEditingAmanhecer(null);
                     navigate("/users/id");
                  }}
                  className="link"
                  to="/users"
               >
                  <MdArrowBack /> voltar
               </button>
               <h1 className="title center">Altere um recado</h1>
               <EditAmanhecerForm />
            </div>
         </main>
      </DefaultTemplate>
   ) : (
      <Navigate to="/users" />
   );
};