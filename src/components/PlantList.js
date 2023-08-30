import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData }) {
  const renderPlants = plantData.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />;
  });
  return <ul className="cards">{renderPlants}</ul>;
}
export default PlantList;
