import React from "react";

const LoginStatus = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ?  (
                <h1>Bem-Vindo de Volta, Usuário!</h1>
            ) : (
                <h1>Por favor, faça login.</h1>
            )}
        </div>
    );
};

export default LoginStatus;
