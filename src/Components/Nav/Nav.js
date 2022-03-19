import React from "react"
import Logo from "../../assets/list.svg"
import styles from "./Nav.module.css"

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
    this.nav = React.createRef()
  }

  handleScroll = () => {
    if (window.scrollY <= 100) {
      this.nav.current.style.backgroundColor = "transparent"
      console.log("[Less Than 100]")
    } else {
      this.nav.current.style.backgroundColor = "#111"
      console.log("[More Than 100]")
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    return (
      <nav className={styles.Nav} ref={this.nav}>
        <div className={styles.Nav__Left__Subnav}>
          {/* <img src={Logo} className={styles.Nav__Logo} /> */}
          <h3 className={styles.Nav__Demo}>DEMO</h3>
          <a href="#">Sports</a>
          <a href="#">Live TV</a>
          <a href="#">Premium</a>
          <a href="#">Top Rated</a>
        </div>
        <a className={styles.Nav__Login}>
          {" "}
          <span className={styles.Nav__Login__child}>Rohit</span>{" "}
        </a>
        <a href="#" className={styles.Nav__Hamburger}>
          <img src={Logo} className={styles.Nav__Hamburger__Image} />
        </a>
      </nav>
    )
  }
}

export default Nav
