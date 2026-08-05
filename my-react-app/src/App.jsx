import ButtonCSS from './components/ButtonCSS';
import ButtonInline from './components/ButtonInline';
import ButtonStyled from './components/ButtonStyled';
import TailwindButton from "./components/TailwindButton";

//O App.jsx gerencia o estado isLoggedIn e altera o texto do botão com ternário: {isLoggedIn ? 'Logout' : 'Login'}. 
// Quando o estado muda, tanto o App quanto o LoginStatus (que recebe a prop) são re-renderizados.

function App() {
  return (
    <div>
      <h1>Botão com CSS Externo</h1>
      <ButtonCSS label="CSS Externo" />
      <h1>Botão com Inline Styles</h1>
      <ButtonInline label="Primário" primary />
      <ButtonInline label="Secundário" />
      <h1>Botão com Styled Components</h1>
      <ButtonStyled label="Primário" primary />
      <ButtonStyled label="Secundário" />
      <h1>Botão com Tailwind CSS</h1>
      <TailwindButton label="Botão" />
    </div>
  );
}

export default App;