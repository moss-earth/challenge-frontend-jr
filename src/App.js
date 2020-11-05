import Router from './router/Router'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#98A632',
    },
    secondary: {
      main: '#2A402C',
      light: '#ECF22E'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router/>
      </div>
    </ThemeProvider>
  );
}

export default App;
