import { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
// DayJs
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// Mui card
import Card from "@material-ui/core/Card";
//import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
//import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const styles = {
    card: {
    display: "flex",
    marginBottom: 20,
  },
  avatarAndName: {
    display: "flex",
  },
  image: {
    minWidth: 400,
    height: 0,
    paddingTop: "15.25%",
    paddingBottom: "20.25%",
  },
  content: {
    padding: 10,
    objectFit: "cover"
  },
};

class Scream extends Component {
  render() {
    // DayJs
    dayjs.extend(relativeTime);
    // Esto es lo mismo que const classes = this.props.classes  - Esto se llama desestructuración
    // Aquí traemos scream y extraemos sus propiedades
    // Recordar el Issue al traer createdAt
    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount,
      },
    } = this.props;
    return (
        <Card className={classes.card}>
      <CardMedia
          image={userImage}
          title="Profile Image"
          className={classes.image}
        />
        <CardContent className={classes.content}>  
          <CardContent className={classes.avatarAndName}>
            <Avatar
              alt={userHandle}
              src={userImage}
              component={Link}
              to={`/users/${userHandle}`}
            />
            <Typography
              variant="h5"
              component={Link}
              to={`/users/${userHandle}`}
            >
              {userHandle}
            </Typography>
          </CardContent>
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>

      
    );
  }
}

export default withStyles(styles)(Scream);
