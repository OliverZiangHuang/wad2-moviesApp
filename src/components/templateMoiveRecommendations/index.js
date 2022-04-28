import React, { useState, useEffect } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { getMovieRecommendations } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Link from "react-scroll/modules/components/Link";

const useStyles = makeStyles((theme) => ({
   root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: theme.spacing(30),

  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  templateTitle: {
    fontSize: 30,
  },
 
}));

const TemplateMovieRecom = ({ movie, children }) => {
  const classes = useStyles();
  const { data , error, isLoading, isError } = useQuery(
    ["recommendations", { id: movie.id }],
    getMovieRecommendations
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const recommendations = data.results


  return (
    <div className={classes.root}>
      <li className={classes.templateTitle}>
        Recommendations based on this movie
      </li>
      <Grid movie={movie} container spacing={10} style={{ padding: "15px" }}>
        <Grid item xs={10}>
          <div className={classes.gridListRoot}>
            <GridList cellHeight={500} className={classes.gridList} cols={6} >
              {recommendations.map((image) => (
                 <div> <GridListTile key={image.poster_path} className={classes.gridListTile} cols={3}>
                    <img
                    src={`https://image.tmdb.org/t/p/w300/${image.poster_path}`}
                    alt={image.poster_path}
                  />    
                </GridListTile>
                <a href={'/movies/'+ image.id }> {`${image.title}`} </a>
                 </div> 
              ))}
            </GridList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
      </div>
  );
};

export default TemplateMovieRecom;