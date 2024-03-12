import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { ErrorPage } from "../pages/ErrorPage";
import { PrivateRoutes } from "./PriveteRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { EditAmanhecerPage } from "../pages/EditAmanhecerPage";
import { CreateAmanhecerPage } from "../pages/CreateAmanhecerPage";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route element={<PublicRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
         </Route>

         <Route element={<PrivateRoutes />}>
            <Route path="/users" element={<UserPage />} />
            <Route path="/users/create" element={<CreateAmanhecerPage />} /> 
            <Route path="/users/edit" element={<EditAmanhecerPage />} />
         </Route>

         <Route path="*" element={<ErrorPage />} />
      </Routes>
   );
};


// import { Route, Routes } from "react-router-dom";
// import { HomePage } from "../pages/HomePage";
// import { RegisterPage } from "../pages/RegisterPage";
// import { UserPage } from "../pages/UserPage";
// import { ErrorPage } from "../pages/ErrorPage";
// import { PrivateRoutes } from "./PriveteRoutes";
// import { PublicRoutes } from "./PublicRoutes";
// import { EditAmanhecerPage } from "../pages/EditAmanhecerPage";
// import { CreateAmanhecerPage } from "../pages/CreateAmanhecerPage";

// export const RoutesMain = () => {
//    return (
//       <Routes>
//          {/* Rotas que somente usuários DESLOGADOS conseguirão acessar */}
//          <Route element={<PublicRoutes />}>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/register" element={<RegisterPage />} />
//          </Route>

//          {/* Rotas que somente usuários LOGADOS conseguirão acessar */}
//          <Route element={<PrivateRoutes />}>
//             <Route path="/user" element={<UserPage />} />
//             <Route path="/user/create" element={<CreateAmanhecerPage />} /> 
//             <Route path="/user/edit" element={<EditAmanhecerPage />} />
//          </Route>

//          <Route path="*" element={<ErrorPage />} />
//       </Routes>
//    );
// };