
import ThemedCard from './ThemedCard';

function App() {
  return (
    <div>
      <ThemedCard
        title="Card Claro"
        description="Tema claro"
        theme="light"
      />
      <ThemedCard
        title="Card Escuro"
        description="Tema escuro"
        theme="dark"
      />
    </div>
  );
}

export default App;
                