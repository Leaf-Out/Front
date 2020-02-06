import React from 'react';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

export class ParkCard extends React.Component {
    
    render() {

        return (
            <div >
                <Paper elevation={3}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <ButtonBase >
                                <img alt="complex" src="/static/images/grid/complex.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Park Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        ID: 1030114
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Description
                                    </Typography>
                                    
                                </Grid>
                                <Grid item>
                                <Rating
                                    name="customized-icons"
                                    defaultValue={2}
                                    getLabelText={value => customIcons[value].label}
                                    IconContainerComponent={IconContainer}
                                />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);
  
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  
  