import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../spinner/Spinner";
import { Empty } from "../emptyMsg/Empty";
import "./AnimalGrid.css";
import axiosInstance from "../../utils/api/CallApi";
import { useSearchParams } from "react-router-dom";
import AnimalListCard from "../animalListCard/AnimalListCard";

export default function AnimalGrid({ search }) {
  const [animal, setAnimal] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [query] = useSearchParams();
  const especie = query.get("especie");

  const URL = "Animal";

  const getAnimal = async () => {
    const request = await axiosInstance.get(URL);
    setAnimal(request.data);
  };

  useEffect(() => {
    setLoading(true);
    let searchURL = "";
    if (search) {
      searchURL = `/animales/buscar/${search}`;
    } else if (especie) {
      searchURL = `especie/animalPorEspecie/${especie}`;
    } else {
      searchURL = URL;
    }
    getAnimal(searchURL, setAnimal);
    setHasMore(false);
    setLoading(false);
  }, [search, especie]);

  if (!isLoading && animal.length === 0) {
    return <Empty msg="animal" />;
  }
  return (
    <>
      {isLoading && <Spinner />}
      {!animal ? (
        <Empty msg="animal" />
      ) : (
        <InfiniteScroll
          dataLength={animal.length}
          hasMore={hasMore}
          loader={<Spinner />}
          next={() => setPage((prevPage) => prevPage + 1)}
        >
          <ul className="animalGrid">
            {animal.map((animal) => (
              <AnimalListCard key={animal.idAnimal} animal={animal} />
            ))}
          </ul>
        </InfiniteScroll>
      )}
    </>
  );
}
