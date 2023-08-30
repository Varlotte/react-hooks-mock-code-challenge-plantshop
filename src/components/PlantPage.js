import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const plantURL = "http://localhost:6001/plants";

function PlantPage() {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    fetch(plantURL)
      .then((r) => r.json())
      .then((data) => {
        setPlantData(data);
      });
  }, []);

  const addPlant = (newPlant) => {
    fetch(plantURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((data) => {
        const updatedList = [...plantData, data];

        setPlantData(updatedList);
      });
  };

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search />
      <PlantList plantData={plantData} />
    </main>
  );
}

export default PlantPage;
