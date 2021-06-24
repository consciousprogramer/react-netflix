import React from "react";
import axios from "../../axios";
import styles from "./Movies.module.css";
import Row from "../../Components/Row/Row";
import requests from "../../requests";
import Banner from "../../Components/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoPlay: 1,
  },
};
class Movies extends React.Component {
  state = {
    bannerMovie: {},
    trailerURL: "",
  };

  componentDidMount() {
    axios
      .get(requests.fetchActionMovies)
      .then((response) => {
        console.log("[Movies didMount]", response);
        const selectedMovie =
          response.data.results[[8, 7, 6, 8][Math.floor(Math.random() * 2)]];
        // response.data.results[Math.floor(Math.random() * 20)];
        console.log(selectedMovie);
        this.setState({
          bannerMovie: selectedMovie,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClick = (movie) => {
    this.setState({
      bannerMovie: movie,
      trailerURL: "",
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  showYt = () => {
    if (this.state.trailerURL) {
      this.setState({
        trailerURL: "",
      });
    } else {
      movieTrailer(
        this.state.bannerMovie?.name ||
        this.state.bannerMovie?.original_name ||
        this.state.bannerMovie?.original_title ||
        ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          this.setState({
            trailerURL: urlParams.get("v"),
          });
        })
        .catch((error) => console.log(error));
    }
  };

  render() {
    return (
      <div className={styles.Movies}>
        <Nav />
        <Banner
          title={
            this.state.bannerMovie?.name ||
            this.state.bannerMovie?.original_name ||
            this.state.bannerMovie?.title
          }
          overview={this.state.bannerMovie.overview}
          backdrop={this.state.bannerMovie.backdrop_path}
          showYt={this.showYt}
        />
        {this.state.trailerURL && (
          <Youtube videoId={this.state.trailerURL} opts={opts} />
        )}
        <Row
          genre={"4humans Technologies"}
          fetchurl={requests.fetchNetflixOriginals}
          isBiggerRow
          changeBanner={this.handleClick}
        />
        <Row
          genre={"Trending Now"}
          fetchurl={requests.fetchTrending}
          changeBanner={this.handleClick}
        />
        <Row
          genre={"Top Rated"}
          fetchurl={requests.fetchTopRated}
          changeBanner={this.handleClick}
        />
        <Row
          genre={"Action Movies"}
          fetchurl={requests.fetchActionMovies}
          changeBanner={this.handleClick}
        />
        <Row
          genre={"Comedy Movies"}
          fetchurl={requests.fetchComedyMovies}
          changeBanner={this.handleClick}
        />
        <Row
          genre={"Trending Now"}
          fetchurl={requests.fetchTrending}
          changeBanner={this.handleClick}
        />
        <Row
          genre={"Action Movies"}
          fetchurl={requests.fetchActionMovies}
          changeBanner={this.handleClick}
        />
        <Row
          genre={"Comedy Movies"}
          fetchurl={requests.fetchComedyMovies}
          changeBanner={this.handleClick}
        />
        <Row
          genre={"Horror Movies"}
          fetchurl={requests.fetchHorrorMovies}
          changeBanner={this.handleClick}
        />
        <Row
          genre={"Documentaries"}
          fetchurl={requests.fetchDocumentaries}
          changeBanner={this.handleClick}
        />
      </div>
    );
  }
}

export default Movies;
