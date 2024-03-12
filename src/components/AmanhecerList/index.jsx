import { useContext } from "react"
import { Link } from "react-router-dom"
import { AmanhecerContext } from "../../providers/AmanhecerContext"
import { ContactCard } from "./AmanhecerCard/index";
import styles from "./style.module.scss";

export const AmanhecerList = () => {
    const { amanhecerList } = useContext(AmanhecerContext);
    return(
        <section className={styles.amanhecerListSection}>
            <div>
                <h1 className="title">Lista de recado</h1>
                <Link className="btn solid" to="/users/create">Deixar recado</Link>
            </div>
            <ul>
                {amanhecerList.map(amanhecer => (
                    <ContactCard key={amanhecer.id} amanhecer={amanhecer} />
                ))}
            </ul>
        </section>
    )
}