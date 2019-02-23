import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  state = {
    colors: ['#007bff', '#6610f2', '#dc3545', '#ffc107', '#28a745', '#17a2b8', '#17a2b8', '#f8f9fa']
  };

  random = () => {
    let random = Math.floor(Math.random() * this.state.colors.length);
    return this.state.colors[random]
  }

  render() {

    let pyramid2 = [],
      pyramid2Row = [],
      size2 = 20,
      i = 1,
      j = 0;
    while (i <= size2) {

      if (j < size2 - i) {
        pyramid2Row.push(<span style={{ opacity: 0 }} key={j}>-</span>);
        j++;
      }

      else if (j === size2) {
        i++;
        j = 0;
        pyramid2.push(<div key={i} style={{ color: this.random() }}>{pyramid2Row}</div>);
        pyramid2Row = [];
      }

      else {
        pyramid2Row.push(<span key={j}>^ </span>);
        j++;
      }
    }

    return (
      <article className="pyramid">
        <section className="pyrmaid-content">
          {pyramid2}
        </section>
      </article>
    );
  }
}

export default App;
