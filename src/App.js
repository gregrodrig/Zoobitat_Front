import React, { createContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./components/register/Register";
import { Login } from "./components/login/Login";
import Menu from "./components/header/Menu";
import Home from "./components/header/Home";
import AnimalDetails from "./pages/AnimalDetails";
import NoticiasDetails from "./pages/NoticiasDetails";
import AnimalListView from "pages/animalListView/AnimalListView";
import Actividades from "./pages/Actividades";
import Habitat from "./pages/Habitat";
import Contacto from "./pages/Contacto";
import HabitatDetails from "pages/HabitatDetails";
import ActividadDetails from "pages/ActividadesDetails";
import { AnimalListPage } from "pages/Animales/AnimalListPage";
import { AnimalFormPage } from "pages/Animales/AnimalFormPage";
import { UserList } from "pages/usuarios/UserList";
import { AsignacionForm } from "pages/asignaciones/AsignacionForm";
import { AsignacionList } from "pages/asignaciones/AsignacionList";
import MapaView from "pages/mapa/MapaView";
import DashboardView from "pages/dashboard/DashboardView";

export const Context = createContext({});

function App() {
  const token = window.sessionStorage.getItem("token");
  const [jwt, setJwt] = useState(token);
  return (
    <Context.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <main>
          <div>
            <Menu />
            <Routes>
              {/**/}

              {/**/}

              <Route path="/" element={<Home />} />
              <Route path="*" element={""} />
              <Route path="/login" element={<Login />} />
              <Route path="/AnimalList" element={<AnimalListView />} />
              <Route path="/AnimalDetails" element={<AnimalDetails />} />
              <Route path="/NoticiaDetails" element={<NoticiasDetails />} />

              <Route
                path="/ActividadesDetails"
                element={<ActividadDetails />}
              />

              <Route path="/Actividades" element={<Actividades />} />
              <Route path="/Habitat" element={<Habitat />} />
              <Route path="/Habitat/:idhabitat" element={<HabitatDetails />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/HabitatDetails" element={<HabitatDetails />} />
              <Route path="/register" element={<Register />} />
              <Route path="/animal/:idAnimal" element={<AnimalDetails />} />
              <Route path="/Noticia/:idnoticia" element={<NoticiasDetails />} />

              <Route path="/Contacto" element={<Contacto />} />

              <Route path="/AnimalDash" element={<AnimalListPage />} />
              <Route path="/AnimalForm/:id" element={<AnimalFormPage />} />
              <Route path="/AnimalForm/" element={<AnimalFormPage />} />

              <Route path="/usuarioList" element={<UserList />} />

              <Route path="/AsignacionForm" element={<AsignacionForm />} />

              <Route path="/AsignacionList" element={<AsignacionList />} />

              <Route
                path="/asignacionDetail/:id"
                element={<AsignacionList />}
              />

              <Route path="/Dashboard" element={<DashboardView />} />
              <Route path="/Mapa" element={<MapaView />} />

              <Route path="/HabitatDetails" element={<HabitatDetails />} />

              <Route path="/register" element={<Register />} />
              {/* ANIMAL DETAILS */}
              <Route path="/animal/:idAnimal" element={<AnimalDetails />} />
              <Route path="/Noticia/:idnoticia" element={<NoticiasDetails />} />
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
          </div>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
