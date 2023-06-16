import React from "react";
import "./AnimalListView.css";
import Search from "components/search/Search";
import AnimalList from "components/animalList/AnimalList";

function AnimalListView() {
  return (
    <>
      <Search />
      <AnimalList />
    </>
  );
}

export default AnimalListView;
