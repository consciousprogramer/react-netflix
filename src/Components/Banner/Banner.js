import React from "react";
// import axios from "../../axios";
import styles from "./Banner.module.css";
import requests from "../../requests";

const baseUrl = "https://image.tmdb.org/t/p/original/";
class Banner extends React.Component {
  handleClick = () => {
    this.props.showYt();
  };

  render() {
    const bgStyle = {
      backgroundImage: `url('${baseUrl}${this.props.backdrop}')`,
    };
    return (
      <header className={styles.Banner} style={bgStyle}>
        <div className={styles.Banner__Content}>
          <h1 className={styles.Banner__Heading}>{this.props.title}</h1>
          <div className={styles.Banner__Buttons}>
            <button
              className={styles.Banner__Button}
              onClick={this.handleClick}
            >
              Play
            </button>
            <button className={styles.Banner__Button}>Show List</button>
          </div>
          <p className={styles.Banner__Overview}>{this.props.overview}</p>
        </div>
        <div className={styles.GradientBox}></div>
      </header>
    );
  }
}

export default Banner;
