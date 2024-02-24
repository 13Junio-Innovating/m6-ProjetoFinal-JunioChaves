import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { CreateAmanhecerForm } from "../../components/forms/CreateAmanhecerForm";
import styles from "./style.module.scss";

export const CreateAmanhecerPage = () => {
   return (
      <DefaultTemplate>
         <main className={styles.createAmanhecerPage}>
            <div className="container sm">
               <Link className="link" to="/user">
                  <MdArrowBack /> voltar
               </Link>
               <h1 className="title center">Deixe um scrap</h1>
               <CreateAmanhecerForm />
            </div>
         </main>
      </DefaultTemplate>
   );
};