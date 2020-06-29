import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 3,
    };
   this.counterChange = this.counterChange.bind(this);
  }

  counterChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      counter: value
    });

    // if(!value){
    //   this.setState({
    //     counter: 0
    //   });
    // }

  }

 

  render() {
    const {counter} = this.state;
    const multiplicationTables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const tableStyle = {
      border: "2px solid black",
      borderCollapse: "collapse",
      textAlign: "center",
      margin: "0 auto",
      fontSize: "30px"
    };

    return (
      <div className="App">
            <h1> Multiplication App </h1>
            <input
              name="counter"
              onChange={this.counterChange}
              value={counter}
              type="number"
              style={{width: "14%", height: "30px", fontSize: "25px"}}
            />
            <br /> <br />
          
            <table style={tableStyle}>
                <tbody>
                    <tr>
                      <th>Multiplication Table</th>
                    </tr>
                    {multiplicationTables.map((multiplicationTable, index) => (
                      <tr key={index}>
                        <td style={tableStyle}>
                          {multiplicationTable} * {counter ? counter : 0} = {multiplicationTable * counter}
                        </td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
  }
}

export default App;
