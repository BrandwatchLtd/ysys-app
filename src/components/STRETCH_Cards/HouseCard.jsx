import "../../components/Feed/FeedComponent.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

// TODO - create a component which displays information about Houses

// TODO - make sure HouseCard is expecting the right props!

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "118px",
    height: "142px",
    flexWrap: 'wrap',
  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '85%',
  },
  
}));

export const HouseCard = (props) => {
  const [currentHouse, setCurrentHouse] = useState(null);
  const [characterName, setCharacterName] = useState("");
  const [houseOverlordName, setHouseOverlordName] = useState("");
  const classes = useStyles();

  const changeHouse = (item) => {
    setCurrentHouse(item);
  };

  const getCharacterName = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacterName(data.name);
    } catch (error) {
      setCharacterName("");
      console.log(`Error: ${error.message}`);
    }
  };

  const getHouseOverlordName = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.name);
      if (data.name === "") {
        setHouseOverlordName("");
      } else {
        setHouseOverlordName(data.name);
      }
    } catch (error) {
      setHouseOverlordName("");
      console.log(`Error: ${error.message}`);
    }
  };
  
  return (
    <div className="column2">
      <div className="left70Column">
        Name: {currentHouse && currentHouse.name}
        <br />
        Region: {currentHouse && currentHouse.region}
        <br />
        Coat Of Arms: {currentHouse && currentHouse.coatOfArms}
        <br />
        CurrentLordName: {currentHouse && characterName}
        <br />
        House OverLordName: {currentHouse && houseOverlordName}
      </div>
      <div className="right30Column">
        <Grid container spacing={3}>
          {props.ApiInfo.map((item) => (
            <Grid item md={12} lg={6}>
              <Paper
                onClick={() => {
                  changeHouse(item);
                  getCharacterName(item.currentLord);
                  getHouseOverlordName(item.overlord);
                }}
                className={`${classes.paper} box-shadow-img`}
              >
                {item.name}
                {(() => {
                if (item.name.includes("Allyrion")) {
                    return <img className={classes.img} alt="Allryion" src="Images\Houses\House Allyrion.jpg" />
                } else if (item.name.includes("Arryn")) {
                    return <img className={classes.img} alt="Arryn" src="Images\Houses\House Arryn.jpg" />
                } else if (item.name.includes("Baelish")) {
                    return <img className={classes.img} alt="Baelish" src="Images\Houses\House Baelish.jpg" />
                } else if (item.name.includes("Baratheon")) {
                    return <img className={classes.img} alt="Baratheon" src="Images\Houses\House Baratheon.jpg" />
                } else if (item.name.includes("Blackwood")) {
                    return <img className={classes.img} alt="Blackwood" src="Images\Houses\House Blackwood.jpg" />
                } else if (item.name.includes("Bolton")) {
                    return <img className={classes.img} alt="Bolton" src="Images\Houses\House Bolton.jpg" />
                } else if (item.name.includes("Bracken")) {
                    return <img className={classes.img} alt="Bracken" src="Images\Houses\House Bracken.jpg" />
                } else if (item.name.includes("Cerwyn")) {
                    return <img className={classes.img} alt="Cerwyn" src="Images\Houses\House Cerwyn.jpg" />
                } else if (item.name.includes("Clegane")) {
                    return <img className={classes.img} alt="Cerwyn" src="Images\Houses\House Clegane.jpg" />
                } else if (item.name.includes("Connington")) {
                    return <img className={classes.img} alt="Connington" src="Images\Houses\House Connington.jpg" />
                } else if (item.name.includes("Crakehall")) {
                    return <img className={classes.img} alt="Crakehall" src="Images\Houses\House Crakheall.jpg" />
                } else if (item.name.includes("Dayne")) {
                    return <img className={classes.img} alt="Dayne" src="Images\Houses\House Dayne.jpg" />
                } else if (item.name.includes("Dondarrion")) {
                    return <img className={classes.img} alt="Dondarrion" src="Images\Houses\House Dondarrion.jpg" />
                } else if (item.name.includes("Florent")) {
                    return <img className={classes.img} alt="Florent" src="Images\Houses\House Florent.jpg" />
                } else if (item.name.includes("Frey")) {
                    return <img className={classes.img} alt="Frey" src="Images\Houses\House Frey.jpg" />
                } else if (item.name.includes("Glover")) {
                    return <img className={classes.img} alt="Glover" src="Images\Houses\House Glover.jpg" />
                } else if (item.name.includes("Greyjoy")) {
                    return <img className={classes.img} alt="Greyjoy" src="Images\Houses\House Greyjoy.jpg" />
                } else if (item.name.includes("Hornwood")) {
                    return <img className={classes.img} alt="Hornwood" src="Images\Houses\House Hornwood.jpg" />
                } else if (item.name.includes("Karstark")) {
                    return <img className={classes.img} alt="Karstark" src="Images\Houses\House Karstark.jpg" />
                } else if (item.name.includes("Lannister")) {
                    return <img className={classes.img} alt="Lannister" src="Images\Houses\House Lannister.jpg" />
                } else if (item.name.includes("Mallister")) {
                    return <img className={classes.img} alt="Mallister" src="Images\Houses\House Mallister.jpg" />
                } else if (item.name.includes("Marbrand")) {
                    return <img className={classes.img} alt="Marbrand" src="Images\Houses\House Marbrand.jpg" />
                } else if (item.name.includes("Martell")) {
                    return <img className={classes.img} alt="Martell" src="Images\Houses\House Martell.jpg" />
                } else if (item.name.includes("Mormont")) {
                    return <img className={classes.img} alt="Mormont" src="Images\Houses\House Mormont.jpg" />
                } else if (item.name.includes("Redwyne")) {
                    return <img className={classes.img} alt="Redwyne" src="Images\Houses\House Redwyne.jpg" />
                } else if (item.name.includes("Seaworth")) {
                    return <img className={classes.img} alt="Seaworth" src="Images\Houses\House Seaworth.jpg" />
                } else if (item.name.includes("Selmy")) {
                    return <img className={classes.img} alt="Selmy" src="Images\Houses\House Selmy.jpg" />
                } else if (item.name.includes("Stark")) {
                    return <img className={classes.img} alt="Stark" src="Images\Houses\House Stark.jpg" />
                } else if (item.name.includes("Swyft")) {
                    return <img className={classes.img} alt="Swyft" src="Images\Houses\House Swyft.jpg" />
                } else if (item.name.includes("Targaryen")) {
                    return <img className={classes.img} alt="Targaryen" src="Images\Houses\House Targaryen.jpg" />
                } else if (item.name.includes("Tarth")) {
                    return <img className={classes.img} alt="Tarth" src="Images\Houses\House Tarth.jpg" />
                } else if (item.name.includes("Tully")) {
                    return <img className={classes.img} alt="Tully" src="Images\Houses\House Tully.jpg" />
                } else if (item.name.includes("Tyrell")) {
                  return <img className={classes.img} alt="Tyrell" src="Images\Houses\House Tyrell.jpg" />
                } else if (item.name.includes("Westerling")) {
                    return <img className={classes.img} alt="Westerling" src="Images\Houses\House Westerling.jpg" />
                } else if (item.name.includes("Whent")) {
                    return <img className={classes.img} alt="Whent" src="Images\Houses\House Whent.jpg" />
                } else {
                  return 
                } 
              })()}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
