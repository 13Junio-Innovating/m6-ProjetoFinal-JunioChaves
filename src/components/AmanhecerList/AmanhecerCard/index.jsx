import { useContext } from "react";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../providers/UserContext";
import { AmanhecerContext } from "../../../providers/AmanhecerContext";
import styles from "./style.module.scss";

export const ContactCard = ({ amanhecer }) => {
   const { user } = useContext(UserContext);

   const navigate = useNavigate();

   const { deleteAmanhecer, setEditingAmanheder } = useContext(AmanhecerContext);

   return (
      <li className={styles.contactCard}>
         <div>
            <span className="paragraph">
               <strong>{amanhecer.author}</strong> {amanhecer.email}
            </span>
            <p className="paragraph">{amanhecer.content}</p>
         </div>
         <div>
            {user.id === amanhecer.userId ? (
               <>
                  <button
                     onClick={() => {
                        setEditingAmanheder(amanhecer);
                        navigate("/user/edit");
                     }}
                     title="Editar"
                     aria-label="edit"
                  >
                     <MdOutlineEdit size={30} />
                  </button>
                  <button
                     onClick={() => deleteAmanhecer(amanhecer.id)}
                     title="Remover"
                     aria-label="remove"
                  >
                     <MdOutlineDelete size={30} />
                  </button>
               </>
            ) : null}
         </div>
      </li>
   );
};