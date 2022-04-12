import React from "react";
import { useState } from "react";
import MetaalCard from "../../components/metaal/metaal-card";
import Nav from "../../components/nav/nav"
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0$",
  },
  {
    value: 500,
    label: "500$",
  },
  {
    value: 1000,
    label: "1000$",
  },
  {
    value: 1500,
    label: "1500$",
  },
  {
    value: 2000,
    label: "2000$",
  },
  {
    value: 2500,
    label: "2500$",
  },
  {
    value: 3000,
    label: "3000$",
  },
];

function valuetext(value) {
  return `${value * 10}°C`;
}
const minDistance = 500;
function MetaalPage() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [value1, setValue1] = useState([0, 500]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      setPriceRange([
        Math.min(newValue[0], value1[1] - minDistance),
        value1[1],
      ]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      setPriceRange([
        value1[0],
        Math.max(newValue[1], value1[0] + minDistance),
      ]);
    }
  };

  return (

    <div className="container">
      <Nav/>
      <h1 className="display-1 text-center mt-5">Metaals</h1>
      <br />
      <br />
      <br />
      <label for="customRange3" className="form-label display-6">
        Price Range:- {priceRange[0]}$ - {priceRange[1]}$
      </label>
      <Slider
        track={true}
        min={0}
        step={null}
        max={3000}
        marks={marks}
        getAriaLabel={() => "Temperature range"}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <div className="row">
        <MetaalCard />
        <MetaalCard />
        <MetaalCard />
      </div>
    </div>
  );
}
export default MetaalPage;
