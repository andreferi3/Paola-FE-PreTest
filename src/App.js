import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Portofolio from './components/Portofolio'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <Portofolio />} />
      </Switch>
    )
  }
}

export default App;
