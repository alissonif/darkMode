import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {ToggleButton} from './ToggleButton';
import { GlobalStyle } from './createGlobalStyle';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={{ darkMode }}>
      <ToggleButton darkMode={darkMode} handleToggleClick={handleToggleClick} />
      <GlobalStyle darkMode={darkMode} />
      <h1>Meu aplicativo</h1>
      <p>Este é o meu aplicativo React com modo claro/escuro.</p>
    </ThemeProvider>
  );
};

export default App;
