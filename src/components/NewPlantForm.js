import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, SetUrl] = useState("");

  const handleChange = (fieldName) => {
    return (e) => {
      const val = e.target.value;
      switch (fieldName) {
        case "name":
          setName(val);
          break;
        case "price":
          setPrice(val);
          break;
        case "url":
          SetUrl(val);
          break;
        default:
          return;
      }
    };
  };
  console.log(name);
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form
        onSubmit={() => {
          const newPlant = {
            name,
            price,
            url,
          };
          addPlant(newPlant);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={handleChange("name")}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={url}
          onChange={handleChange("url")}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          handleChange={"price"}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
