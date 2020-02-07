import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Filter } from './Filter';

export class Search extends React.Component {
    render() {
        return (
            <div>
                <div >
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <Filter />
            </div>
        )
    }
}