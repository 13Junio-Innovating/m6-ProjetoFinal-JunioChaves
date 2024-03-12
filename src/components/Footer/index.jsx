import Logo from "../../assets/LogoWhite.svg";
import styles from "./style.module.scss";

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Amanhecer" />
               <p className="paragraph white">
                  &copy; Todos os direitos reservados - Junio Chaves
               </p>
            </div>
         </div>
      </footer>
   );
};