import { LoginForm } from "../../components/forms/LoginForm";
import pageStyles from "../../styles/modules/pageBox.module.scss";
import styles from "./style.module.scss";
import Logo from "../../assets/Logo.jpg";

export const HomePage = () => {
   return (
      <main className={pageStyles.pageBox}>
         <div className="container sm">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Amanhecer" />
               <LoginForm />
            </div>
         </div>
      </main>
   );
};