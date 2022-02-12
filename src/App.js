import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
