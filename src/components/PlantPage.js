import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const plantURL = "http://localhost:6001/plants";

function PlantPage() {
  const [plantData, setPlantData] = useState([]);
  const fetchData = () => {
    fetch(plantURL)
      .then((r) => r.json())
      .then((data) => {
        setPlantData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantData={plantData} />
    </main>
  );
}

export default PlantPage;
