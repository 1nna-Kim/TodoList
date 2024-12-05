import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './themes';
import { Layout } from './components/Layout';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Title>Список задач</Title>
          <TodoList />
        </Layout>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
