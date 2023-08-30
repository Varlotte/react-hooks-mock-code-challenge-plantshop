import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const plantURL = "http://localhost:6001/plants";

function PlantPage() {
  const [plantData, setPlantData] = useState([]);
  const [searchPlant, setSearchPlant] = useState("");

  useEffect(() => {
    fetch(plantURL)
      .then((r) => r.json())
      .then((data) => {
        setPlantData(data);
      });
  }, []);

  function updateSearchPlant(value) {
    setSearchPlant(value);
  }

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

  const plantsToDisplay = plantData.filter((plant) => {
    return plant.name.toLowerCase().includes(searchPlant.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search updateSearchPlant={updateSearchPlant} searchPlant={searchPlant} />
      <PlantList plantData={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
