import React, { Component } from "react";

class Game extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 80 }}>
        <div>
          <h2>Niki's API - game Selectors</h2>
        </div>

        <form>
          <button
            class="btn"
            onClick={() => window.history.push("/Anotherpage")}
          >
            Let's play!
          </button>
        </form>
      </div>
    );
  }
}

export default Game;
