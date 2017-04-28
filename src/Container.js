import React, { Component } from 'react';

export default class Container extends Component {
  render() {
    return (

      <div>
        <header><h1>What I've Been Up to Lately</h1></header>

        <div>
          <hr/>
          <p>
            <table className="footer">
              <tr className="floatCenter">
                <td>Created by <br/> Sophie Wood</td>
                <td id="goHome" >
                  <a href="/">
                    <div className="image">
                      <img className="homeButton" src="resources/orange.png" alt="home button"
                           style={{"width": "60px", "height": "60px", "border" :" 0"}}/>
                      <span className="orangeButton">Home
                </span>
                    </div>
                  </a>
                </td>
                <td>last updated <br/> 4/28/17</td>
              </tr>

            </table>
          </p>
        </div>

      </div>
    );
  }
}