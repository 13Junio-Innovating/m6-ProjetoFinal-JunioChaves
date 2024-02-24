import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { api } from "../../../services/api";


export const LoginForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset
   } = useForm({
      resolver: zodResolver(loginFormSchema),
   });

   const [loading, setLoading] = useState(false);  

   const { userLogin } = useContext(UserContext);

   const submit = async (formData) => {
      console.log(formData);
      try {
         setLoading(true);
         const { data } = await api.post("/amanhecer/login/", formData);  // Endpoint para login de usuário
         console.log(data);
         userLogin(formData, setLoading, reset); 
      } catch (error) {
         console.error(error);
         if (error.response?.data === "Incorrect password") {
            // Tratamento de erro
         }
      } finally {
         setLoading(false);
      }
   };
   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            label="Seu e-mail"
            type="email"
            {...register("email")}
            error={errors.email}
            disabled={loading}
         />
         <InputPassword
            label="Sua senha"
            {...register("password")}
            error={errors.password}
            disabled={loading}
         />
         <div>
            <Link className="link" to="/register" disabled={loading}>Cadastre-se</Link>
            <button className="btn outline" type="submit">
               {loading ? "acessando..." : "Acessar Amanhecer"}
            </button>
         </div>
      </form>
   );
};