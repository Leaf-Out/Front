import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Search } from './Search';
import { ParkCard } from './park/ParkCard';


export class Catalog extends React.Component {
    constructor(props){        
        super(props)
        this.state = { cards:[null,null,null,null,null]}
    }
    render() {
        return (
            <div>
                <Search />
                <Catalog/>
            </div>
        )
    }
}