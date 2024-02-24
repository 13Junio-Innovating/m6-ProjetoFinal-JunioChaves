import { useForm } from "react-hook-form"
import { Textarea } from "../Textearea"
import { useContext } from "react";
import { AmanhecerContext } from "../../../providers/AmanhecerContext";
import styles from "./style.module.scss";

export const EditAmanhecerForm = () => {
    const { editingAmanhecer, editAmanhecer } = useContext(AmanhecerContext);

    const { register, handleSubmit } = useForm({
        values: {
            content: editingAmanhecer.content
        }
    });   
    
    const submit = (formData) => {
        editAmanhecer(formData);
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
            <Textarea label="Sua mensagem" {...register("content")} />
            <button type="submit" className="btn solid">Editar a mensagem</button>
        </form>
    )
}