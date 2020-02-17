import React from 'react';
import { GridList } from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import { Search } from './Search';
import "./Catalog.css"
import { ParkCard } from './park/ParkCard';
import { PlanCard } from './plan/PlanCard';


export class Catalog extends React.Component {

    constructor(props){ 
        super(props)
        this.state = { cards:[null,null,null,null,null]}
    }
    
    render() {
        return (
            <div>
                <Search />
                <div className="catalog">
                    <GridList cols={3} spacing={20}>
                        {this.state.cards.map(card => (
                            <GridListTile >
                                <ParkCard />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>                    
            </div>
        )
    }
}
