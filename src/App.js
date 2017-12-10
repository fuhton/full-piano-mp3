import path from 'path';
import React, { Component } from 'react';
import Tone from 'tone';
import { Player, notes } from 'piano-mp3';

const availNotes = notes.slice(39, 51);

class App extends Component {
  constructor(props) {
    super(props);
    this.player = new Player();
    this.player.make();
  }

  render() {
    return (
      <ul className="set">
        {availNotes.map((n) => (
          <li
            className={`${n[0]} ${n.length === 3 ? "black" : "white"}`}
            key={n}
            onClick={() => this.player.playNote(n)}
          />
        ))}
      </ul>
    );
  }
}

export default App;
