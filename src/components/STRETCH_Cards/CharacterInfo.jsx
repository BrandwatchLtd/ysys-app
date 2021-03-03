import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CharacterInfo = (props) => {
  var house = "";

  if (props.item.house == "Braavos") {
    house = "/Images/Titan_of_Braavos.jpg";
  } else if (props.item.culture == "Northmen") {
    house = "/Images/Northmen.jpg";
  } else if (props.item.culture == "Valyrian") {
    house = "/Images/Valyrian.jpg";
  } else if (props.item.culture == "Westeros") {
    house = "Images/Westeros.png";
  } else {
    house = "";
  }

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography variant="h5" component="h2">
        <b>{props.item.culture}</b>
      </Typography>
      <img src={house} className="Border cardImg" alt="Failed." />
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.item.name}
        </Typography>
        <hr className="Line" />
        <Typography variant="h6" component="h9">
          <b>Title: </b>
          {props.item.titles}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <b>AKA:</b>{" "}
          <i>{props.item.aliases.map((aliases) => `${aliases}, `)}</i>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterInfo;
