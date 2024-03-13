import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Input } from "../../forms/Input/index";
import styles from "./style.module.scss" 

export const ModalEdit = ({ isOpen, onRequestClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={styles.modalHeader} >
        <h2>Deixe o seu contato</h2>
        <button className="btn outline" onClick={onRequestClose}>X</button>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Seu nome"
          type="email"
        //   defaultValue={formData.email}
          {...register("email", { required: "Este campo é obrigatório" })}
          error={errors.email}
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
