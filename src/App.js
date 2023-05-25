import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { handleGetUserData } from "./components/UserLogin";
import Menu from "./components/header/Menu";
import { AnimalCard } from "./components/animalCard/AnimalCard";

const handleLogout = () => {
  localStorage.clear();
  window.location.reload();
};
const user = handleGetUserData();
const userRol = user?.roles?.map((rol) => rol.authority);

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <h1 className="Header-title">
          Bienvenidos <br />a <Link to="/">ZOOBITAT</Link>
        </h1>
        <p id="Header-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt et
          voluptatibus, incidunt facere quibusdam enim?
        </p>
        <AnimalCard />
      </header>
      <main>
        <AnimalCard />
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
