import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "./contexts/AppContext";
import { darkTheme, lightTheme } from "./themes";
import { Container, OutletContainer } from "./styles";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Header />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
