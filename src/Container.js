import React, {Component} from 'react';

export default class Container extends Component {
  render() {
    return (

    <div>
      <div><h1>What I've Been Up to Lately</h1></div>

      <br/>

      <h3>Learning the CROP method for solving a Rubix cube</h3>
      <img className="displayed" src="resources/rubix_cube.png" alt="rubix cube"
           style={{"width": "90%", "height": "30%", "border": 0}}/>

      <br/>
      <h3>Playing generals.io</h3>
      <img className="displayed" src="resources/generals.jpg" alt="generals"
           style={{"width": "50%", "height": "50%", "border": 0}}/>

      <hr/>
      <div>
        <table className="footer">
          <tbody>
          <tr className="floatCenter">
            <td>Created by <br/> Sophie Wood</td>
            <td id="goHome">
              <a href="/">
                <div className="image">
                  <img className="homeButton" src="resources/orange.png" alt="home button"
                       style={{"width": "60px", "height": "60px", "border": 0}}/>
                  <span className="orangeButton fixFont">Home
                </span>
                </div>
              </a>
            </td>
            <td>last updated <br/> 4/28/17</td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
    );
  }
}