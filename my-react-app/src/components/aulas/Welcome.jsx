const Welcome = ({ name }) => {
  const saudacao = () => {
    return `<h2>Olá, ${name}! Bem-vindo ao nosso site.</h2>`;
  };

  return (
    <>
      <div>
        <h1>Bem-vindo, {name}!</h1>
      </div>
      <button onClick={saudacao}>Exibir Saudação</button>
    </>
  );
};

export default Welcome;
