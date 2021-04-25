import { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Scream from "../components/Scream";

class home extends Component {
  // Para traer de nuestro servidor -- con Axios
  state = {
    screams: null,
  };
  componentDidMount() {
    axios
      .get("/screams")
      .then((res) => {
        this.setState({
          screams: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map((scream) => <Scream key={scream.screamid} scream={scream} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      // Verificar este espaciado en 16   IMPORTANTE!
      <Grid container spacing={4}>
        <Grid item sm={2} xs={12}>
          <p>Contenido</p>
        </Grid>

        <Grid item sm={7} xs={12}>
          {recentScreamsMarkup}
        </Grid>

        <Grid item sm={3} xs={12}>
          <p>Contenido</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
