import { Component } from "react";
import "./static/styles/theme.scss";
// import "taro-ui/dist/style/index.scss";
// import "./static/styles/initialize.css";

class App extends Component {
  render() {
    return this.props.children;
  }
}

export default App;
