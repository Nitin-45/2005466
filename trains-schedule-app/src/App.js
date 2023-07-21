import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import AllTrains from './components/AllTrains'; // Corrected import path
import SingleTrain from './components/SingleTrain'; // Corrected import path

// ... rest of the code ...

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Trains Schedule App
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={AllTrains} />
        <Route path="/train/:trainNumber" render={(props) => <SingleTrain trainNumber={props.match.params.trainNumber} />} />
      </Switch>
    </Router>
  );
};

export default App;
