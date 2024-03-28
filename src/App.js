import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route react path="/" element={<Create />}></Route>
          <Route react path="/read" element={<Read />}></Route>
          <Route react path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
