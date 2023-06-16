import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./components/register/Register";
import { Login } from "./components/login/Login";
import { handleGetUserData } from "./components/UserLogin";
import Menu from "./components/header/Menu";
import { AnimalCard } from "./components/animalCard/AnimalCard";
import Home from "./components/header/Home";
import AnimalList from "./pages/AnimalList";
import AnimalDetails from "./pages/AnimalDetails";
import NoticiasDetails from "./pages/NoticiasDetails";
import { UserContextProvider } from "context/UserContext";

// const handleLogout = () => {
//   localStorage.clear();
//   window.location.reload();
// };
// const user = handleGetUserData();
// const userRol = user?.roles?.map((rol) => rol.authority);

function App() {
  return (
    <div className="App">
      <Menu />

      <main>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={""} />
            <Route path="/login" element={<Login />} />
            <Route path="/AnimalList" element={<AnimalList />} />
            <Route path="/AnimalDetails" element={<AnimalDetails />} />
            <Route path="/NoticiaDetails" element={<NoticiasDetails />} />

            <Route path="/register" element={<Register />} />
            {/* ANIMAL DETAILS */}
            <Route path="/animal/:idAnimal" element={""} />
            {/* PROTEGIDAS */}
            <Route
              element={
                <ProtectedRoute
                  // isAllowed={userRol?.includes("Admin")}
                  redirectTo="/"
                />
              }
            >
              {/* RUTAS PROTEGIDAS */}
            </Route>
          </Routes>
        </UserContextProvider>
      </main>
    </div>
  );
}

export default App;
