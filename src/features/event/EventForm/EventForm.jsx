import React, { Component } from 'react'
import {Segment , Form } from 'semantic-ui-react';
class EventForm extends Component
 {
   state={
     title:'',
     date:'',
     city:'',
     venue:'',
     hostedBy:''
   }

  handleEventSubmit = (evt) => 
  {
    evt.preventDefault();
    this.props.createEvent(this.state);
  }
   
  handleInputChange = ({target:{name,value}}) =>{
    this.setState({
      [name]:value
    })
  }
    render() {

      const {cancelFormOpen} = this.props;
      const {title}=this.state;
        return (
                  <Segment>
                    <Form onSubmit={this.handleEventSubmit} autoComplete='off' >
                      <Form.Field>
                        <label>Event Title</label>

                        <input 
                          name='title'  
                          onChange={this.handleInputChange} 
                          value={title} 
                          placeholder="Event Title" />
                     
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input
                          name='title'  
                          onChange={this.handleInputChange} 
                          value={title}  
                        type="date" placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input 
                          name='city'  
                          onChange={this.handleInputChange} 
                          value={city} 
                        placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input 
                        name='venue'  
                        onChange={this.handleInputChange} 
                        value={venue} 
                        placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input 
                          name='hostedBy'  
                          onChange={this.handleInputChange} 
                          value={hostedBy} 
                        placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button onClick={cancelFormOpen} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}
export default EventForm;