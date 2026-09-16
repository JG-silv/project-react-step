import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
    // Children é o componente que será renderizado se o usuário estiver logado, 
    // Por que é um componente que está dentro de outro componente se tornando Filho, no caso o PrivateRoute.
   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
   return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
