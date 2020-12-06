import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Email from '@material-ui/icons/Email';
import Github from '@material-ui/icons/Github';
import LinkedIn from '@material-ui/icons/LinkedIn';

const drawerWidth = '240px';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            backgroundColor: 'theme.secondary',
        },
    },
    list: {
        margin: 'auto',
        alignContent: 'center',
        wordWrap: 'true'
    },
    iconButton: {
        margin: 'auto'
    },
    icon: {
        width: '50px',
        height: '50px',
        margin: 'auto'
    },
    avatar: {
        width: '125px',
        height: '125px',
        margin: "auto",
    },
    profile: {
        margin: 'auto',
        wordWrap: 'true'
    },
    listText: {
        position: 'relative',
        margin: 'auto',
        textAlign: 'center',
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth})`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
}));

export default function DrawerAppBar(props) {
    const content = props.content
    const title = props.title
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <List disablePadding={true} className={classes.list}>
                <ListItem button component='a' href='#me'> 
                    <div className={classes.profile}>
                        <Avatar src="images/avatar.jpg" className={classes.avatar} /> 
                        <Typography variant="h5" className={classes.listText}> Andrew Bellas </Typography> 
                    </div>
                </ListItem>
                <Divider />
                {['Experience', 'Skills', 'Education'].map((text) => (
                    <>
                        <ListItem button key={text} component = 'a' href={`#${text.toLowerCase()}`} className={classes.listText}>
                            <ListItemText
                                disableTypography
                                primary={<Typography variant='h6'> {text} </Typography>}
                            />
                        </ListItem>
                    </>
                ))}
                <ListItem> <IconButton className={classes.iconButton} href="https://github.com/andrew-bellas"> <Github className={classes.icon} /> </IconButton> </ListItem>
                <ListItem> <IconButton className={classes.iconButton} href="http://www.linkedin.com/in/andrewsbellas">  <LinkedIn className={classes.icon} /> </IconButton> </ListItem>
                <ListItem> <IconButton className={classes.iconButton} href="mailto:andrewsbellas@gmail.com"> <Email className={classes.icon} /> </IconButton> </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    <Hidden smUp>
                        <Drawer
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown>
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                        {content}
                </main>
            </div>
        </>
    );
}
