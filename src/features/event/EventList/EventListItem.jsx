import React, { Component } from 'react'
import EventListAttendee from './EventListAttendee'
import {Item,Segment,Icon,List,Button } from 'semantic-ui-react';

 class EventListItem extends Component {
    render() {
      const {event}=this.props;
        return (
            <div>
                     <Segment.Group>
                        <Segment>
                          <Item.Group>
                            <Item>
                              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                              <Item.Content>
                                <Item.Header >{event.title}</Item.Header>
                                <Item.Description>
                                    Hosted by {event.hostedBy}
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Item.Group>
                        </Segment>
                        <Segment>
                          <span>
                            <Icon name="clock" /> {event.date} |
                            <Icon name="marker" /> {event.venue}
                          </span>
                        </Segment>
                        <Segment secondary>
                          <List horizontal>
                            {event.attendees && event.attendees.map(attendee=>(
                            <EventListAttendee key={attendee.id} attendee={attendee}/>
                            ))}

                          </List>
                        </Segment>
                        <Segment clearing>
                         <span>{event.Description}</span>
                          <Button as="a" color="teal" floated="right" content="View" />
                        </Segment>
                      </Segment.Group>
            </div>
        )
    }
}
export default EventListItem;