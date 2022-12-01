import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./App.css"
// прибрав звідси навбар, краще додати на кожну сторінку окремо для стилів
function App() {
  return (
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
  );
}

export default App;
