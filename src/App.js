import { BrowserRouter as Router } from "react-router-dom";

// styles globally
import { GlobalStyle, Main } from "./styles/global";

// components
import Header from "./components/Header";

// routes config
import Routes from './routes'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Header />
      <Main>
        <Routes />
      </Main>
    </Router>
  );
}

export default App;
