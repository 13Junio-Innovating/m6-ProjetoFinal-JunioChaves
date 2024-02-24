import { useForm } from "react-hook-form"
import { Textarea } from "../Textearea"
import { useContext } from "react";
import { AmanhecerContext} from "../../../providers/AmanhecerContext";
import styles from "./style.module.scss";

export const CreateAmanhecerForm = () => {
    const { register, handleSubmit } = useForm();

    const { createAmanhecer } = useContext(AmanhecerContext);
    
    const submit = (formData) => {
        createAmanhecer(formData);
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
            <Textarea label="Sua mensagem" {...register("content")} />
            <button type="submit" className="btn solid">Deixar uma mensagem</button>
        </form>
    )
}