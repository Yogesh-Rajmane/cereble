import React,{Component,Fragment} from 'react';
import {Button} from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container} from 'semantic-ui-react';

class App extends Component
{
  render()
  {
    return (
      <Fragment>
        <NavBar></NavBar>
        <Container className="main">
          <EventDashboard />
        </Container>
        {/* <h1>Rev-vents</h1>
        <EventDashboard></EventDashboard>
   
        {/* <button className="ui icon button">
          <i className="smile icon"></i>
          CSS Button
        </button>
        <Button icon="smile" content="React Button"></Button> */}
      </Fragment> 
    );    
  }

}

export default App;
