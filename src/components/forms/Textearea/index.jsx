import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Textarea = forwardRef(({ error, label, ...rest}, ref) => {
    return (
        <div className={styles.textareaBox}>
           <label className="label">{label}</label>
           <textarea ref={ref} {...rest} />
           {error ? <p className="paragraph">{error.message}</p> : null}
        </div>
     );
});