import React, { Component } from "react";

class Gameselector extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
        <div>
          <h2>Select Your Game</h2>
          <form>
            <button class="btn" onClick={() => history.push("/Gameselector")}>
              Go to Game!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Gameselector;
