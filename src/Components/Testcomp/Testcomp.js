import React from "react";
import axios from "../../axios";

class Testcomp extends React.Component {
  state = {
    h1Data: "",
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/sessions.json")
      .then((response) => {
        console.log(response);
        this.setState({
          h1Data: "Got it!",
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          h1Data: error.message,
          loading: false,
        });
      });
  }

  onClickHandler = () => {
    this.setState({
      loading: true,
    });
    axios
      .get("/sessions.json")
      .then((response) => {
        console.log(response);
        this.setState({
          h1Data: "Got it!",
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          h1Data: error.message,
          loading: false,
        });
      });
  };

  render() {
    let data = <p>Loading....</p>;
    if (!this.state.loading) {
      data = <h1>{this.state.h1Data}</h1>;
    }

    return (
      <React.Fragment>
        {data}
        <button onClick={this.onClickHandler}>Load again</button>
      </React.Fragment>
    );
  }
}

export default Testcomp;
