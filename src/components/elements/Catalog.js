import React from "react";
import { GridList } from "@material-ui/core";
import GridListTile from "@material-ui/core/GridListTile";
import { Search } from "./Search";
import "./css/Catalog.css";
import { ParkCard } from "./ParkCard";
import axios from "axios";

export class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
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
  }

  render() {
    return (
      <div>
        <Search />
        <div className="catalog">
          <GridList cols={3} spacing={20}>
            {this.state.cards.map(card => (
              <GridListTile>
                <ParkCard 
                    name={card.name}
                    description={card.description}
                    rating={card.feedback.rating}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}
