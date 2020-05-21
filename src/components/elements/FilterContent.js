import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import {
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Dialog,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MapIcon from "@material-ui/icons/Map";
import Map from "./Map";
import ChipList from "./ChipList";
import { useHistory } from "react-router-dom";

export default function FilterContent(props) {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState({});
  const toogleModal = (event) => {
    setOpenModal(!openModal);
  };
  const filter = () => {
    let wrapper;
    switch (props.type) {
      case "tags":
        wrapper = tagsFilter();
        break;
      case "place":
        wrapper = filterByPlace();
        break;
      case "price":
        wrapper = <RangeSlider value={[0, 2000000]} step={10000} />;
        break;
      case "rating":
        wrapper = <RangeSlider value={[0, 5]} step={0.5} />;
        break;
      case "type":
        wrapper = typeFilter();
        break;
      default:
        wrapper = <div>Nothing to render</div>;
        break;
    }
    return wrapper;
  };

  const filterByPlace = () => {
    return (
      <div>
        <Dialog
          onClose={(event) => {
            setOpenModal(false);
          }}
          open={openModal}
          fullWidth
        >
          <Map />
        </Dialog>
        <IconButton>
          <LocationOnIcon onClick={toogleModal} />
        </IconButton>
        <IconButton>
          <MapIcon onClick={toogleModal} />
        </IconButton>
      </div>
    );
  };

  const typeFilter = () => {
    return (
      <FormControl>
        <Select
          value={type}
          onChange={(e) => {
            localStorage.setItem("filter", JSON.stringify({"name":"","location":{},"rating":"","price":[],"type":e.target.value,"tags":[]}));
            setType(e.target.value);
          }}
          displayEmpty
        >
          <MenuItem value={"parks"}>Park</MenuItem>
          <MenuItem value={"plans"}>Plan</MenuItem>
          <MenuItem value={"activities"}>Activity</MenuItem>
        </Select>
      </FormControl>
    );
  };

  const tagsFilter = () => {
    return (
      <Dialog
        onClose={(event) => {
          setOpenModal(!openModal);
          history.go(0);
        }}
        open={!openModal}
      >
        <ChipList tags={["PARAISO", "TROPICAL"]} click={true} />
      </Dialog>
    );
  };

  return filter();
}
