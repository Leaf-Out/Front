import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import BeachAccessRoundedIcon from '@material-ui/icons/BeachAccessRounded';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import StyleIcon from '@material-ui/icons/Style';
import { Link, useHistory } from 'react-router-dom';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    mainButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.common.black
    },
    mainHomeButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.common.white,
    },
    nav: {
        backgroundColor: theme.palette.common.white,
        boxShadow: 'none'
    },
    homeNav: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        boxShadow: 'none'
    },
    button: {
        width: 'auto',
        height: '100%',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: "inherit",
            borderBottom: "solid",
            borderBottomWidth: 2
        }
    },
    homeButton: {
        width: 'auto',
        height: '100%',
        color: theme.palette.common.white,
        textAlign: 'center',
        '&:hover': {
            backgroundColor: "inherit",
            borderBottom: "solid",
            borderBottomWidth: 2
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    }
}));

const PublicNav = (props) => {
    const classes = useStyles()
    const buttonStyle = props.isHome ? classes.homeButton : classes.button
    return (
        <div className={classes.sectionDesktop}>
            <Link style={{ textDecoration: 'none' }} to="/signin">
                <Button className={buttonStyle}>sign in</Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/signup">
                <Button className={buttonStyle}>sign up</Button>
            </Link>

        </div>
    )
}

const UserNav = (props) => {
    const classes = useStyles()
    const buttonStyle = props.isHome ? classes.homeButton : classes.button
    const history = useHistory();
    return (
        <div className={classes.sectionDesktop}>
            <Link to="/transactions" style={{ textDecoration: 'none' }}>
                <Button startIcon={<ReceiptRoundedIcon />} className={buttonStyle}> transactions </Button>
            </Link>
            <Link to="/shoppingcart" style={{ textDecoration: 'none' }}>
                <Button startIcon={<ShoppingCartIcon />} className={buttonStyle}> cart </Button>
            </Link>
            <Button startIcon={<ExitToAppIcon />} className={buttonStyle}> sign out </Button>
        </div>
    )
}

const AdminNav = (props) => {
    const classes = useStyles()
    const buttonStyle = props.isHome ? classes.homeButton : classes.button
    const history = useHistory();
    return (
        <div className={classes.sectionDesktop}>
            <Link to="/parks" style={{ textDecoration: 'none' }}>
                <Button startIcon={<StyleIcon />} className={buttonStyle}> parks </Button>
            </Link>
            <Link to="/plans" style={{ textDecoration: 'none' }}>
                <Button startIcon={<AccountTreeRoundedIcon />} className={buttonStyle}> plans </Button>
            </Link>
            <Link to="/activities" style={{ textDecoration: 'none' }}>
                <Button startIcon={<BeachAccessRoundedIcon />} className={buttonStyle}> activities </Button>
            </Link>
            <Link to="/transactions" style={{ textDecoration: 'none' }}>
                <Button startIcon={<ReceiptRoundedIcon />} className={buttonStyle}> transactions </Button>
            </Link>
            <Button startIcon={<ExitToAppIcon />} className={buttonStyle}> sign out </Button>
        </div>
    )
}
export default function Header(props) {
    const classes = useStyles()
    const [role] = useState(
        //TODO localstorage token
        null
    )
    const navStyle = props.isHome ? classes.homeNav : classes.nav
    const homeButtonStyle = props.isHome ? classes.mainHomeButton : classes.mainButton
    return (
        <div className={classes.grow}>
            <AppBar position="static" className={navStyle}>
                <Toolbar>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <IconButton
                            edge="start"
                            className={homeButtonStyle}
                        >
                            <HomeRoundedIcon />
                        </IconButton>
                    </Link>
                    <div className={classes.grow} />
                    {role === null ? <PublicNav isHome={props.isHome} /> : role === "USER" ? <UserNav isHome={props.isHome} /> : <AdminNav isHome={props.isHome} />}
                </Toolbar>
            </AppBar>
            <Divider />
        </div>
    );
}