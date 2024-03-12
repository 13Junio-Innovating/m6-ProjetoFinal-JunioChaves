import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormShema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { api } from "../../../services/api";

export const RegisterForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid, isDirty },
   } = useForm({      
      resolver: zodResolver(registerFormSchema),
   });

   // const [loading, setLoading] = useState(false);
  
   const { userRegister } = useContext(UserContext);

   const submit = async (formData) => {
      await userRegister(formData)

      // console.log(formData);
      // try {
      //    setLoading(true);
      //    await api.post("/users/register", formData);  // Endpoint para registro de usuário
      //    // console.log(api);
      //    userRegister(formData, setLoading);
      // } catch (error) {
      //    console.error(error);
      // } finally {
      //    setLoading(false);
      // }
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            label="Seu nome"
            type="text"
            {...register("name")}
            error={errors.name}
         
         />

         <Input
            label="Seu e-mail"
            type="email"
            {...register("email")}
            error={errors.email}
         
         />

         <InputPassword
            label="Crie uma senha"
            {...register("password")}
            error={errors.password}
         
         />

         <InputPassword
            label="Confirme a senha"
            {...register("confirmPassword")}
            error={errors.confirmPassword}
         
         />

         <Input
            label="Seu número de telefone"
            type="text"
            {...register("phones")}
            error={errors.phones}
         
         />

         {/* <Input
            label="Seu e-mail alternativo"
            type="email"
            {...register("alternateEmail")}
            error={errors.alternateEmail}
            disabled={loading}
         /> */}

         <div>
            <Link className="link" to="/users/login">
               Login
            </Link>
            <button type="submit" className="btn outline" >
               {/* {loading ? "Cadastrando..." : "Cadastrar"} */}
               Cadastrar
            </button>
         </div>
      </form>
   );
};



// export const RegisterForm = () => {
//    const {
//       register,
//       handleSubmit,
//       formState: { errors, isValid, isDirty },
//    } = useForm({      
//       resolver: zodResolver(registerFormSchema),
//    });

//    const [loading, setLoading] = useState(false);
  
//    const { userRegister } = useContext(UserContext);

//    const submit = async (formData) => {
//       console.log(formData);
//       try {
//          setLoading(true);
//          await api.post("/amanhecer/users/", formData);  // Endpoint para registro de usuário
//          console.log(formData);
//          userRegister(formData, setLoading);
//       } catch (error) {
//          console.error(error);
//       } finally {
//          setLoading(false);
//       }
//    };

//    return (
//       <form onSubmit={handleSubmit(submit)}>
//          <Input
//             label="Seu nome"
//             type="text"
//             {...register("name")}
//             error={errors.name}
//             disabled={loading}
//          />

//          <Input
//             label="Seu e-mail"
//             type="email"
//             {...register("email")}
//             error={errors.email}
//             disabled={loading}
//          />

//          <InputPassword
//             label="Crie uma senha"
//             {...register("password")}
//             error={errors.password}
//             disabled={loading}
//          />

//          <InputPassword
//             label="Crie uma senha"
//             {...register("confirmPassword")}
//             error={errors.confirmPassword}
//             disabled={loading}
//          />

//          <div>
//             <Link className="link" to="/">
//                Login
//             </Link>
//             <button className="btn outline" disabled={!isValid || !isDirty}>
//                {loading ? "Cadastrando..." : "Cadastrar"}
//             </button>
//          </div>
//       </form>
//    );
// };