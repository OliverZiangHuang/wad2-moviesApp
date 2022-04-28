import React, { useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from '../movieReviews';

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {  //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const PersonDetails = ( { person }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false); // New
  
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>
      <div className={classes.chipRoot}>
      
      <Paper component="ul" className={classes.chipSet}>
        <Chip label={`Name: ${person.name}`} />       
      </Paper>
      
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Known as: " className={classes.chipLabel} color="primary" />
        </li>
        {person.also_known_as.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Department: " className={classes.chipLabel} color="primary" />
        </li>
        {person.known_for_department.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} className={classes.chip} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Birthday: " className={classes.chipLabel} color="primary" />
        </li>
        {person.birthday.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} className={classes.chip} />
          </li>
        ))}
      </Paper>

      </div>

    </>
  );
};
export default  PersonDetails ;