
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

  const backend = require('superagent');
    backend
    .get('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases')
    .end(function(err, res, backend){
      console.log( res, 'this backend got called');
      var keyphrase = '{"{"documents": [    {  "language": "en",  "id": "1",  "text": "We love this trail and make the trip every year. The views are breathtaking and well worth the hike!"  },  {"language": "en",  "id": "2",    "text": "Poorly marked trails! I thought we were goners. Worst hike ever."    },    {"language": "en",  "id": "3",  "text": "Everyone in my family liked the trail but thought it was too challenging for the less athletic among us. Not necessarily recommended for small children."  },  {  "language": "en",  "id": "4",    "text": "It was foggy so we missed the spectacular views, but the trail was ok. Worth checking out if you are in the area."},    {  "language": "en","id": "5",  "text": "This is my favorite trail. It has beautiful views and many places to stop and rest"  }]}"}'
      // need to cors the origin for call for apis
      console.log(keyphrase, 'this key has been found');
    });


const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
