import * as React from "react";
import { styled } from "@mui/material/styles";
// import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    divider: {
      margin: `${makeStyles.themeSpacing * 3}px`
    },
  },
});

// ****** Main Function ********

export default function BarnCard() {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const barn = {
    barnImage:
      "https://cdn.pixabay.com/photo/2018/07/06/23/30/cows-3521371_1280.jpg",
    barnTitle: "Beef Cattle Barn",
    barnNotes: "Some imformation about barn",
    healthStatus: "Healthy: 40, Sick: 2",
    numberOfAnimals: 42,
    equipment: "Sufficient",
  };
  // const barnImage= "https://media.sciencephoto.com/image/c0125485/800wm";
  // const barnTitle = "Beef Cattle Barn";
  // const barnNotes = "Some imformation about barn";
  // const healthStatus = "Healthy: 40, Sick: 2";
  // const numberOfAnimals = 42;
  // const equipment = "Sufficient"

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            BC
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={barn.barnTitle}
        subheader={Date.now}
      />
      <CardMedia
        component="img"
        height="194"
        image={barn.barnImage}
        alt="Barn Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive {barn.barnTitle} is a perfect stable.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <IconButton aria-label="share">
          <AgricultureIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Divider className={classes.divider} light />
            <h4 style={{ textAlign: "center" }}>Barn Notes</h4>
          <Divider className={classes.divider} light />
          <Typography paragraph>{barn.barnNotes}</Typography>
          <Typography paragraph>Health Status: {barn.healthStatus}</Typography>
          <Typography paragraph>
            Number Of Animals: {barn.numberOfAnimals}
          </Typography>
          <Typography>Equipment: {barn.equipment}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
