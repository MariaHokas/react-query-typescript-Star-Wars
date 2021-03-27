import React from "react";
import { useQuery } from "react-query";

import Planet from "./planet";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);

  return (
    <div>
      <h2>Planets</h2>

      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.results.map(
            (planet: { name: string; population: string; terrain: string }) => (
              <Planet key={planet.name} planet={planet} />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Planets;
