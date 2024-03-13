import { AmanhecerContext } from "../../providers/AmanhecerContext"
import { ModalEdit } from "./Modal/modalEdit";
import { ContactCard } from "./AmanhecerCard/index";
import React, { useContext, useState } from "react";
import styles from "./style.module.scss";

export const AmanhecerList = () => {
    const { amanhecerList } = useContext(AmanhecerContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      const onSubmit = (formData) => {
        // Adicione a lógica para enviar os dados ou chamar a função createAmanhecer aqui
        createAmanhecer(formData);
    
        // Feche o modal após o envio bem-sucedido
        closeModal();
      };

    return(
        <section className={styles.amanhecerListSection}>
            <div>
                <h1 className="title">Lista de recado</h1>
                {/* <Link className="btn solid" to="/users/create">Deixar recado</Link> */}
                <button className="btn solid" onClick={openModal}>Clique aqui</button>
                <ModalEdit isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={onSubmit} />
            </div>
            <ul>
                {amanhecerList.map(amanhecer => (
                <ContactCard key={amanhecer.id} amanhecer={amanhecer} />
                ))}
            </ul>
        </section>
    )
}

