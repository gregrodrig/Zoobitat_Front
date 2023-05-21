import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Link to="/">HEADER</Link>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={""} />
          <Route path="*" element={""} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ANIMAL DETAILS */}
          <Route path="/animal/:idAnimal" element={""} />
          {/* PROTEGIDAS */}
          <Route element={<ProtectedRoute isAllowed={""} redirectTo="/" />}>
            {/* RUTAS PROTEGIDAS */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
