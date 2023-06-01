import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import { Empty } from "../emptyMsg/Empty";
import "./AnimalDetails.css";
import axiosInstance from "../../utils/api/CallApi";
import { useParams } from "react-router-dom";
const imgCover = "https://picsum.photos/930/590?random=2";

export default function AnimalDetails() {
  // const { idAnimal } = useParams();
  const [animal, setAnimal] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const urlAPI = "https://picsum.photos/930/590?random=1";

  const URL = `Animal`; // ${idAnimal}

  const getAnimal = async () => {
    const request = await axiosInstance.get(URL);
    setAnimal(request.data);
  };

  useEffect(() => {
    setLoading(true);
    getAnimal();
    setLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {!animal ? (
        <div>
          <Empty msg="animal" />
        </div>
      ) : (
        <>
          <div className="detailsContainer" key={animal.idAnimal}>
            {animal.map((animal) => {
              return (
                <>
                  <div className="animalContainer">
                    <div>
                      <img
                        height={350}
                        className="col animalImage"
                        src={!animal.imagen ? imgCover : urlAPI + animal.imagen}
                        alt={animal.nombre}
                      />
                    </div>
                    <div className="col animalDetails">
                      <div className="firstItem">
                        <p>
                          <strong>{animal.nombre}</strong>
                        </p>
                      </div>
                      <div className="information">
                        <p>
                          <span>{animal.informacion}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
