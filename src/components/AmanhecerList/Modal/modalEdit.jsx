/* eslint-disable react/prop-types */
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Input } from "../../forms/Input/index";
import styles from "./style.module.scss" 
import { useContext } from "react";
import { AmanhecerContext } from "../../../providers/AmanhecerContext";



export const ModalEdit = ({ isOpen, onRequestClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const { createAmanhecer } = useContext(AmanhecerContext);
  
  
  const onSubmit = async (formData) => {
    // Adicione a lógica para enviar os dados ou chamar a função createAmanhecer aqui
   await createAmanhecer(formData);

    // Feche o modal após o envio bem-sucedido
    onRequestClose();
  };


  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={styles.modalHeader} >
        <h2>Deixe o seu contato</h2>
        <button className="btn outline" onClick={onRequestClose}>X</button>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Seu nome"
          type="name"
          // defaultValue={formData.name}
          {...register("name", { required: "Este campo é obrigatório" })}
          error={errors.name}
        />

        <Input
          label="Seu número de telefone"
          type="text"
        //   defaultValue={formData.phone}
          {...register("phone", { required: "Este campo é obrigatório" })}
          error={errors.phone}
        />

        <Input
          label="Seu e-mail alternativo"
          type="email"
        //   defaultValue={formData.email}
          {...register("email", { required: "Este campo é obrigatório" })}
          error={errors.email}
        />

        <div className={styles.button}>
          <button className="btn outline close" type="button" onClick={onRequestClose}>
            Cancelar
          </button>
          <button className="btn outline" type="submit">Confirmar</button>
        </div>
      </form>
    </Modal>
  );
};



// import React from "react";
// import Modal from "react-modal";
// import { useForm } from "react-hook-form";
// import { Input } from "../../forms/Input/index"; 

// export const ModalEdit = ({ isOpen, onRequestClose, onSubmit }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
//       <h2>Deixe o seu contato</h2>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Input
//           label="Seu nome"
//           type="name"
//           {...register("name", { required: "Este campo é obrigatório" })}
//           error={errors.email}
//         />

//         <Input
//           label="Seu número de telefone"
//           type="text"
//           {...register("phone", { required: "Este campo é obrigatório" })}
//           error={errors.phone}
//         />

//         <Input
//           label="Seu e-mail alternativo"
//           type="email"
//           {...register("email", { required: "Este campo é obrigatório" })}
//           error={errors.email}
//         />

//         <div>
//           <button type="button" onClick={onRequestClose}>
//             Cancelar
//           </button>
//           <button type="submit">Confirmar</button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default ModalEdit;
