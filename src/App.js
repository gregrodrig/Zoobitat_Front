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

import { HabitatsList } from "pages/habitat/HabitatsList";
import { HabitasForms } from "pages/habitat/HabitasForms";
import { AsignacionDetail } from "pages/asignaciones/AsignacionDetail";
import { ParteList } from "pages/parte/ParteList";
import { ParteDetail } from "pages/parte/ParteDetail";
import { ParteForm } from "pages/parte/ParteForm";

export const Context = createContext({});

function App() {
  const token = window.sessionStorage.getItem("token");
  const [jwt, setJwt] = useState(token);
  const [rol, setRol] = useState([]);

  return (
    <Context.Provider value={{ jwt, setJwt, rol, setRol }}>
      <div className="App">
        <main>
          <div>
            <Menu />
            <Routes>
              {/*SIN AUTENTICAR*/}
              <Route path="/" element={<Home />} />
              <Route path="*" element={""} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/ActividadesDetails"
                element={<ActividadDetails />}
              />
              <Route path="/Actividades" element={<Actividades />} />

              <Route path="/Habitat" element={<Habitat />} />
              <Route path="/Habitat/:idhabitat" element={<HabitatDetails />} />
              <Route path="/AnimalList" element={<AnimalListView />} />
              <Route path="/AnimalDetails" element={<AnimalDetails />} />
              <Route path="/NoticiaDetails" element={<NoticiasDetails />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/register" element={<Register />} />
              <Route path="/Noticia/:idnoticia" element={<NoticiasDetails />} />
              <Route path="/Mapa" element={<MapaView />} />
              {/*FIN SIN AUTENTICAR*/}

              {/* RUTAS PROTEGIDAS */}
              <Route
                element={<ProtectedRoute isAllowed={token} redirectTo="/" />}
              >
                {/* RUTAS USUARIOS */}
                <Route path="/usuarioList" element={<UserList />} />
                <Route path="/Dashboard" element={<DashboardView />} />
                {/* FIN RUTAS USUARIOS */}

                {/* RUTAS HABITAT */}
                <Route path="/HabitatForm" element={<HabitasForms />} />
                <Route path="/HabitatForm/:id" element={<HabitasForms />} />
                <Route path="/HabitatDetails" element={<HabitatDetails />} />
                <Route path="/HabitatList" element={<HabitatsList />} />
                {/* FIN RUTAS HABITAT */}

                {/* RUTAS ANIMALES */}
                <Route path="/animal/:idAnimal" element={<AnimalDetails />} />
                <Route path="/AnimalDash" element={<AnimalListPage />} />
                <Route path="/AnimalForm/:id" element={<AnimalFormPage />} />
                <Route path="/AnimalForm/" element={<AnimalFormPage />} />
                {/* FIN RUTAS ANIMALES */}

                {/* RUTAS PARTES */}
                <Route path="/partelist" element={<ParteList />} />
                <Route path="/partedetail/:id" element={<ParteDetail />} />
                <Route path="/parteForm/" element={<ParteForm />} />
                <Route path="/parteForm/:id" element={<ParteForm />} />
                {/* FIN RUTAS PARTES */}

                {/* RUTAS ASIGNACIONES */}
                <Route path="/AsignacionForm" element={<AsignacionForm />} />
                <Route path="/AsignacionList" element={<AsignacionList />} />
                <Route
                  path="/asignacionDetail/:id"
                  element={<AsignacionDetail />}
                />
                {/* FIN RUTAS ASIGNACIONES */}
              </Route>
              {/* FIN RUTAS PROTEGIDAS */}
            </Routes>
          </div>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
