import React, {Component} from "react";
import "./App.scss";
import Button from "./Components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  onClickHandler = () => {
    alert ('I am clicked');
  }
  render() {
    return (
      <>
      <Button label="Home" type="link" />
      <Button label="Home" type="sucess" size= "large" />
      <Button label="Contact Us" type="danger" />
      <Button label="About Us" type="info" size="small" />
      <Button
        label="About Us"
        type="info"
        size="large"
        clickme = {this.onClickHandler}
      />
      <Button />
    </>
    );
  }
}

export default App;

