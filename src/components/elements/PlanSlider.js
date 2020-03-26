import React, { Component } from "react";
import Carousel from "nuka-carousel";
import { PlanCard } from "./PlanCard";
import axios from "axios";

export class PlanSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: `http://localhost:8080/parks/` + props.parkName + `/plans`,
      plans: [],
      login: true
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    let url = 'http://localhost:8080/parks/'
      await axios.get(url, { "headers": { "Authorization": "" } })
            .then(res => {
                this.setState( {cards:res.data});
            })
  };

  render() {
    return (
      <Carousel framePadding={"20px"} width={"50%"} cellAlign={"center"}>
        {this.state.plans.map(card => (
          <PlanCard
            name={card.name}
            description={card.description}
            price={card.price}
            rating={card.feedback.rating}
          />
        ))}
      </Carousel>
    );
  }
}
