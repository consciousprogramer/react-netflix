import React from "react";
import axios from "../../axios";
import { handleLeftSlide, handleRightSlide } from './slide'
import styles from "./Row.module.css";

// Base URL for image download;
const baseUrl = "https://image.tmdb.org/t/p/original/";

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.rowImages = React.createRef();
  }

  componentDidMount() {
    console.log("[Row mount Complete]");
    axios
      .get(this.props.fetchurl)
      .then((response) => {
        console.log("[Get Complete]");
        const reversedArray = response.data.results.reverse();
        // console.log(reversedArray);
        this.setState({
          results: reversedArray,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // handleLeftSlide = () => {
  //   var x = -130;
  //   this.rowImages.current.scrollBy({
  //     top: 0,
  //     left: x,
  //     behavior: "smooth",
  //   });
  // };

  // handleRightSlide = () => {
  //   var x = 160;
  //   this.rowImages.current.scrollBy({
  //     top: 0,
  //     left: x,
  //     behavior: "smooth",
  //   });
  // };

  handleClick = (movie) => {
    console.log("[Clicked Movie >>>]", movie);
    this.props.changeBanner(movie);
  };

  render() {
    return (
      <div className={styles.Row}>
        <div className={styles.Row__Head__Slidebuttons__Combo}>
          <h1 className={styles.Row__Heading}>{this.props.genre}</h1>
          <div className={styles.Row__Slidebuttons__Combo}>
            <button
              className={styles.Row__Slidebutton}
              onClick={() => { handleLeftSlide(this.rowImages) }}
            >
              &lt;
            </button>
            <button
              className={styles.Row__Slidebutton}
              onClick={() => handleRightSlide(this.rowImages)}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className={styles.Row__Images} ref={this.rowImages}>
          {this.state.results.map((result) => {
            return (
              <div key={result.id} className={styles.Row__Posterimage__Wrapper}>
                {/* <div className={styles.Row__Posterimage__Overlay}></div> */}
                <img
                  loading="lazy"
                  className={
                    this.props.isBiggerRow
                      ? styles.Row__Posterimage
                      : styles.Row__Backdropimage
                  }
                  src={
                    this.props.isBiggerRow
                      ? `${baseUrl}${result.poster_path}`
                      : `${baseUrl}${result.backdrop_path}`
                  }
                  onClick={() => this.handleClick(result)}
                  alt={result?.name || result?.original_name}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Row;
