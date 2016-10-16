import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import profiles_info from './profiles_info';

import Header from './Components/Header';
import Profile from './Components/Profile';

class App extends Component {
  render() {
  	console.log(profiles_info);
    return (
      <div className="App">
        <Header />
        <div className="container profiles-holder">
          {
            profiles_info.map((profile) => {
              return (
                <div className="col-xs-12 col-md-4" key={ profile.id }>
                  <Profile id={ profile.id } username={ profile.username } description={ profile.description }/>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
