import React, { useState } from "react";
import { Slider } from "@material-ui/core";

export default function RangeSlider(props) {
  const [value, setValue] = useState(props.value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Slider
      style={{ width: 300 }}
      value={value}
      min={props.value[0]}
      max={props.value[1]}
      step={props.step}
      valueLabelDisplay="on"
      aria-labelledby="range-slider"
      onChange={handleChange}
    />
  );
}
