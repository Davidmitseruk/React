import React, { Component } from "react";
import { FaRegLightbulb } from "react-icons/fa";

class LightbulbToggle extends Component {
  state = {
    isLightOn: true
  };

  turnOn = () => this.setState({ isLightOn: true });
  turnOff = () => this.setState({ isLightOn: false });

  render() {
    const { isLightOn } = this.state;

    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: isLightOn ? "white" : "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s"
        }}
      >
        {isLightOn && (
          <FaRegLightbulb
            size={120}
            color={isLightOn ? "yellow" : "gray"}
            style={{ marginBottom: "20px" }}
          />
        )}

        <div>
          <button onClick={this.turnOn} style={{ marginRight: "10px" }}>
            Turn On
          </button>
          <button onClick={this.turnOff}>Turn Off</button>
        </div>
      </div>
    );
  }
}

export default LightbulbToggle;