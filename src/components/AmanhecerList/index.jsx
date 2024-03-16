import { AmanhecerContext } from "../../providers/AmanhecerContext"
import { ModalEdit } from "./Modal/modalEdit";
import { ContactCard } from "./AmanhecerCard/index";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
// import { loginFormSchema } from "../forms/LoginForm/loginFormSchema";

export const AmanhecerList = () => {
    const { amanhecerList } = useContext(AmanhecerContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      
      
    return(
        <section className={styles.amanhecerListSection}>
            <div>
                <h1 className="title">Lista de recado</h1>
                <button className="btn solid" onClick={openModal}>Clique aqui</button>
                <ModalEdit isOpen={isModalOpen} onRequestClose={closeModal} />
            </div>
            <ul>
                {amanhecerList.map(amanhecer => (
                <ContactCard key={amanhecer.id} amanhecer={amanhecer} />
                ))}
            </ul>
        </section>
    )
}

