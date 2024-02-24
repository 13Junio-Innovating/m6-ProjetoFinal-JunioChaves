import { DefaultTemplate } from "../../components/DefaultTemplate";
import { AmanhecerList } from "../../components/AmanhecerList";
import styles from "./style.module.scss";

export const UserPage = () => {
   return (
      <DefaultTemplate>
         <main className={styles.userPage}>
            <div className="container">
               <AmanhecerList />
            </div>
         </main>
      </DefaultTemplate>
   );
};