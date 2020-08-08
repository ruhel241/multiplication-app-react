import React, { Component } from "react";
import "./App.scss";

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 3,
    };
    this.counterChange = this.counterChange.bind(this);
  }

  counterChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      counter: value
    });
  }

  render() {
    const { counter } = this.state;
    const multiplicationTables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const tableStyle = {
      border: "2px solid black",
      borderCollapse: "collapse",
      margin: "0 auto",
      fontSize: "30px"
    };

    return (
        <div className="multiplication-app">
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm"> 
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} className="multiplication-body">
                      <AppBar position="static" style={{backgroundColor:"#E3106D"}}>
                        <Toolbar variant="dense">
                          <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                          </IconButton>
                          <Typography variant="h4" color="inherit" style={{margin: "0 auto"}}>
                              Multiplication App 
                          </Typography>
                        </Toolbar>
                      </AppBar>
                      <Typography component="div">
                          <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            variant="outlined"
                            onChange={this.counterChange}
                            value={counter}
                          />
                          <table style={tableStyle}>
                            <tbody>
                              <tr>
                                <th>Multiplication Table</th>
                              </tr>
                              {multiplicationTables.map((multiplicationTable, index) => (
                                <tr key={index}>
                                  <td style={tableStyle}>
                                    {multiplicationTable} x {counter ? counter : 0} = {multiplicationTable * counter}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                      </Typography>
                      <BottomNavigation style={{backgroundColor:"#E3106D"}}>
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                      </BottomNavigation>
                </Typography>
            </Container>
          </React.Fragment>
    </div>
    );
  }
}

export default App;
