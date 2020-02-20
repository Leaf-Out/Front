import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';






export class LeafRating extends React.Component{
    getRating = ()=>{
        //TODO fetch raiting
        return 3.5
    }

    isVoted = ()=>{
        //TODO fetch to know if its already voted
        return false
    }

    vote = ()=>{
        //TODO post vote
        if (this.state.isVoted) {

        } else {

        }
    }

    constructor(props) {
        super(props);
        this.state = {
            rating: this.getRating(),
            isVoted: this.isVoted()

        }
    }    
    
    render(){
        return (
            <Box component="fieldset" mb={3} borderColor="transparent">
                <StyledRating precision={0.5} value={this.state.rating} icon={<EcoRoundedIcon fontSize="inherit"/>}></StyledRating>
            </Box>
                        
        )}
}

const StyledRating = withStyles({
    iconFilled: {
      color: '#c2e8bc',
    },
    iconHover: {
      color: '#63ad57',
    },
  })(Rating);
