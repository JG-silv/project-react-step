
import { ThemeProvider } from './components/aula12/ThemeContext';
import ThemeSwitcher from './components/aula12/ThemeSwitcher';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;
          
