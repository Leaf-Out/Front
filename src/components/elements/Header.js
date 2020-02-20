import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LinkUi from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Image} from "@material-ui/icons";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const sections = [{ title: 'Home', url: '#' },
    { title: 'About', url: '#' },
    { title: 'SignIn ', url: '#' },
    { title: 'SignUp', url: '#' }]

const sectionSignIn = [{ title: 'Home', url: '#' },
    { title: 'About', url: '#' },
    { title: 'Shoping Cart ', url: '#' },
    { title: 'Log out', url: '#' }]


const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));
function Header2(props) {
    const classes = useStyles();
    const { sections, title } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Image src = "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg" />
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    {sections.map(section => (
                    <Link to={'/'+section.title}>
                        <LinkUi
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            href={section.url}
                            className={classes.toolbarLink}
                        >
                            {section.title}
                        </LinkUi>
                    </Link>
                    ))}
                </Toolbar>
            </Toolbar>

        </React.Fragment>
    );
}

export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false}
        this.handleSignIn = this.handleSignIn.bind(this);
        if (!localStorage.getItem("isLoggedIn")) {
            localStorage.setItem("isLoggedIn", this.state.isLoggedIn);
        }
    }

    handleSignIn() {
        this.setState({isLoggedIn: true})
    }

    render() {

        const isLoggedIn = this.state.isLoggedIn || (localStorage.getItem("isLoggedIn") == "true");
        let choose;
        if (!isLoggedIn) {
            choose = sections;
        } else {
            choose = sectionSignIn;

        }
        return (
            <Header2 sections={choose}/>
        );
    }
}



