import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { handleGetUserData } from "./components/UserLogin";

const handleLogout = () => {
  localStorage.clear();
  window.location.reload();
};

const user = handleGetUserData();
const userRol = user?.roles?.map((rol) => rol.authority);

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
          <Route
            element={
              <ProtectedRoute
                isAllowed={userRol?.includes("Admin")}
                redirectTo="/"
              />
            }
          >
            {/* RUTAS PROTEGIDAS */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
