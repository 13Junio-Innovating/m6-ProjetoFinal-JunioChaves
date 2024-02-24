import { useContext } from "react"
import { Link } from "react-router-dom"
import { AmanhecerContext } from "../../providers/AmanhecerContext"
import { AmanhecerCard } from "./AmanhecerCard";
import styles from "./style.module.scss";

export const AmanhecerList = () => {
    const { amanhecerList } = useContext(AmanhecerContext);
    return(
        <section className={styles.amanhecerListSection}>
            <div>
                <h1 className="title">Lista de recado</h1>
                <Link className="btn solid" to="/user/create">Deixar recado</Link>
            </div>
            <ul>
                {amanhecerList.map(amanhecer => (
                    <AmanhecerCard key={amanhecer.id} amanhecer={amanhecer} />
                ))}
            </ul>
        </section>
    )
}